import { VStack, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';
import { ReservationFormSchema } from '@/utils/validators';

export const ReservationForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ReservationFormSchema),
    defaultValues: {
      serviceType: '',
    }
  });

  return (
    <VStack>
      <FormControl>
        <FormLabel
          fontSize="1.4rem"
          fontWeight="400"
          lineHeight="2.2rem"
          color="white"
        >
          Select Service Type
        </FormLabel>
        <Controller
          control={control}
          name="serviceType"
          render={({ field }) => <Input
            placeholder="Ex. John Doe"
            errorBorderColor="red.400"
            isInvalid={!!errors.serviceType}
            height="3.8rem"
            variant="base"
            {...field}
          />}
        />
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => <Text color="red.400" fontSize="1.2rem" mt={1}>{message}</Text>}
        />
      </FormControl>
    </VStack>
  )
}