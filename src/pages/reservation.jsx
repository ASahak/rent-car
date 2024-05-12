import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { StepTwo } from '@/containers/reservation/step-two';
import { StepOne } from '@/containers/reservation/step-one';
import { ReservationContext } from '@/contexts/reservation';

export default function Reservation() {
  const { steps } = useContext(ReservationContext);
  const [searchParams] = useSearchParams();
  const step = searchParams.get('step');

  switch (step) {
    case '2': {
      if (!steps.one) return <StepOne />
      return <StepTwo/>;
    }
    default:
      return <StepOne />
  }
}