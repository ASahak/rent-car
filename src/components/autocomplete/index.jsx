import { memo, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useDebounce } from 'react-use';
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Icon,
  Input,
  useDisclosure,
  Spinner
} from '@chakra-ui/react';
import { useFetchPlaces } from '@/hooks/useFetchPlaces';

export const Autocomplete = memo(({ selected, onSelect, placeholder = 'Search' }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
    const [localSearch, setLocalSearch] = useState(selected);
  const { data, isLoading, findPlaces, reset } = useFetchPlaces();
  const inputRef = useRef();
  const disableAutoComplete = useRef(false);

  useDebounce(
    async () => {
      if (!disableAutoComplete.current) {
        await findPlaces(localSearch);
        focusInput();
      }
    },
    300,
    [localSearch]
  );

  const onLocalSearchChange = (e) => {
    disableAutoComplete.current = false;
    setLocalSearch(e.target.value);
  }

  const onPick = (opt) => {
    disableAutoComplete.current = true;
    setLocalSearch(opt.label);
    onSelect(opt.label);
    reset({ list: [{ ...opt }] })
  }

  const focusInput = () => {
    setTimeout(() => {
      if (inputRef.current && isOpen) {
        inputRef.current.focus()
        inputRef.current.selectionStart = inputRef.current.value.length
        inputRef.current.selectionEnd = inputRef.current.value.length;
      }
    }, 0)
  }

  useEffect(() => {
    focusInput();
  }, [isOpen]);

  return (<Menu variant="base" matchWidth isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
    <MenuButton
      as={Button}
      variant="autocomplete"
      className="button-as-select"
      rightIcon={isLoading ? <Spinner /> : null}
      w="full"
      gap={2}
    >
      <Input
        ref={inputRef}
        fontSize="inherit"
        variant="unstyled"
        placeholder={placeholder}
        value={localSearch}
        _placeholder={{ color: 'gray.200' }}
        onChange={onLocalSearchChange}
      />
    </MenuButton>
    <MenuList>
      {data.length
        ? data.map(opt => (
          <MenuItem
            as={Button}
            isTruncated
            variant="dropdown-item"
            key={opt.value}
            onClick={() => onPick(opt)}
            bgColor="transparent"
            {...selected === opt.value && {
              bgColor: 'brand.500 !important',
              color: 'white !important'
            }}
          >
            {opt.label}
          </MenuItem>
        ))
        : <Text fontSize="1.4rem" textAlign="center">No Result</Text>
      }
    </MenuList>
  </Menu>)
})
Autocomplete.propTypes = {
  placeholder: PropTypes.string,
  selected: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}