import RoutePaths from './route-paths';
import { RiEarthFill } from 'react-icons/ri';
import Zelle from '@/assets/images/zelle.jpg'

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
    label: 'Sedan',
    doors: 4,
    passengers: 4,
    transferBoxType: 'Auto',
    airConditioner: true,
    img: '/cars/bmw_7_2022.png',
  }, {
    id: 2,
    label: 'SUV',
    doors: 4,
    passengers: 6,
    transferBoxType: 'Auto',
    airConditioner: true,
    img: '/cars/chevrolet_2025.png',
  }
]
export const MAX_PASSENGERS = Math.max(...CARS.map(c => c.passengers));

export const PAYMENTS = [
  { value: 'https://www.venmo.com/u/signaturetrans', label: 'Venmo', icon: RiEarthFill, type: 'link' },
  { value: Zelle, label: 'Zelle', icon: RiEarthFill, type: 'link' },
  { value: 'https://cash.app/$Gareginsedrakyan', label: 'Cash App', icon: RiEarthFill, type: 'link' },
]