import * as Yup from 'yup';
import { MAX_PASSENGERS } from '@/constants/global';

export const ReservationFormSchema = Yup.object({
  serviceType: Yup.string().required('Service Type is required!'),
  pickUpDate: Yup.string().required('Pick Up Date is required!'),
  pickUpTime: Yup.string().required('Pick Up Time is required!'),
  pickUpLocation: Yup.string().required('Pick Up Location is required!'),
  dropOffLocation: Yup.string().required('Drop off Location is required!'),
  passengers: Yup.string()
    .test('is-required', 'Passengers count is required!', function (value) {
      const { path, createError } = this;
      if (value === undefined || value === null || value === '') {
        return createError({ path, message: 'Passengers count is required!' });
      }
      if (Number(value) <= 0) {
        return createError({ path, message: 'Passengers cannot must be greater than zero!' });
      }
      if (Number(value) > MAX_PASSENGERS) {
        return createError({ path, message: `Passengers cannot must be greater than ${MAX_PASSENGERS}!` });
      }
      if (isNaN(Number(value))) {
        return createError({ path, message: 'Invalid input' });
      }
      return true;
    })
});
