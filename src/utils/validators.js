import * as Yup from 'yup';

export const ReservationFormSchema = Yup.object({
  serviceType: Yup.string().required('Service Type is required!'),
  pickUpDate: Yup.string().required('Pick Up Date is required!'),
  pickUpTime: Yup.string().required('Pick Up Time is required!'),
});
