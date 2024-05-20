import { Text, Container, Heading, VStack } from '@chakra-ui/react';

export const Info = () => {
  return (
    <Container maxW='120rem'>
      <VStack spacing="4.8rem" w="full">
        <Heading color="white" w="full" mt={16} textAlign="start" fontSize="6.4rem" fontFamily="Syne">Luxury Car Travel</Heading>
        <Text color="white" fontSize="1.8rem">
          Welcome to STS (Signature Transportation Services), your premier provider of reliable and luxurious private transportation. Whether you need a quick city ride, a stress-free airport transfer, or a comfortable long-distance trip, our professional drivers are here to ensure your journey is seamless and enjoyable. At STS, we prioritize your safety, comfort, and satisfaction, offering personalized services that cater to your unique travel needs. Experience the convenience and elegance of our transportation solutions, and let us take you wherever you need to go in style.
        </Text>
      </VStack>
    </Container>
  )
}