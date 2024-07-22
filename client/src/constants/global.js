import RoutePaths from './route-paths';
import { RiPhoneFill, RiEarthFill } from 'react-icons/ri';

export const MAIN_CONTACT_NUMBERS = [
  '+18186675666',
  '+17026066662'
]
export const MAIN_CONTACT_EMAIL = 'contact@signaturetransservices.com'
export const MAIN_CONTACT_DOT_CART = 'https://dot.cards/user/uphorgtiipxuwponf3ll72iml/c/bl'
export const MAIN_CONTACT_ADDRESS = {
  href: 'https://maps.app.goo.gl/mrWspNNneWWRTis86',
  label: `150 S Glenoaks BLVD, unit 9124\n Burbank, CA 91502`
}

export const NAV_LINKS = [
  { label: 'Home', path: RoutePaths.HOME },
  { label: 'Reservation', path: RoutePaths.RESERVATION },
]

export const SERVICE_TYPES = [
  { label: 'To Airport', value: 'to-airport' },
  { label: 'From Airport', value: 'from-airport' },
  { label: 'Hourly as Directed', value: 'hourly-as-directed' },
  { label: 'Point To Point', value: 'point-to-point' },
  { label: 'City tour', value: 'city-tour' },
]

export const CARS = [
  {
    id: 1,
    label: 'BMW 7 Series',
    year: 2022,
    doors: 4,
    passengers: 4,
    transferBoxType: 'Auto',
    airConditioner: true,
    img: '/cars/bmw_7_2022.png',
  }, {
    id: 2,
    label: 'BMW 5 series',
    year: 2024,
    doors: 4,
    passengers: 4,
    transferBoxType: 'Auto',
    airConditioner: true,
    img: '/cars/bmw_5_2024.png',
  }, {
    id: 3,
    label: 'Chevrolet Suburban',
    year: 2024,
    doors: 4,
    passengers: 6,
    transferBoxType: 'Auto',
    airConditioner: true,
    img: '/cars/chevrolet_2024.png',
  }, {
    id: 4,
    label: 'Chevrolet Suburban',
    year: 2020,
    doors: 4,
    passengers: 6,
    transferBoxType: 'Auto',
    airConditioner: true,
    img: '/cars/chevrolet_2020.png',
  }, {
    id: 5,
    label: 'Cadillac Escalade ESV platinum package',
    year: 2020,
    doors: 4,
    passengers: 6,
    transferBoxType: 'Auto',
    airConditioner: true,
    img: '/cars/cadillac_2020.png',
  }
]
export const MAX_PASSENGERS = Math.max(...CARS.map(c => c.passengers));

export const PAYMENTS = [
  { value: 'https://venmo.com/u/STS-1', label: 'Venmo', icon: RiEarthFill, type: 'link' },
  { value: '+1(702)606-6662', label: 'Zelle', icon: RiPhoneFill, type: 'phone' },
  { value: '+1(702)606-6662', label: 'Cash App', icon: RiPhoneFill, type: 'phone' },
]