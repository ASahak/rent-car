import { Chakra } from './chakra';
import { Router } from './router';
import { Toast } from './toast';
import { Reservation } from './reservation';

export const AppProviders = () => {
  return (
    <Chakra>
      <Toast>
        <Reservation>
          <Router />
        </Reservation>
      </Toast>
    </Chakra>
  )
}