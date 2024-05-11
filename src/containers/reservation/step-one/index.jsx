import React from 'react';
import { Heading, VStack, Text, Box, Container, GridItem, Image, Grid } from '@chakra-ui/react';
import { Details } from './details';

export const StepOne = () => {
  return (
    <Container maxW="120rem" mb={8}>
      <VStack w="full" spacing="4.8rem" alignItems="start">
        <Grid w="full" templateColumns={{ base: '1fr', sm: '1fr 1.5fr'}} gap={{ '2xl': '4rem', xs: '4rem', sm: '0' }}>
          <GridItem>
            <Box>
              <Heading color="white" w="full" mt={16} textAlign="start" fontSize="6.4rem" fontFamily="Syne">
                Reservation
              </Heading>
              <Text color="brand.500" fontSize="1.8rem" mt="3.2rem" mb={10}>Step1: Ride info</Text>
              <Details />
            </Box>
          </GridItem>
          <GridItem display={{ base: 'none', sm: 'flex' }} alignItems="center">
            <Image
              w="full"
              position="relative"
              src="/reserve_car3.png"
              left={{ '2xl': '0', xs: '0', sm: 'calc((100vw - calc(min(calc(100vw - 1rem), 120rem)) / 1.2) / 2)' }}
            />
          </GridItem>
        </Grid>
        <Box>
          <Text color="brand.500" fontSize="1.8rem" mt="3.2rem" mb={10}>Step2: Choose vehicle</Text>
        </Box>
      </VStack>
    </Container>
  )
}
