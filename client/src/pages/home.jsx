import { VStack } from '@chakra-ui/react';
import { Hero } from '@/containers/home/hero';
import { HowItWorks } from '@/containers/home/how-it-works';
import { CarBrands } from '@/containers/home/car-brands';
import { Reservation } from '@/containers/home/reservation';

export default function Home() {
  return (
    <VStack>
      <Hero />
      <HowItWorks />
      <CarBrands />
      <Reservation />
    </VStack>
  )
}