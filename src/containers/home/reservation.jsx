import { Image, Container, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import { ReservationForm } from '@/components';

export const Reservation = () => {
  return (
    <Container maxW='120rem'>
      <Grid templateColumns={{ base: '1fr', sm: '1fr 1fr'}} gap={{ base: '4rem', sm: '8rem'}}>
        <GridItem>
          <Image src="/reserve_car.png" ml="calc((100vw - min(calc(100vw - 1rem), 120rem)) / 2 * -1)" />
        </GridItem>
        <GridItem>
          <Heading mb={10} fontSize="4rem" color="white" fontWeight={600} letterSpacing={2}>
            Reservation
          </Heading>
          <Text color="brand.500" fontSize="1.4rem" mb={10}>Step1: Ride info</Text>
          <ReservationForm />
        </GridItem>
      </Grid>
    </Container>
  )
}