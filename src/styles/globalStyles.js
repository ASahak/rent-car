// eslint-disable-next-line
export default {
  global: (props) => ({
    'html': {
      height: '-webkit-fill-available',
      fontSize: '10px',
      [`@media only screen and (max-width: ${props.theme.breakpoints.lg})`]: {
        fontSize: '8px',
      }
    },
    'body': {
      height: '100%',
      '-webkit-overflow-scrolling': 'touch',
      background: 'black',
      transition: '0s',
    },
    'body.freeze-body': {
      position: 'fixed',
      height: '100dvh',
    },
    '@supports (-webkit-touch-callout: none)': {
      body: {
        /* The hack for Safari */
        minHeight: '-webkit-fill-available',
      }
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
    '.button-as-select[aria-expanded="true"]': {
      borderColor: 'brand.500'
    },
    /*DATEPICKER overrides*/
    '.react-datepicker-wrapper': {
      display: 'block',
      width: '100%',
    },
    '.react-datepicker__input-container .react-datepicker__calendar-icon': {
      fill: 'white',
      zIndex: '22',
      fontSize: '1.4rem',
      right: '5px',
      bottom: 0,
      top: 0,
      margin: 'auto'
    },
    '.react-datepicker__view-calendar-icon input': {
      padding: '6px 25px 5px 10px'
    },
    '.react-datepicker': {
      fontSize: '1.2rem',
    },
    '.react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header': {
      fontSize: '1.3rem',
      lineHeight: '2rem',
    },
    '.react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name': {
      width: '2.4rem',
      lineHeight: '2.4rem',
    }
  })
};