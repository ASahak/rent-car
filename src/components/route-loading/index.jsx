import { Box, Spinner } from '@chakra-ui/react';

export const RouteLoading = () => {
  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      w="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
      h="full"
      bgColor="transparent"
    >
      <Spinner color="white" size="xl"/>
    </Box>
  )
}