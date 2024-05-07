import PropTypes from 'prop-types';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/styles/theme';

export const Chakra = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  )
}
Chakra.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}