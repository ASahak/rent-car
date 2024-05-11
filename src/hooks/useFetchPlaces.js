import { useContext, useEffect, useState } from 'react';
import { ToastContext } from '@/contexts';

export const useFetchPlaces = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const { onToast } = useContext(ToastContext);

  const findPlaces = async (search) => {
    try {
       if (!search) {
         setData([]);
         return;
       }
      let cache = localStorage.getItem('geoapify-cache');
      if (cache) {
        const places = JSON.parse(cache);
        const place = places[search.toLowerCase()];
        if (place) {
          setData(place)
          return;
        }
      } else {
        localStorage.setItem('geoapify-cache', JSON.stringify({}))
      }
      setIsLoading(true);
      const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(search)}&limit=5&apiKey=${import.meta.env.VITE_GEOAPIFY_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      const list = data.features.map(e => ({
        label: e.properties.formatted,
        value: e.properties.place_id,
      }))
      console.log(data, list);
      setIsLoading(false);
      setData(list);

      // set cache
      cache = localStorage.getItem('geoapify-cache');
      const places = JSON.parse(cache);
      places[search.toLowerCase()] = list;
      localStorage.setItem('geoapify-cache', JSON.stringify(places))
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setData([]);
      onToast({
        title: '',
        description: 'Unknown place!',
        status: 'error',
      });
    }
  }

  const reset = ({ list }) => {
    setIsLoading(false);
    setData(list);
  }

  return {
    isLoading,
    data,
    findPlaces,
    reset,
  }
}