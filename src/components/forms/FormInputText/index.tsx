import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react'
import { useFormContext, FieldError, FieldValues } from 'react-hook-form'
import { FieldByType } from '@/libs/react-hook-form'

interface FormInputProps<T> {
  name: FieldByType<T, string>
  label: string
  fieldError: FieldError | undefined
}

export const FormInputText = <T extends FieldValues = never>({
  name,
  label,
  fieldError,
}: FormInputProps<T>): ReturnType<React.FC> => {
  const { register } = useFormContext()

  return (
    <FormControl isInvalid={fieldError ? true : false}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input id={name} {...register(name)} type="text" />
      {fieldError && <FormErrorMessage>{fieldError.message}</FormErrorMessage>}
    </FormControl>
  )
}
