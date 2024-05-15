import PropTypes from 'prop-types';
import { useToast } from '@chakra-ui/react';
import { ToastContext } from '@/contexts/toast';

export const Toast = ({ children }) => {
  const toast = useToast();

  const onToast = ({
    status,
    description,
    title
  }) => {
    toast({
      title,
      description,
      status: status,
    });
  }

  return (
    <ToastContext.Provider
      value={{
        onToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  )
}
Toast.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}