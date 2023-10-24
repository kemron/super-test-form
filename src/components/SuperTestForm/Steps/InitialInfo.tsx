import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { useStepperFormState } from "@/components/StepperForm/stepperState";
import { Country, useCountries } from "@/api/countries";
import SelectFormField from "@/components/Form/SelectField";
import InputField from "@/components/Form/InputField";
import Form from "@/components/Form/Form";
import { FormEvent, useCallback } from "react";

const validation = z.object({
  username: z.string().min(4).max(12),
  email: z.string().email(),
  phone: z.string().regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, { message: "Invalid phone number" }),
  country: z.string(),
})


const countryLabel = (country: Country) => country.name
const countryValue = (country: Country) => country.code


export default function InitialInfoForm() {
  const { setForm, form, nextStep } = useStepperFormState()
  const { register, handleSubmit, formState } = useForm({
    defaultValues: form,
    resolver: zodResolver(validation),
    mode: "onBlur",
  })



  const onSubmit = useCallback(async (data: FormEvent) => {
    await handleSubmit(setForm)(data)
    nextStep()
  }, [handleSubmit, setForm, nextStep])

  const countries = useCountries();
  const canSubmit = formState.isValid && formState.isDirty
  return (
    <Form onSubmit={onSubmit} actionBtnLabel="Continue" disabled={!canSubmit}>
      <InputField label="Username" error={formState.errors.username?.message} placeholder="Input username" {...register("username")} />
      <InputField type="email" label="Email" error={formState.errors.email?.message} placeholder="Input email"{...register("email")} />
      <SelectFormField<Country>
        placeholder="Select Country"
        label="Country"
        data={countries}
        optionLabel={countryLabel}
        optionValue={countryValue}
        error={formState.errors.country?.message}
        {...register("country")} />
      <InputField label="Phone Number" error={formState.errors.phone?.message} placeholder="Input phone number" {...register("phone")} />
    </Form>
  )
}