import PropTypes from 'prop-types';
import { ReservationContext } from '@/contexts/reservation';
import { useState } from 'react';

export const Reservation = ({ children }) => {
  const [steps, setSteps] = useState({
    one: null,
    two: null,
    three: null,
  })

  return (
    <ReservationContext.Provider
      value={{
        steps,
        setSteps,
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