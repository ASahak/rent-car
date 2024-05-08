import { defineStyleConfig } from '@chakra-ui/react'

export default defineStyleConfig({
  baseStyle: {
    fontFamily: 'inherit',
    _hover: {}
  },
  sizes: {},
  variants: {
    'brand': ({ colorMode }) => ({
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