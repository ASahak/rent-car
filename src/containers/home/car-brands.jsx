import { memo } from 'react';
import { Box, Image, Flex, Grid, GridItem, Heading, Icon, Text } from '@chakra-ui/react';
import { RiCarLine, RiMapPin2Line, RiCalendarTodoLine } from 'react-icons/ri';
import Slider from 'react-slick';

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
const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 3000,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
      }
    },
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 3,
      }
    },
  ]
};
export const CarBrands = memo(() => {
  return (
    <Box className="slider-container" w="full" py="4rem" pointerEvents="none">
      <Slider {...settings}>
        {CAR_BRANDS.map(brand => (
          <Box w="full" h="7rem"  display="flex !important" alignItems="center" justifyContent="center" key={brand.src}>
            <Image h="full" filter="grayscale(1) invert(1)" src={brand.src} />
          </Box>
        ))}
      </Slider>
    </Box>
  )
})