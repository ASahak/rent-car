import {defineStyleConfig} from '@chakra-ui/react'

export default defineStyleConfig({
  baseStyle: {
    container: {
    },
    thumb: {
      bg: 'white',
    },
    track: {
      bg: 'gray.100',
      _checked: {
        bg: 'brand.500',
      },
    },
  },
  defaultProps: {},
})