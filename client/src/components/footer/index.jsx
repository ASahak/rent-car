import { memo } from 'react';
import {
  Text,
  Flex,
  Image,
  Container,
  List,
  ListItem,
  Link,
  Icon,
  Grid,
  GridItem,
  Box,
  Heading
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { RiMapPin2Line, RiMailLine, RiBankCardLine } from 'react-icons/ri';
import RoutePaths from '@/constants/route-paths';
import { Phone } from '@/components';
import {
  MAIN_CONTACT_ADDRESS,
  MAIN_CONTACT_EMAIL,
  NAV_LINKS,
  MAIN_CONTACT_NUMBERS, MAIN_CONTACT_DOT_CART
} from '@/constants/global';

export const Footer = memo(() => {

  return <Flex borderTop="2px solid" py={8} borderColor="brand.500" as="footer" alignItems="center">
    <Container maxW='120rem'>
      <Grid templateColumns={{ base: '1fr', sm: '1.5fr 2.5fr 2fr' }} gap={{ base: 6, sm: 12 }}>
        <GridItem gap={8} as={Flex} flexDir="column">
          <NavLink to={RoutePaths.HOME}>
            <Image h="5rem" src="/logo.png" alt="Logo"/>
          </NavLink>
          <Link
            href={MAIN_CONTACT_ADDRESS.href}
            color="white"
            fontSize="1.4rem"
            display="flex"
            alignItems="center"
            gap={2}
            target="_blank"
          >
            <Icon as={RiMapPin2Line} fontSize="1.8rem" />
            <Text as="span">
              DinaAnna LLC
              <br />
              {MAIN_CONTACT_ADDRESS.label}
            </Text>
          </Link>
        </GridItem>
        <GridItem gap={4} as={Flex} flexDir="column" justifyContent="space-between">
          <Box />
          <Flex gap={8} flexWrap="wrap">
            <Phone number={MAIN_CONTACT_NUMBERS[1]} />
            <Link href={`mailto:${MAIN_CONTACT_EMAIL}`} fontSize="1.4rem" alignItems="center" display="flex" gap={4} color="white">
              <Icon as={RiMailLine} fontSize="2.2rem" />
              {MAIN_CONTACT_EMAIL}
            </Link>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex flexWrap="wrap" gap="3rem" h="full">
            <List spacing={6} display="flex" flexDir="column" justifyContent="end">
              {NAV_LINKS.map(link => <ListItem key={link.path} color="white" fontSize="1.4rem" fontWeight="600">
                <NavLink to={link.path}>
                  {link.label}
                </NavLink>
              </ListItem>)}
            </List>
            <Flex flexDir="column" justifyContent="space-between">
              <Box />
              <Box as={Flex} flexDir="column" gap={6}>
                <Heading fontSize="1.6rem" color="white" mb={0}>Follow Us</Heading>
                <Link href={MAIN_CONTACT_DOT_CART} target="_blank" display="flex" fontSize="2rem" color="white">
                  <Icon as={RiBankCardLine} />
                </Link>
              </Box>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  </Flex>
})