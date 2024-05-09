import {defineStyleConfig} from '@chakra-ui/react'

export default defineStyleConfig({
  baseStyle: {
    fontFamily: 'inherit',
  },
  sizes: {},
  variants: {
    'base': ({ colorMode }) => ({
      field: {
        padding: '1.3rem',
        borderRadius: '0.6rem',
        textAlign: 'left',
        bgColor: 'black',
        height: '4.4rem',
        color: 'white',
        fontWeight: 500,
        border: '1px solid white',
        fontSize: '1.2rem',
        transition: 'box-shadow .3s',
        _placeholder: {
          color: 'gray.200',
        },
        _invalid: {
          borderColor: 'red.400'
        },
        _focus: {
          borderColor: 'brand.500',
        }
      }
    }),
    'non-outline': () => ({
      field: {
        outline: 'none',
        boxShadow: 'none',
        border: 'none',
        appearance: 'none',
        fontSize: '1.4rem !important',
        color: '#000',
      }
    })
  },
  defaultProps: {},
})