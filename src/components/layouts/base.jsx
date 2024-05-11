import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box, Grid } from '@chakra-ui/react';
import { Header, Footer, RouteLoading, RouterTransition } from '@/components';
import { LAYOUTS } from '@/constants/layouts';

export const LayoutBase = () => {
  const { pathname } = useLocation();

  return (
    <Grid templateRows="auto 1fr auto" minH="full">
      <Header />
      <Box /> {/*mock element for instead of absolute header*/}
      <Box pt="8rem" overflow="hidden">
        <Suspense fallback={<RouteLoading />} layout={LAYOUTS.BASE.key}>
          <RouterTransition routerName={pathname}>
            <Outlet />
          </RouterTransition>
        </Suspense>
      </Box>
      <Footer />
    </Grid>
  );
};
