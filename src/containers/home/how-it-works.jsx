import { memo } from 'react';
import { Box, Container, Flex, Grid, GridItem, Heading, Icon, Text } from '@chakra-ui/react';
import { RiCarLine, RiMapPin2Line, RiCalendarTodoLine } from 'react-icons/ri';

export const HowItWorks = memo(() => {
  return (
    <Container my="4rem" maxW='120rem' position='relative'>
      <Heading mb={10} textAlign="center" color="white" fontWeight={600} lineHeight="3.5rem">
        Rent with following 3 working steps
        <br/>
        How it works?
      </Heading>
      <Grid templateColumns={{ base: '1fr 1fr 1fr'}} w="fit-content" mx="auto" gap={{ base: '2rem', sm: '8rem' }}>
        <GridItem color="white">
          <Flex alignItems="center" flexDir="column">
            <Box bgColor="brand.500" rounded="full" h="6rem" w="6rem" display="flex" alignItems="center" justifyContent="center">
              <Icon as={RiMapPin2Line} fontSize="2rem"/>
            </Box>
            <Text mt={6} textAlign="center" fontSize="1.4rem">
              Choose your and find
              <br/>
              your best car
            </Text>
          </Flex>
        </GridItem>
        <GridItem color="white">
          <Flex alignItems="center" flexDir="column">
            <Box bgColor="brand.500" rounded="full" h="6rem" w="6rem" display="flex" alignItems="center" justifyContent="center">
              <Icon as={RiCalendarTodoLine} fontSize="2rem"/>
            </Box>
            <Text mt={6} textAlign="center" fontSize="1.4rem">
              Choose your and find
              <br/>
              your best car
            </Text>
          </Flex>
        </GridItem>
        <GridItem color="white">
          <Flex alignItems="center" flexDir="column">
            <Box bgColor="brand.500" rounded="full" h="6rem" w="6rem" display="flex" alignItems="center" justifyContent="center">
              <Icon as={RiCarLine} fontSize="2rem"/>
            </Box>
            <Text mt={6} textAlign="center" fontSize="1.4rem">
              Choose your and find
              <br/>
              your best car
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  )
})