import countries from '@/constants/countries';

export const getCountries = () => countries.map(e => ({
  ...e,
  value: e.iso.toLowerCase(),
  label: e.name,
  mask: replaceSharp(e.mask),
}));

export const formatNumber = (amount) => new Intl.NumberFormat().format(amount);

export const findMask = (country) => getCountries().find(e => e.iso.toLowerCase() === country).mask;
export const findCountryCode = (country) => getCountries().find(e => e.iso.toLowerCase() === country).code;

export const replaceSharp = (mask) => {
  if (typeof mask === 'string') {
    return mask.replace(/#/g, '9');
  } else if (Array.isArray(mask)) {
    return mask.map((mask, index) => {
      return mask.replace(/#/g, '9');
    });
  }
}

