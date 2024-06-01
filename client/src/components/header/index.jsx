import { memo, useEffect } from 'react';
import { Flex, Image, Container, List, ListItem, Icon, useDisclosure, Button } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';
import RoutePaths from '@/constants/route-paths';
import { MAIN_CONTACT_NUMBERS, NAV_LINKS } from '@/constants/global';
import { useMakeFixedBody } from '@/hooks';
import { Phone } from '@/components';

export const Header = memo(() => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  useMakeFixedBody(isOpen);
  const { pathname } = useLocation();

  useEffect(() => {
    onClose()
  }, [pathname]);

  return <Flex bgColor="#000000de" backdropFilter="blur(6px)" as="header" h="8rem" alignItems="center" position="fixed" top={0} w="full" zIndex={99}>
    <Container maxW='120rem'>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex gap="10vw">
          <NavLink to={RoutePaths.HOME}>
            <Image h="6rem" src="/logo.png" alt="Logo"/>
          </NavLink>
          <List display={{ sm: 'flex', base: 'none' }} alignItems="center" gap="6rem">
            {NAV_LINKS.map(link => <ListItem
              key={link.path}
              color="white"
              fontSize="1.4rem"
              fontWeight="600"
            >
              <NavLink
                to={link.path}
                style={({ isActive }) => ({ color: isActive ? 'var(--chakra-colors-brand-500)' : 'white'})}>
                {link.label}
              </NavLink>
            </ListItem>)}
          </List>
        </Flex>
        <Flex gap={8}>
          <Phone number={MAIN_CONTACT_NUMBERS[0]} textProps={{ display: { sm: 'block', base: 'none' } }} />
          {/*Mobile Nav toggle*/}
          <Button
            h="4rem"
            w="4rem"
            variant="unstyled"
            color="white"
            display={{ sm: 'none', base: 'flex' }}
            onClick={onToggle}
          >
            <Icon as={isOpen ? RiCloseFill : RiMenu3Fill} fontSize={isOpen ? '3.2rem' : '2.4rem'} />
          </Button>
          {/*____*/}
        </Flex>
      </Flex>
    </Container>
    {/*Mobile Nav*/}
    <Flex
      flexDir="column"
      position="absolute"
      top="8rem"
      bgColor="black"
      zIndex={99}
      w="full"
      h="calc(100dvh - 8rem)"
      p={4}
      pb={8}
      transition=".3s"
      transform={`translateY(${isOpen ? '0' : '-1rem'})`}
      opacity={isOpen ? 1 : 0}
      visibility={isOpen ? 'visible' : 'hidden'}
      justifyContent="space-between"
    >
      <List display={{ sm: 'none', base: 'flex' }} flexDir="column" gap="4rem">
        {NAV_LINKS.map(link => <ListItem key={link.path} color="white" fontSize="1.6rem" fontWeight="600">
          <NavLink
            to={link.path}
            style={({ isActive }) => ({ color: isActive ? 'var(--chakra-colors-brand-500)' : 'white'})}>
            {link.label}
          </NavLink>
        </ListItem>)}
      </List>
      <Phone number={MAIN_CONTACT_NUMBERS[0]} />
    </Flex>
    {/*_____*/}
  </Flex>
})