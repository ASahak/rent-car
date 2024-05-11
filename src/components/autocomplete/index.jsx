import { memo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useDebounce } from 'react-use';
import { Box, Flex, Spinner, Text } from '@chakra-ui/react';
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from '@choc-ui/chakra-autocomplete';
import { useFetchPlaces } from '@/hooks/useFetchPlaces';

export const Autocomplete = memo(({ selected, onSelect, placeholder = 'Search' }) => {
  const [localSearch, setLocalSearch] = useState(selected);
  const { data, isLoading, findPlaces, reset } = useFetchPlaces();
  const disableAutoComplete = useRef(false);

  useDebounce(
    async () => {
      if (!disableAutoComplete.current) {
        await findPlaces(localSearch);
        if (!localSearch) {
          onSelect(localSearch);
        }
      }
    },
    300,
    [localSearch]
  );

  const onLocalSearchChange = (e) => {
    disableAutoComplete.current = false;
    setLocalSearch(e.target.value);
  }

  const onPick = (opt) => {
    const { value, label } = opt.item;
    disableAutoComplete.current = true;
    setLocalSearch(label);
    onSelect(label);
    reset({ list: [{ value, label }] })
  }

  return (
    <AutoComplete
      variant="base"
      isLoading={isLoading}
      emphasize
      onSelectOption={onPick}
      emptyState={() => <Text fontSize="1.4rem" minH="3.4rem" justifyContent="center" display="flex" alignItems="center">No Result</Text>}
    >
      <AutoCompleteInput
        autoComplete="off"
        value={localSearch}
        fontSize="1.4rem"
        loadingIcon={<Box />}
        variant="autocomplete"
        _placeholder={{ color: 'gray.200' }}
        placeholder={placeholder}
        onChange={onLocalSearchChange}
      />
      <AutoCompleteList loadingState={<Flex alignItems="center" minH="3.4rem"><Spinner /></Flex>}>
        {data.map((place) => (
          <AutoCompleteItem
            key={place.value}
            value={place.value}
            label={place.label}
            textTransform="capitalize"
            display="inline-block !important"
            minH="3.4rem"
            color="black"
            fontWeight="500"
            fontSize="1.4rem !important"
            textAlign="left"
            boxShadow="none !important"
            outline="0 !important"
            _hover={{ bgColor: 'gray.50' }}
            _focus={{ bgColor: 'gray.50' }}
            {...selected === place.value && {
              bgColor: 'brand.500 !important',
              color: 'white !important'
            }}
          >
            {place.label}
          </AutoCompleteItem>
        ))}
      </AutoCompleteList>
    </AutoComplete>
  )
})
Autocomplete.propTypes = {
  placeholder: PropTypes.string,
  selected: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}