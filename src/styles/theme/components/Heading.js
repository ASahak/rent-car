import {defineStyleConfig} from '@chakra-ui/react'

export default defineStyleConfig({
  baseStyle: {},
  sizes: {},
  variants: {
    'page-title': ({ colorMode }) => ({
      fontFamily: 'inherit',
      fontSize: '4rem !important',
      fontWeight: '700',
      textTransform: 'capitalize',
      color: colorMode === 'dark' ? 'white' : 'gray.800',
    }),
    'title-details-page': ({ colorMode }) => ({
      fontSize: '1.8rem',
      fontWeight: '500',
      color: colorMode === 'dark' ? 'white' : 'gray.800',
    }),
    'block-title-dashboard': ({ colorMode }) => ({
      marginBottom: '2rem',
      fontSize: '1.6rem',
      fontWeight: '500',
      lineHeight: '2rem',
      textTransform: 'uppercase',
      color: colorMode === 'dark' ? 'white' : 'gray.800',
    })
  },
  defaultProps: {},
})