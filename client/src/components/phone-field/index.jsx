import { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Flex, Input, Image, Text } from '@chakra-ui/react';
import InputMask from 'react-input-mask';
import { Select } from '@/components';
import { findMask, getCountries } from '@/utils/helpers';

export const PhoneField = memo(({ state, onChange }) => {
  const mask = useMemo(() => findMask(state.country), [state]);

  const COUNTRIES = useMemo(() => getCountries(), []);

  return (
    <Flex>
      <Select
        withVirtual
        options={COUNTRIES}
        selected={state.country}
        matchWidth={false}
        listProps={{ width: '25rem !important' }}
        onSelect={(v) => onChange({ country: v, mask: findMask(v) })}
        customValue={(option) => <Image src={option.flag} />}
        customOption={(option) => <Text as="span" display="flex" alignItems="center" gap={4}>
          <Image w="2rem" src={option.flag} />
          <Text as="span" isTruncated>
            {option.label}
          </Text>
          <Text as="span" color="gray.220" fontSize="1.3rem">({option.code})</Text>
        </Text>}
        buttonProps={{
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          w: '10rem'
        }}
      />
      <Input
        fontSize="1.4rem"
        as={InputMask}
        borderTopLeftRadius={0}
        borderBottomLeftRadius={0}
        variant="base"
        onChange={(e) => onChange({ number: e.target.value, mask })}
        value={state.number}
        mask={mask}
        placeholder={mask}
      />
    </Flex>
  )
})
PhoneField.propTypes = {
  onChange: PropTypes.func.isRequired,
  state: PropTypes.shape({
    number: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired
}