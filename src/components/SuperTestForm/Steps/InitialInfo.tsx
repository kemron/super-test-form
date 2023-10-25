import { Controller, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { useStepperFormState } from "@/components/StepperForm/stepperState";
import { Country, useCountries } from "@/api/countries";
import SelectFormField from "@/components/Form/SelectField";
import InputField from "@/components/Form/InputField";
import Form from "@/components/Form/Form";
import { FormEvent, useCallback } from "react";


const VALIDATION_MESSAGES = {
  username: {
    minLength: "Username must be atleast 4 characters",
    maxLength: "Username cannot be more than 12 characters",
  },
  email: "Please enter a valid email address",
  phone: "Please enter a valid phone number",
  country: "Please select a country",
}


const validation = z.object({
  username: z.string().min(4, VALIDATION_MESSAGES.username.minLength).max(12, VALIDATION_MESSAGES.username.maxLength),
  email: z.string().email(VALIDATION_MESSAGES.email),
  phone: z.string().min(7, VALIDATION_MESSAGES.phone).regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, { message: VALIDATION_MESSAGES.phone }),
  country: z.string({ required_error: VALIDATION_MESSAGES.country })
})


const countryLabel = (country: Country) => country.name



export default function InitialInfoForm() {
  const { setForm, form, nextStep } = useStepperFormState()
  const { register, handleSubmit, formState, control } = useForm({
    defaultValues: form,
    resolver: zodResolver(validation),
    mode: "onTouched",
  })



  const onSubmit = useCallback(async (data: FormEvent) => {
    await handleSubmit(setForm)(data)
    nextStep()
  }, [handleSubmit, setForm, nextStep])

  const countries = useCountries();
  return (
    <Form onSubmit={onSubmit} actionBtnLabel="Continue" disabled={!formState.isValid}>
      <InputField id="username" label="Username" error={formState.errors.username?.message} placeholder="Input username" {...register("username")} />
      <InputField id="email" type="email" label="Email" error={formState.errors.email?.message} placeholder="Input email"{...register("email")} />

      <Controller
        name="country"
        control={control}

        render={({ field }) => (
          <SelectFormField<Country>
            name={field.name}
            placeholder="Select Country"
            label="Country"
            onBlur={field.onBlur}
            data={countries}
            defaultValue={() => countries.find(ctry => ctry.code === field.value)}
            optionLabel={countryLabel}
            error={formState.errors.country?.message}
            onChange={(country) => {
              field.onChange(country?.name)
            }}
          />


        )}
      />
      <InputField id="phone" label="Phone Number" error={formState.errors.phone?.message} placeholder="+1 (555) 446-6522" {...register("phone")} />
    </Form>
  )
}