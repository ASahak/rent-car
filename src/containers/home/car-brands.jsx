import { memo } from 'react';
import { Box, Image } from '@chakra-ui/react';

const CAR_BRANDS = [
  { src: '/car-brands/brand1.webp' },
  { src: '/car-brands/brand2.webp' },
  { src: '/car-brands/brand3.webp' },
]
export const CarBrands = memo(() => {
  return (
    <Box className="slider-container" w="full" py="4rem" pointerEvents="none">
        <Box className="contentBlock" h="12rem" gap="10rem">
          {CAR_BRANDS.map(brand => (
            <Box w="full" h="7rem"  display="flex !important" alignItems="center" justifyContent="center" key={brand.src}>
              <Image h="full" filter="grayscale(1) invert(1)" src={brand.src} />
            </Box>
          ))}
        </Box>
    </Box>
  )
})