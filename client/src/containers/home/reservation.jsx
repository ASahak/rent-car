import { Image, Container, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import { ReservationForm } from '@/components';
import { useBus } from '@/hooks';
import { useRef } from 'react';

export const Reservation = () => {
  const headingRef = useRef();

  useBus('rent-car-from-hero', () => {
    headingRef.current.scrollIntoView({ behavior: 'smooth' })
  }, []);

  return (
    <Container maxW='120rem' mb={8}>
      <Grid templateColumns={{ base: '1fr', sm: '1.5fr 1fr'}} gap={{ '2xl': '4rem', xs: '4rem', sm: '0' }}>
        <GridItem display={{ base: 'none', sm: 'flex' }} alignItems="center">
          <Image
            src="/reserve_car.png"
            transform="scaleX(-1)"
            ml={{ '2xl': '0', xs: '0', sm: 'calc((100vw - calc(min(calc(100vw - 1rem), 120rem)) / 1.2) / 2 * -1)' }}
          />
        </GridItem>
        <GridItem>
          <Heading mb={10} fontSize="4rem" color="white" fontWeight={600} letterSpacing={2} ref={headingRef}>
            Reservation
          </Heading>
          <Text color="brand.500" fontSize="1.8rem" mb={10}>Step1: Ride info</Text>
          <ReservationForm />
        </GridItem>
      </Grid>
    </Container>
  )
}