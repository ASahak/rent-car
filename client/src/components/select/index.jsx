import { memo, useRef } from 'react';
import PropTypes from 'prop-types';
import { RiArrowDownSLine } from 'react-icons/ri';
import { Button, Menu, MenuButton, MenuItem, MenuList, Text, Icon, useBreakpointValue } from '@chakra-ui/react';
import { useVirtualizer } from '@tanstack/react-virtual';

const VirtualList = ({ options, onSelect, selected, customOption, listProps }) => {
  const parentRef = useRef(null)
  const height = useBreakpointValue({ base: 3.4 * 8, lg: 3.4 * 10 }, { ssr: false }); // 3.4 is the base button variant height

  const rowVirtualizer = useVirtualizer({
    count: options.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => height,
    overscan: 5,
  })

  return (
    <MenuList
      maxH="200px"
      overflowX="hidden"
      ref={parentRef}
      {...listProps}
      style={{
        height: `${rowVirtualizer.getTotalSize()}px`,
        width: '100%',
        position: 'relative',
      }}
    >
      {rowVirtualizer.getVirtualItems().map((virtualRow) => (
        <MenuItem
          key={virtualRow.index}
          as={Button}
          variant="dropdown-item"
          onClick={() => onSelect(options[virtualRow.index].value)}
          bgColor="transparent"
          {...selected === options[virtualRow.index].value && {
            bgColor: 'brand.500 !important',
            color: 'white !important'
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: `${virtualRow.size}px`,
            transform: `translateY(${virtualRow.start}px)`,
          }}
        >
          {customOption ? customOption(options[virtualRow.index]) : options[virtualRow.index].label}
        </MenuItem>
      ))}
    </MenuList>
  )
}
export const Select = memo(({
                              customValue,
                              customOption,
                              options,
                              selected,
                              onSelect,
                              withVirtual,
                              matchWidth = true,
                              listProps = {},
                              buttonProps = {}
                            }) => {
  const renderValue = () => (!selected
      ? <Text fontSize="1.4rem" variant="placeholder" color="gray.200">Select option</Text>
      : customValue
        ? customValue(options.find(opt => opt.value === selected))
        : <Text fontSize="1.4rem" fontWeight="500"
                color="white">{options.find(opt => opt.value === selected)?.label}</Text>
  )

  return (
    <Menu variant="base" matchWidth={matchWidth}>
      <MenuButton
        as={Button}
        rightIcon={<Icon as={RiArrowDownSLine} fontSize="1.6rem" display="flex"/>}
        variant="select"
        className="button-as-select"
        w="full"
        gap={2}
        {...buttonProps}
      >
        {renderValue()}
      </MenuButton>
      {withVirtual
        ? <VirtualList
          options={options}
          onSelect={onSelect}
          selected={selected}
          customOption={customOption}
          listProps={listProps}
        />
        : <MenuList maxH="200px" overflowX="hidden" {...listProps}>
          {options.map((opt) => (
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
              {customOption ? customOption(opt) : opt.label}
            </MenuItem>
          ))}
        </MenuList>
      }
    </Menu>)
})
Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired),
  selected: PropTypes.string.isRequired,
  withVirtual: PropTypes.bool,
  matchWidth: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  buttonProps: PropTypes.object,
  listProps: PropTypes.object,
  customValue: PropTypes.func,
  customOption: PropTypes.func,
}