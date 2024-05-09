import { memo } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { InfiniteLooper } from '@/components'

const CAR_BRANDS = [
  { src: '/car-brands/brand1.webp' },
  { src: '/car-brands/brand2.webp' },
  { src: '/car-brands/brand3.webp' },
  { src: '/car-brands/brand4.webp' },
  { src: '/car-brands/brand5.webp' },
  { src: '/car-brands/brand6.webp' },
  { src: '/car-brands/brand7.webp' },
  { src: '/car-brands/brand8.webp' },
  { src: '/car-brands/brand9.webp' },
  { src: '/car-brands/brand10.webp' },
]
export const CarBrands = memo(() => {
  return (
    <Box className="slider-container" w="full" py="4rem" pointerEvents="none">
      <InfiniteLooper direction="right" speed="15">
        <Box className="contentBlock" h="12rem" gap="10rem">
          {CAR_BRANDS.map(brand => (
            <Box w="full" h="7rem"  display="flex !important" alignItems="center" justifyContent="center" key={brand.src}>
              <Image h="full" filter="grayscale(1) invert(1)" src={brand.src} />
            </Box>
          ))}
        </Box>
      </InfiniteLooper>
    </Box>
  )
})