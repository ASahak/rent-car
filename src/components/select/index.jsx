import { memo } from 'react';
import PropTypes from 'prop-types';
import { RiArrowDownSLine } from 'react-icons/ri';
import { Button, Menu, MenuButton, MenuItem, MenuList, Text, Icon } from '@chakra-ui/react';

export const Select = memo(({ options, selected, onSelect }) => {
  const renderValue = () => (!selected
      ? <Text fontSize="1.4rem" variant="placeholder" color="gray.200" >Select option</Text>
      : <Text fontSize="1.4rem" fontWeight="500" color="white">{options.find(opt => opt.value === selected)?.label}</Text>
  )

  return (<Menu variant="base" matchWidth>
    <MenuButton
      as={Button}
      rightIcon={<Icon as={RiArrowDownSLine} fontSize="1.6rem" display="flex" />}
      variant="select"
      className="button-as-select"
      w="full"
      gap={2}
    >
      {renderValue()}
    </MenuButton>
    <MenuList>
      {options.map(opt => (
        <MenuItem
          as={Button}
          variant="dropdown-item"
          key={opt.value}
          onClick={() => onSelect(opt.value)}
          bgColor="transparent"
          {...selected === opt.value && {
            bgColor: 'brand.500 !important',
            color: 'white !important'
          }}
        >
          {opt.label}
        </MenuItem>
      ))}
    </MenuList>
  </Menu>)
})
Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired),
  selected: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}