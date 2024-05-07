import { defineStyleConfig } from '@chakra-ui/react'

export default defineStyleConfig({
  baseStyle: {},
  sizes: {},
  variants: {
    'brand': ({ colorMode }) => ({
      tab: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '3.5rem',
        padding: '0 0.8rem',
        fontSize: '1.2rem',
        lineHeight: '1.6rem',
        borderRadius: '0.6rem',
        fontWeight: 500,
        backgroundColor: colorMode === 'dark' ? 'darcula.400' : 'gray.50',
        color: colorMode === 'dark' ? 'gray.100' : 'gray.800',
        transition: '240ms',
        _selected: {
          backgroundColor: 'brand.500',
          color: '#fff'
        },
      },
      tablist: {
        gap: '1rem',
        marginBottom: 8
      },
      tabpanel: {
        padding: 0
      }
    }),
    'api-docs': ({ colorMode }) => ({
      tab: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '3.8rem',
        padding: '0 1rem',
        fontSize: '1.4rem',
        lineHeight: '1.6rem',
        backgroundColor: colorMode === 'dark' ? 'darcula.700' : 'gray.50',
        color: colorMode === 'dark' ? 'gray.100' : 'gray.800',
        transition: '240ms',
        borderWidth: '1px',
        borderColor: colorMode === 'dark' ? 'darcula.500' : 'gray.100',
        borderLeftColor: 'transparent',
        borderRightColor: colorMode === 'dark' ? 'darcula.500' : 'gray.100',
        _first: {
          borderTopLeftRadius: '.4rem',
          borderLeftColor: colorMode === 'dark' ? 'darcula.500' : 'gray.100',
        },
        _last: {
          borderTopRightRadius: '.4rem',
          borderRightColor: colorMode === 'dark' ? 'darcula.500' : 'gray.100',
        },
        _selected: {
          backgroundColor: colorMode === 'dark' ? 'darcula.300' : 'white',
          color: colorMode === 'dark' ? 'white' : 'gray.800',
          borderBottomColor: colorMode === 'dark' ? 'darcula.300' : 'white',
        },
      },
      tablist: {
        mb: '-1px'
      },
      tabpanel: {
        backgroundColor: colorMode === 'dark' ? 'darcula.300' : 'white',
        padding: '1rem 2rem',
        borderWidth: '1px',
        borderColor: colorMode === 'dark' ? 'darcula.500' : 'gray.100',
        borderTopRightRadius: '.4rem',
        borderBottomRightRadius: '.4rem',
        borderBottomLeftRadius: '.4rem',
      }
    })
  },
  defaultProps: {},
})