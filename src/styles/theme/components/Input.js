import {defineStyleConfig} from '@chakra-ui/react'

export default defineStyleConfig({
  baseStyle: {
    fontFamily: 'inherit',
  },
  sizes: {},
  variants: {
    'global-search': ({ colorMode }) => ({
      field: {
        height: '4.6rem',
        fontSize: '1.2rem',
        padding: '1rem 1rem 1rem 5rem',
        backgroundColor: colorMode === 'dark' ? 'darcula.300' : 'white',
        border: '1px solid',
        borderColor: colorMode === 'dark' ? 'darcula.400' : 'gray.100',
        transition: 'box-shadow .3s',
        boxShadow: '0px 0px 2px 1px transparent',
        _focus: {
          boxShadow: '0px 0px 1px 1px var(--chakra-colors-brand-500)',
          borderColor: 'transparent',
        }
      }
    }),
    'base': ({ colorMode }) => ({
      field: {
        border: '1px solid',
        borderColor: colorMode === 'dark' ? 'darcula.400' : 'gray.100',
        transition: 'box-shadow .3s',
        boxShadow: '0px 0px 2px 1px transparent',
        borderRadius: 'md',
        bgColor: colorMode === 'dark' ? 'darcula.500' : 'white',
        color: colorMode === 'dark' ? 'white' : 'black',
        fontSize: '1.2rem',
        _placeholder: {
          color: colorMode === 'dark' ? 'gray.200' : 'gray.300',
        },
        _invalid: {
          borderColor: 'red.400'
        },
        _focus: {
          boxShadow: '0px 0px 1px 1px var(--chakra-colors-brand-500)',
          borderColor: 'transparent',
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