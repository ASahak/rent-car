// eslint-disable-next-line
export default {
  global: (props) => ({
    'html': {
      fontSize: '10px',
      [`@media only screen and (max-width: ${props.theme.breakpoints.lg})`]: {
        fontSize: '8px',
      }
    },
    'body': {
      background: 'gray.30',
      transition: '0s'
    },
    'body, *': {
      fontFamily: 'Poppins,sans-serif;',
      margin: '0',
      boxSizing: 'border-box',
      padding: '0',
      fontSize: '100%',
    },
    '.w-full': {
      width: '100%',
    },
    '[class^="icon-"].inherit, [class*=" icon-"]': {
      font: 'inherit',
    },
    'html, body, #root': {
      width: '100%',
      height: '100%;',
    },
    '.custom-scrollbar-content': {
      '&.lg': {
        '&::-webkit-scrollbar': {
          width: '4px',
          height: '4px',
        }
      },
      '&::-webkit-scrollbar': {
        width: '2px',
        height: '2px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'brand.500',
        borderRadius: '4px',
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: 'gray.100',
      },
    },
  })
};