import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  LazyMotion,
  domAnimation,
  m
} from 'framer-motion';
import { Box } from '@chakra-ui/react';

const variants = {
  initial: { opacity: 0, x: 0, y: -5 },
  in: { opacity: 1, x: 0, y: 0 },
};
const pageTransition = {
  ease: 'linear', duration: .2
};

const RouterTransition = ({ children, routerName, scrollContent }) => {
  const animationCompleted = () => {
    if (scrollContent?.current) {
      scrollContent.current.scrollTo({ top: 0 });
    } else {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    animationCompleted();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routerName, scrollContent?.current]);

  return (
    <LazyMotion features={domAnimation}>
      <m.main
        key={routerName}
        initial="initial"
        animate="in"
        variants={variants}
        transition={pageTransition}
        style={{ height: 'fit-content', minHeight: '100%', display: 'flex' }}
      >
        <Box flex={1} w="full">
          {children}
        </Box>
      </m.main>
    </LazyMotion>
  )
};
RouterTransition.propTypes = {
  routerName: PropTypes.string.isRequired,
  children: PropTypes.node,
  scrollContent: PropTypes.object,
}
export default RouterTransition;