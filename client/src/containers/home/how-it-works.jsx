import { memo } from 'react';
import { Box, Container, Flex, Grid, GridItem, Heading, Icon, Text } from '@chakra-ui/react';
import ReactBgMarkIcon from '@/assets/icons/bg-mark.svg?react';
import ReactCarIcon from '@/assets/icons/car.svg?react';
import ReactCalendarIcon from '@/assets/icons/calendar.svg?react';
import ReactLocationIcon from '@/assets/icons/location.svg?react';

export const HowItWorks = memo(() => {
  return (
    <Container my="4rem" maxW='120rem' position='relative'>
      <Heading mb={10} textAlign="center" color="white" fontSize="3.2rem" fontWeight={600} lineHeight="3.5rem" fontFamily="Syne">
        Book a ride with couple of steps
        <br/>
        <Text color="gray.220">How it works?</Text>
      </Heading>
      <Grid templateColumns={{ base: '1fr', sm: '1fr 1fr 1fr' }} w="fit-content" mx="auto" gap={{ base: '2rem', sm: '8rem' }}>
        <GridItem color="white">
          <Flex alignItems="center" flexDir="column">
            <Box display="flex" alignItems="center" justifyContent="center">
              <ReactBgMarkIcon />
              <Icon as={ReactLocationIcon} position="absolute" fontSize="3.2rem"/>
            </Box>
            <Text mt={6} textAlign="center" color="gray.220" fontSize="1.6rem">
              Choose your pick up and
              <br/>
              drop off locations
            </Text>
          </Flex>
        </GridItem>
        <GridItem color="white">
          <Flex alignItems="center" flexDir="column">
            <Box display="flex" alignItems="center" justifyContent="center">
              <ReactBgMarkIcon />
              <Icon as={ReactCalendarIcon} position="absolute" fontSize="3.2rem"/>
            </Box>
            <Text mt={6} textAlign="center" color="gray.220" fontSize="1.6rem">
              Choose the
              <br/>
              date
            </Text>
          </Flex>
        </GridItem>
        <GridItem color="white">
          <Flex alignItems="center" flexDir="column">
            <Box display="flex" alignItems="center" justifyContent="center">
              <ReactBgMarkIcon />
              <Icon as={ReactCarIcon} position="absolute" fontSize="3.2rem"/>
            </Box>
            <Text mt={6} textAlign="center" color="gray.220" fontSize="1.6rem">
              Choose the
              <br/>
              car
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  )
})