import { memo, useContext, useState } from 'react';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, GridItem, VStack, Image, Heading, Flex, Text, Divider, Button, useToast } from '@chakra-ui/react';
import { CARS, SERVICE_TYPES } from '@/constants/global';
import ReactAccountIcon from '@/assets/icons/account.svg?react';
import ReactWinterIcon from '@/assets/icons/winter.svg?react';
import ReactTransferBoxIcon from '@/assets/icons/transferBox.svg?react';
import ReactDoorIcon from '@/assets/icons/door.svg?react';
import { ReservationContext } from '@/contexts/reservation';
import { ToastContext } from '@/contexts';
import RoutePaths from '@/constants/route-paths';
import { findCountryCode } from '@/utils/helpers';

export const Cars = memo(() => {
  const { data, setData } = useContext(ReservationContext);
  const navigate = useNavigate();
  const [isLoadingId, setIsLoadingId] = useState(null);
  const { onToast } = useContext(ToastContext);
  const selected = data.car;

  const onSelectCar = async (car) => {
    try {
      setIsLoadingId(car.id);
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL_PROD}send-message`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          carModel: `(${car.year}) ${car.label}`,
          serviceType: SERVICE_TYPES.find(e => e.value === data.details.serviceType).label,
          pickUpDate: `${dayjs(data.details.pickUpDate).format('DD/MM/YYYY')} at ${dayjs(data.details.pickUpTime).format('h:mm A')}`,
          pickUpLocation: data.details.pickUpLocation,
          dropOffLocation: data.details.dropOffLocation,
          passengers: data.details.passengers,
          phone: `${findCountryCode(data.details.phone.country)} ${data.details.phone.number}`,
          email: data.details.email,
        })
      })
      const { error } = await response.json();
      if (error) {
        throw Error(error)
      }
      setData({
        details: null,
        car: null,
      });
      onToast({
        title: '',
        description: 'Your reservation created successfully',
        status: 'success',
      });
      navigate(RoutePaths.HOME);
    } catch (err) {
      console.error(err);
      onToast({
        title: '',
        description: err.message,
        status: 'error',
      });
    } finally {
      setIsLoadingId(null);
    }
  }

  return (<Grid templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} gap={{ base: '4rem', md: '6rem' }}>
    {CARS.map((car) => (
      <GridItem key={car.id} overflow="hidden">
        <VStack
          spacing="1.6rem"
          p="2.4rem"
          border="1px solid"
          rounded="xl"
          borderColor={car.id === selected?.id ? 'brand.500' : '#a4a3a3'}
          _hover={{
            borderColor: 'brand.500'
          }}
        >
          <Box textAlign="center">
            <Image src={car.img} w="29rem" h="15rem"/>
          </Box>
          <Box w="full" overflow="hidden">
            <Heading justifyContent="start" color="white" fontSize="2rem" isTruncated>({car.year}) {car.label}</Heading>
          </Box>
          <Box w="full">
            <Flex justifyContent="space-between" flexWrap="wrap" gap=".6rem">
              <VStack spacing=".6rem" alignItems="start">
                <Text display="grid" gridTemplateColumns="18px 1fr" alignItems="center" gap={6} color="gray.220"
                      fontSize="1.4rem">
                  <ReactAccountIcon/>
                  <Text as="span">{car.passengers} Passengers</Text>
                </Text>
                {car.airConditioner
                  ? <Text display="grid" gridTemplateColumns="18px 1fr" alignItems="center" gap={6} color="gray.220"
                          fontSize="1.4rem">
                    <ReactWinterIcon/>
                    <Text as="span">Air Conditioning</Text>
                  </Text>
                  : <Text/>
                }
              </VStack>
              <VStack spacing=".6rem" alignItems="start">
                <Text display="grid" gridTemplateColumns="18px 1fr" alignItems="center" gap={6} color="gray.220"
                      fontSize="1.4rem">
                  <ReactTransferBoxIcon/>
                  <Text as="span">{car.transferBoxType}</Text>
                </Text>
                <Text display="grid" gridTemplateColumns="18px 1fr" alignItems="center" gap={6} color="gray.220"
                      fontSize="1.4rem">
                  <ReactDoorIcon/>
                  <Text as="span">{car.doors} Doors</Text>
                </Text>
              </VStack>
            </Flex>
          </Box>
          <Divider/>
          <Box w="full">
            <Button
              isLoading={isLoadingId === car.id}
              mx="auto"
              variant="brand"
              px={16}
              mt="2.4rem"
              color="black"
              fontWeight={500}
              onClick={() => onSelectCar(car)}
            >Book a ride</Button>
          </Box>
        </VStack>
      </GridItem>
    ))}
  </Grid>)
})