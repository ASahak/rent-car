import { Text, Container, Heading, VStack } from '@chakra-ui/react';

export const Info = () => {
  return (
    <Container maxW='120rem'>
      <VStack spacing="4.8rem" w="full">
        <Heading color="white" w="full" mt={16} textAlign="start" fontSize="6.4rem" fontFamily="Syne">Luxury Car Travel</Heading>
        <Text color="white" fontSize="1.8rem">A well-known car service will always provide the best quality rides to maintain its reputation in the market. Therefore, they will have a name in the market; in other words, you can say people would have positive remarks about them. Not only this, but they would also be offering the best of all services. Lincoln MKTis a full-size, premium seven-passenger crossover that features Lincoln Drive Control, active noise control, and numerous tech features, including Wi-Fi hotspot and available navigation system with integrated Sirius radio. An audio upgrade provides THX cinema-quality sound via 14 speakers with 700 watts of power. Safety features include inflatable safety belts. Updates for 2016 have not yet been announced. With a 303-horsepower, 3.7-litre V6 or 365 </Text>
      </VStack>
    </Container>
  )
}