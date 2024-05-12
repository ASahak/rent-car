import RoutePaths from './route-paths';

export const MAIN_CONTACT_NUMBERS = [
  '+18186675666',
  '+17026066662'
]
export const MAIN_CONTACT_EMAIL = 'rentcar@gmail.com'
export const MAIN_CONTACT_DOT_CART = 'https://dot.cards/user/uphorgtiipxuwponf3ll72iml/c/bl'
export const MAIN_CONTACT_ADDRESS = {
  href: 'https://maps.app.goo.gl/mrWspNNneWWRTis86',
  label: `150 S Glenoaks BLVD, unit 9124\n Burbank, CA 91502`
}

export const NAV_LINKS = [
  { label: 'Home', path: RoutePaths.HOME },
  { label: 'Reservation', path: RoutePaths.RESERVATION },
  { label: 'Contacts', path: RoutePaths.CONTACT },
]

export const SERVICE_TYPES = [
  { label: 'To Airport', value: 'to-airport' },
  { label: 'From Airport', value: 'from-airport' },
  { label: 'Hourly as Directed', value: 'hourly-as-directed' },
  { label: 'Point To Point', value: 'point-to-point' },
  { label: 'City tour', value: 'city-tour' },
]
export const MAX_PASSENGERS = 10;

export const CARS = [
  {
    id: 1,
    label: 'BMW 7 Series',
    year: 2022,
    doors: 4,
    passengers: 4,
    transferBoxType: 'Auto',
    airConditioner: true,
    price: 1600,
    img: '/cars/bmw_7_2022.png',
  }, {
    id: 2,
    label: 'BMW 5 series',
    year: 2024,
    doors: 4,
    passengers: 4,
    transferBoxType: 'Auto',
    airConditioner: true,
    price: 1600,
    img: '/cars/bmw_5_2024.png',
  }, {
    id: 3,
    label: 'Chevrolet Suburban',
    year: 2024,
    doors: 4,
    passengers: 4,
    transferBoxType: 'Auto',
    airConditioner: true,
    price: 1600,
    img: '/cars/chevrolet_2024.png',
  }, {
    id: 4,
    label: 'Chevrolet Suburban',
    year: 2020,
    doors: 4,
    passengers: 4,
    transferBoxType: 'Auto',
    airConditioner: true,
    price: 1600,
    img: '/cars/chevrolet_2020.png',
  }, {
    id: 5,
    label: 'Cadillac Escalade ESV platinum package',
    year: 2020,
    doors: 4,
    passengers: 4,
    transferBoxType: 'Auto',
    airConditioner: true,
    price: 1600,
    img: '/cars/cadillac_2020.png',
  }
]