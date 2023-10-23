import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import Field from "../../Form/Field";
import { z } from "zod";
import { useStepperFormState } from "../../StepperForm/stepperState";

const validation = z.object({
  username: z.string().min(4).max(12),
  email: z.string().email(),
  phone: z.string().regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/),
  country: z.string(),
})



export default function InitialInfoForm() {
  const { setForm, form } = useStepperFormState()
  const { register, handleSubmit, formState } = useForm({
    defaultValues: form,
    resolver: zodResolver(validation),
  })

  return (
    <form onSubmit={handleSubmit(setForm)}>
      <Field label="Username" error={formState.errors.username?.message}> <input {...register("username")} type="text" /> </Field>
      <Field label="Email" error={formState.errors.email?.message}> <input {...register("email")} type="email" /> </Field>
      <Field label="Country" error={formState.errors.country?.message}> <input {...register("country")} type="text" /> </Field>
      <Field label="Phone Number" error={formState.errors.phone?.message}> <input {...register("phone")} type="text" /> </Field>
      <input type="submit" />
    </form>
  )
}