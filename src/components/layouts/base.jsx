import { Outlet } from 'react-router-dom';
import { Box, Grid } from '@chakra-ui/react';
import { Header, Footer } from '@/components';

export const LayoutBase = () => {

  return (
    <Grid templateRows="auto 1fr auto" minH="full">
      <Header />
      <Box /> {/*mock element for instead of absolute header*/}
      <Box pt="8rem" overflow="hidden">
        <Outlet />
      </Box>
      <Footer />
    </Grid>
  );
};
