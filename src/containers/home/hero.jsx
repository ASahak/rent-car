import { memo } from 'react';
import { Box, Button, Container, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';

export const Hero = memo(() => {
  return (
    <Box overflow="hidden" w="full">
      <Container maxW='120rem' position='relative'>
        <Grid templateColumns={{ base: '1fr', sm: '1fr 1fr', md: '1fr 1.5fr' }}>
          <GridItem py="6rem" gridRow={{ base: 2, sm: 1 }}>
            <Heading mb={10} fontSize="4rem" color="white" fontWeight={600} letterSpacing={2}>
              Find, book and
              <br/>
              rent a car Easly
            </Heading>
            <Text fontSize="1.6rem" color="gray.320">Get a car wherever and whenever you need it</Text>
            <Button variant="brand" px={16} mt={4}>Rent a car</Button>
          </GridItem>
          <GridItem py="2rem" alignItems="center" display="flex">
            <Image
              src="/car_hero_luxury.png"
            />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
})