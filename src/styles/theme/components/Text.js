import {defineStyleConfig} from '@chakra-ui/react'
// import { mode } from '@chakra-ui/theme-tools';

export default defineStyleConfig({
  baseStyle: {
    fontFamily: 'inherit',
  },
  sizes: {},
  variants: {
    'placeholder': {
      color: 'gray.300',
      fontSize: '1.2rem',
      fontWeight: '500',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    'as-brand-link': {
      display: 'block',
      fontSize: '1.5rem',
      fontWeight: '500',
      lineHeight: '1.9rem',
      cursor: 'pointer',
      color: 'brand.500',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    },
    'table-cell': ({ colorMode }) => ({
      fontSize: '1.4rem',
      fontWeight: 400,
      lineHeight: '1.8rem',
      color: colorMode === 'dark' ? 'white' : 'gray.400',
      transition: 'color 240ms',
      'i[class*="icon-"]': {
        color: colorMode === 'dark' ? 'white' : 'gray.200',
        display: 'inline-block',
      }
    }),
    'unread-notification-count': {
      position: 'absolute',
      top: '-10px',
      width: '16px',
      height: '16px',
      borderRadius: '10px',
      backgroundColor: 'red.500',
      color: 'white',
      fontSize: '1rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      right: '-8px',
      lineHeight: '1.2rem',
    }
  },
  defaultProps: {},
})