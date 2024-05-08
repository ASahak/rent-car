import { VStack } from '@chakra-ui/react';
import { Hero } from '@/containers/home/hero';
import { HowItWorks } from '@/containers/home/how-it-works';
import { CarBrands } from '@/containers/home/car-brands';

export default function Home() {
  return (
    <VStack>
      <Hero />
      <HowItWorks />
      <CarBrands />
    </VStack>
  )
}