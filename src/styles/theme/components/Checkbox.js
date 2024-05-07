import { defineStyleConfig } from '@chakra-ui/react'

export default defineStyleConfig({
  baseStyle: {
  },
  sizes: {},
  variants: {
    'brand': () => ({
      icon: {
        h: '1.3rem',
        w: '1.3rem',
        color: 'white',
      },
      control: {
        borderRadius: 'md',
        verticalAlign: 'middle',
        h: '1.4rem',
        w: '1.4rem',
        _checked: {
          _hover: {
            backgroundColor: 'brand.500',
            borderColor: 'brand.500',
          },
          backgroundColor: 'brand.500',
          borderColor: 'brand.500',
        }
      }
    })
  },
  defaultProps: {},
})