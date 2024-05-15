import { memo } from 'react';
import { Box, Button, Container, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import ReactEasilyMark from '@/assets/icons/easly-mark.svg?react';

export const Hero = memo(() => {
  return (
    <Box overflow="hidden" w="full">
      <Container maxW='120rem' position='relative'>
        <Grid templateColumns={{ base: '1fr', sm: '1fr 1fr', md: '1fr 1.5fr' }} gap={16}>
          <GridItem pt="6rem" pb={{ base: '0rem', sm: '6rem' }}>
            <Heading w="fit-content" pb="3rem" mb={10} fontSize="6.4rem" color="white" fontWeight={600} lineHeight="6.4rem">
              Find, book and
              <br/>
              rent a car <Text as="span" position="relative">
              Easly
              <Box
                position="absolute"
                bottom="-1rem"
                right={0}
              >
                <ReactEasilyMark />
              </Box>
            </Text>
            </Heading>
            <Text fontSize="1.6rem" color="gray.220">Get a car wherever and whenever you need it</Text>
            <Button variant="brand" px={16} mt="2.4rem">Rent a car</Button>
          </GridItem>
          <GridItem py="2rem" alignItems="center" display="flex">
            <Image
              src="/car_hero_luxury.png"
              ml={{ '2xl': '0', base: 'calc((100vw - calc(min(calc(100vw - 1rem), 120rem)) / 1.2) / 2)' }}
            />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
})