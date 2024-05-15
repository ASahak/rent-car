import { memo } from 'react';
import PropTypes from 'prop-types';
import { Icon, Link, Text } from '@chakra-ui/react';
import { RiPhoneLine } from 'react-icons/ri';

export const Phone = memo(({ textProps = {}, number }) => {
  return (
    <Link fontSize="1.4rem" color="white" href={`tel:${number}`} alignItems="center" display="flex" gap={4}>
      <Icon as={RiPhoneLine} fontSize="2.4rem" />
      <Text as="span" {...textProps}>
        {number}
      </Text>
    </Link>
  )
})
Phone.propTypes = {
  textProps: PropTypes.object,
  number: PropTypes.string.isRequired,
}