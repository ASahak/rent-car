import { useState } from 'react';
import PropTypes from 'prop-types';
import { ReservationContext } from '@/contexts/reservation';

export const Reservation = ({ children }) => {
  const [data, setData] = useState({
    details: null,
    car: null,
  })

  return (
    <ReservationContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </ReservationContext.Provider>
  )
}
ReservationContext.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}