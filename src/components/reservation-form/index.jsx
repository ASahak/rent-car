import { useContext } from 'react';
import {
  VStack,
  FormControl,
  FormLabel,
  Button,
  Text,
  Box,
  Flex,
  Input,
  NumberInput,
  NumberInputField,
  Icon
} from '@chakra-ui/react';
import { RiTimeLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';
import DatePicker from 'react-datepicker';
import { ReservationFormSchema } from '@/utils/validators';
import { Autocomplete, Select } from '@/components';
import { MAX_PASSENGERS, SERVICE_TYPES } from '@/constants/global';
import { ReservationContext } from '@/contexts/reservation';
import RoutePaths from '@/constants/route-paths';

export const ReservationForm = () => {
  const { data, setData } = useContext(ReservationContext);
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ReservationFormSchema),
    defaultValues: {
      serviceType: data.details?.serviceType || '',
      pickUpTime: data.details?.pickUpTime ? new Date(data.details.pickUpTime) : '',
      pickUpDate: data.details?.pickUpDate ? new Date(data.details.pickUpDate) : '',
      pickUpLocation: data.details?.pickUpLocation || '',
      dropOffLocation: data.details?.dropOffLocation || '',
      passengers: data.details?.passengers || '',
    }
  });

  const onSubmit = (data) => {
    setData({
      details: data,
      car: null,
    });
    navigate(`${RoutePaths.RESERVATION}?step=2`);
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
                fontSize="1.4rem"
                autoComplete="off"
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
                autoComplete="off"
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                w="full"
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={5}
                timeCaption="Time"
                fontSize="1.4rem"
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
            name="pickUpLocation"
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
            Drop off Location
          </FormLabel>
          <Controller
            control={control}
            name="dropOffLocation"
            render={({ field }) => <Autocomplete
              placeholder="Choose place"
              selected={field.value}
              onSelect={(v) => field.onChange(v)}
            />}
          />
          <ErrorMessage
            errors={errors}
            name="dropOffLocation"
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
            Number of passengers
          </FormLabel>
          <Controller
            control={control}
            name="passengers"
            render={({ field }) => <NumberInput
              min={0}
              max={MAX_PASSENGERS}
              clampValueOnBlur={false}
              value={field.value}
              variant="base">
              <NumberInputField
                placeholder="Enter passengers count"
                fontSize="1.4rem"
                onChange={(e) => field.onChange(e.target.value)}
              />
            </NumberInput>}
          />
          <ErrorMessage
            errors={errors}
            name="passengers"
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
          Next Step
        </Button>
      </VStack>
    </Box>
  )
}