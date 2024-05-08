import { memo } from 'react';
import PropTypes from 'prop-types';
import { Icon, Link, Text } from '@chakra-ui/react';
import { RiPhoneLine } from 'react-icons/ri';
import { MAIN_CONTACT_NUMBER } from '@/constants/global';

export const Phone = memo(({ textProps = {} }) => {
  return (
    <Link fontSize="1.4rem" color="white" href={`tel:${MAIN_CONTACT_NUMBER}`} alignItems="center" display="flex" gap={4}>
      <Icon as={RiPhoneLine} fontSize="2.4rem" />
      <Text as="span" {...textProps}>
        {MAIN_CONTACT_NUMBER}
      </Text>
    </Link>
  )
})
Phone.propTypes = {
  textProps: PropTypes.object,
}