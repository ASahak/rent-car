import * as Yup from 'yup';

export const ReservationFormSchema = Yup.object({
  serviceType: Yup.string().required('Service Type is required!'),
});
