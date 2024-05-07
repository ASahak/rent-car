import { Chakra } from './chakra';
import { Router } from './router';

export const AppProviders = () => {
  return (
    <Chakra>
      <Router />
    </Chakra>
  )
}