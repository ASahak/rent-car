import { useContext, memo } from 'react';
import dayjs from 'dayjs';
import { VStack, Text, Flex, Box } from '@chakra-ui/react';
import { ReservationContext } from '@/contexts/reservation';
import ReactLocationIcon from '@/assets/icons/location.svg?react';

export const Details = memo(() => {
  const { data } = useContext(ReservationContext);
  const { pickUpDate, pickUpTime, passengers, pickUpLocation, dropOffLocation } = data.details;

  return (
    <VStack spacing="2.5rem" w="full" alignItems="start">
      <Box>
        <Flex gap={8}>
          <Text fontSize="1.8rem" color="white">{dayjs(pickUpDate).format('DD/MM/YYYY')}</Text>
          <Text color="white" fontSize="1.8rem">{dayjs(pickUpTime).format('h:mm A')}</Text>
        </Flex>
        <Text color="white" mt={4} fontSize="1.8rem">Passengers: {passengers}</Text>
      </Box>
      <VStack alignItems="start" spacing={4}>
        <Text display="grid" gridTemplateColumns="32px 1fr" alignItems="center" gap={6} color="white" fontSize="1.8rem">
          <ReactLocationIcon stroke="var(--chakra-colors-gray-200)" />
          {pickUpLocation}
        </Text>
        <Text display="grid" gridTemplateColumns="32px 1fr" alignItems="center" gap={6} color="white" fontSize="1.8rem">
          <ReactLocationIcon stroke="var(--chakra-colors-gray-200)" />
          {dropOffLocation}
        </Text>
      </VStack>
    </VStack>
  )
})