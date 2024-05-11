import { defineStyleConfig } from '@chakra-ui/react'

export default defineStyleConfig({
  baseStyle: {
    fontFamily: 'inherit',
    _hover: {}
  },
  sizes: {},
  variants: {
    'select': () => ({
      padding: '1.3rem',
      borderRadius: '0.6rem',
      textAlign: 'left',
      bgColor: 'black',
      height: '4.4rem',
      color: 'white',
      fontWeight: 500,
      border: '1px solid white',
      fontSize: '1.2rem',
    }),
    'dropdown-item': () => ({
      display: 'inline-block !important',
      minH: '3.4rem',
      color: 'black',
      fontWeight: '500',
      fontSize: '1.4rem',
      textAlign: 'left',
      boxShadow: 'none !important',
      outline: '0 !important',
      _hover: { bgColor: 'gray.50' },
      _focus: { bgColor: 'gray.50' },
    }),
    'brand': () => ({
      appearance: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '4.4rem',
      border: 'none',
      borderRadius: '1rem',
      background: 'brand.500',
      color: 'gray.800',
      fontSize: '1.4rem',
      fontWeight: 400,
      _hover: {
        background: 'brand.600',
      }
    }),
  },
  defaultProps: {},
})