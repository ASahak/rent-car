import { Container, Grid, GridItem, Heading, VStack, Image, Text } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import { Info } from '@/containers/reservation/info';
import { StepOne } from '@/containers/reservation/step-one';
import { ReservationForm } from '@/components';
import { useContext } from 'react';
import { ReservationContext } from '@/contexts/reservation';

const DefaultContent = () => (
  <VStack spacing="4.8rem">
    <Info />
    <Container maxW='120rem' mb={8}>
      <Grid templateColumns={{ base: '1fr', sm: '1fr 1.5fr'}} gap={{ '2xl': '4rem', xs: '4rem', sm: '0' }}>
        <GridItem>
          <Heading mb={10} fontSize="4rem" color="white" fontWeight={600} letterSpacing={2}>
            Reservation
          </Heading>
          <Text color="brand.500" fontSize="1.4rem" mb={10}>Step1: Ride info</Text>
          <ReservationForm />
        </GridItem>
        <GridItem display={{ base: 'none', sm: 'flex' }} alignItems="center">
          <Image
            src="/reserve_car2.png"
            ml={{ '2xl': '0', xs: '0', sm: 'calc((100vw - calc(min(calc(100vw - 1rem), 120rem)) / 1.2) / 2)' }}
          />
        </GridItem>
      </Grid>
    </Container>
  </VStack>
);
export default function Reservation() {
  const { steps } = useContext(ReservationContext);
  const [searchParams] = useSearchParams();
  const step = searchParams.get('step');


  switch (step) {
    case '1': {
      if (!steps.one) return <DefaultContent />
      return <StepOne/>;
    }
    default:
      return <DefaultContent />
  }
}