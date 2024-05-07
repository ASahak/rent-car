import {defineStyleConfig} from '@chakra-ui/react'

export default defineStyleConfig({
  baseStyle: {
    fontFamily: 'inherit',
  },
  sizes: {},
  variants: {
    'base': ({ colorMode }) => ({
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
    }),
  },
  defaultProps: {},
})