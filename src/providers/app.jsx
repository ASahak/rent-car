import { Chakra } from './chakra';
import { Router } from './router';
import { Toast } from './toast';

export const AppProviders = () => {
  return (
    <Chakra>
      <Toast>
        <Router />
      </Toast>
    </Chakra>
  )
}