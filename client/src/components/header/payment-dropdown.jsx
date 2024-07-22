import { memo } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { PAYMENTS } from '@/constants/global';

export const PaymentDropdown = memo(({ isMobile }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onPay = (p) => {
    if(p.type === 'link') {
      window.open(p.value, '_blank');
    } else {
      window.open(`tel:${p.value}`);
    }
  }

  return (
    <Menu isOpen={isOpen} onOpen={onOpen} onClose={onClose} variant="base" matchWidth>
      <MenuButton
        w="full"
        textAlign="left"
        as={Button}
        fontSize="inherit"
        variant="unstyled"
        display="flex"
        rightIcon={<Icon fontSize={isMobile ? '2.2rem' : '1.8rem'} as={isOpen ? RiArrowUpSLine : RiArrowDownSLine} />}
        alignItems="center"
      >
        Payments
      </MenuButton>
      <MenuList>
        {PAYMENTS.map(p => (
          <MenuItem
            key={p.value}
            as={Button}
            variant="dropdown-item"
            bgColor="transparent"
            gap={3}
            display="flex !important"
            justifyContent="flex-start"
            onClick={() => onPay(p)}
            alignItems="center"
            leftIcon={p.icon ? <Icon as={p.icon} /> : null}
          >
            {p.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
})
PaymentDropdown.propTypes = {
  isMobile: PropTypes.bool
}