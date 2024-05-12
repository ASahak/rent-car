import { memo, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, GridItem, VStack, Image, Heading, Flex, Text, Divider, Button } from '@chakra-ui/react';
import { CARS } from '@/constants/global';
import ReactAccountIcon from '@/assets/icons/account.svg?react';
import ReactWinterIcon from '@/assets/icons/winter.svg?react';
import ReactTransferBoxIcon from '@/assets/icons/transferBox.svg?react';
import ReactDoorIcon from '@/assets/icons/door.svg?react';
import { formatNumber } from '@/utils/helpers';
import { ReservationContext } from '@/contexts/reservation';
import RoutePaths from '@/constants/route-paths';

export const Cars = memo(() => {
  const { steps, setSteps } = useContext(ReservationContext);
  const navigate = useNavigate();
  const selected = steps.two;

  const onSelectCar = (car) => {
    setSteps({
      ...steps,
      two: car,
      three: null,
    });
    navigate(`${RoutePaths.RESERVATION}?step=3`);
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
            borderColor: "brand.500"
          }}
        >
          <Box textAlign="center">
            <Image src={car.img} w="29rem" h="15rem" />
          </Box>
          <Box w="full" overflow="hidden">
            <Heading justifyContent="start" color="white" fontSize="2rem" isTruncated>({car.year}) {car.label}</Heading>
          </Box>
          <Box w="full">
            <Flex justifyContent="space-between" flexWrap="wrap" gap=".6rem">
              <VStack spacing=".6rem" alignItems="start">
                <Text display="grid" gridTemplateColumns="18px 1fr" alignItems="center" gap={6} color="gray.220" fontSize="1.4rem">
                  <ReactAccountIcon />
                  <Text as="span">{car.passengers} Passengers</Text>
                </Text>
                {car.airConditioner
                  ? <Text display="grid" gridTemplateColumns="18px 1fr" alignItems="center" gap={6} color="gray.220" fontSize="1.4rem">
                    <ReactWinterIcon />
                    <Text as="span">Air Conditioning</Text>
                  </Text>
                  : <Text />
                }
              </VStack>
              <VStack spacing=".6rem" alignItems="start">
                <Text display="grid" gridTemplateColumns="18px 1fr" alignItems="center" gap={6} color="gray.220" fontSize="1.4rem">
                  <ReactTransferBoxIcon />
                  <Text as="span">{car.transferBoxType}</Text>
                </Text>
                <Text display="grid" gridTemplateColumns="18px 1fr" alignItems="center" gap={6} color="gray.220" fontSize="1.4rem">
                  <ReactDoorIcon />
                  <Text as="span">{car.doors} Doors</Text>
                </Text>
              </VStack>
            </Flex>
          </Box>
          <Divider />
          <Box w="full">
            <Flex justifyContent="space-between">
              <Text color="gray.220" fontSize="1.5rem">Price</Text>
              <Text color="gray.220" fontSize="1.4rem">
                <Text as="span" color="white" fontSize="1.6rem">${formatNumber(car.price)}</Text>
                /per day
              </Text>
            </Flex>
            <Button mx="auto" variant="brand" px={16} mt="2.4rem" color="black" fontWeight={500} onClick={() => onSelectCar(car)}>Rent car</Button>
          </Box>
        </VStack>
      </GridItem>
    ))}
  </Grid>)
})