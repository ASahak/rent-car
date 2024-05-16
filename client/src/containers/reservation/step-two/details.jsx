import { useContext, memo } from 'react';
import dayjs from 'dayjs';
import { VStack, Text, Flex, Box, Icon } from '@chakra-ui/react';
import { RiMailLine, RiPhoneLine } from 'react-icons/ri';
import { ReservationContext } from '@/contexts/reservation';
import ReactLocationIcon from '@/assets/icons/location.svg?react';
import { findCountryCode } from '@/utils/helpers';

export const Details = memo(() => {
  const { data } = useContext(ReservationContext);
  const { pickUpDate, pickUpTime, passengers, pickUpLocation, dropOffLocation, email, phone } = data.details;

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
          <ReactLocationIcon stroke="var(--chakra-colors-gray-200)"/>
          {pickUpLocation}
        </Text>
        <Text display="grid" gridTemplateColumns="32px 1fr" alignItems="center" gap={6} color="white" fontSize="1.8rem">
          <ReactLocationIcon stroke="var(--chakra-colors-gray-200)"/>
          {dropOffLocation}
        </Text>
        <Text display="grid" gridTemplateColumns="32px 1fr" alignItems="center" gap={6} color="white" fontSize="1.8rem">
          <Flex justifyContent="center">
            <Icon as={RiMailLine} color="gray.200" fontSize="2.6rem"/>
          </Flex>
          {email}
        </Text>
        <Text display="grid" gridTemplateColumns="32px 1fr" alignItems="center" gap={6} color="white" fontSize="1.8rem">
          <Flex justifyContent="center">
            <Icon as={RiPhoneLine} color="gray.200" fontSize="2.6rem"/>
          </Flex>
          {`${findCountryCode(phone.country)} ${phone.number}`}
        </Text>
      </VStack>
    </VStack>
  )
})
