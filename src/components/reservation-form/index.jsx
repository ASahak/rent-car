import {
  VStack,
  FormControl,
  FormLabel,
  Button,
  Text,
  Box, Flex, Input, Icon
} from '@chakra-ui/react';
import { RiTimeLine } from 'react-icons/ri';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';
import DatePicker from 'react-datepicker';
import { ReservationFormSchema } from '@/utils/validators';
import { Autocomplete, Select } from '@/components';
import { SERVICE_TYPES } from '@/constants/global';

export const ReservationForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ReservationFormSchema),
    defaultValues: {
      serviceType: '',
      pickUpTime: '',
      pickUpDate: '',
      pickUpLocation: '',
      pickDropLocation: '',
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
      <Box as="form" w="full" onSubmit={handleSubmit(onSubmit)}>
    <VStack spacing={8}>
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
            render={({ field }) => <Select
              options={SERVICE_TYPES}
              selected={field.value}
              onSelect={(v) => field.onChange(v)}
            />}
          />
          <ErrorMessage
            errors={errors}
            name="serviceType"
            render={({ message }) => <Text color="red.400" fontSize="1.2rem" mt={1}>{message}</Text>}
          />
        </FormControl>
        <Flex gap={8} w="full">
          <FormControl>
            <FormLabel
              fontSize="1.4rem"
              fontWeight="400"
              lineHeight="2.2rem"
              color="white"
            >
              Pick up Date
            </FormLabel>
            <Controller
              control={control}
              name="pickUpDate"
              render={({ field }) => <Box
                as={DatePicker}
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                w="full"
                showIcon
                toggleCalendarOnIconClick
                placeholderText="Choose Date"
                customInput={<Input w="full" variant="base"/>}
              />}
            />
            <ErrorMessage
              errors={errors}
              name="pickUpDate"
              render={({ message }) => <Text color="red.400" fontSize="1.2rem" mt={1}>{message}</Text>}
            />
          </FormControl>
          <FormControl>
            <FormLabel
              fontSize="1.4rem"
              fontWeight="400"
              lineHeight="2.2rem"
              color="white"
            >
              Pick Up Time
            </FormLabel>
            <Controller
              control={control}
              name="pickUpTime"
              render={({ field }) => <Box
                as={DatePicker}
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                w="full"
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={5}
                timeCaption="Time"
                dateFormat="h:mm aa"
                showIcon
                toggleCalendarOnIconClick
                icon={<Icon as={RiTimeLine} fontSize="1.6rem !important"/>}
                placeholderText="Choose Time"
                customInput={<Input variant="base"/>}
              />}
            />
            <ErrorMessage
              errors={errors}
              name="pickUpTime"
              render={({ message }) => <Text color="red.400" fontSize="1.2rem" mt={1}>{message}</Text>}
            />
          </FormControl>
        </Flex>
        <FormControl>
          <FormLabel
            fontSize="1.4rem"
            fontWeight="400"
            lineHeight="2.2rem"
            color="white"
          >
            Pick Up Location
          </FormLabel>
          <Controller
            control={control}
            name="pickUpLocation"
            render={({ field }) => <Autocomplete
              placeholder="Choose place"
              selected={field.value}
              onSelect={(v) => field.onChange(v)}
            />}
          />
          <ErrorMessage
            errors={errors}
            name="pickUpTime"
            render={({ message }) => <Text color="red.400" fontSize="1.2rem" mt={1}>{message}</Text>}
          />
        </FormControl>
        <Button
          type="submit"
          variant="brand"
          aria-label="Make a reservation"
          mt={6}
          w="full"
        >
          Send Message
        </Button>
    </VStack>
      </Box>
  )
}