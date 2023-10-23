import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import Field from "../../Form/Field";
import { z } from "zod";
import { useStepperFormState } from "../../StepperForm/stepperState";

const validation = z.object({
  password: z.string().min(8).max(16),
  confirmPassword: z.string().min(8).max(16),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords must match",
  path: ["confirmPassword"],
})


export default function PasswordScreen() {
  const { setForm, form } = useStepperFormState()
  const { register, handleSubmit, formState } = useForm({
    defaultValues: form,
    resolver: zodResolver(validation),
  })

  return (
    <form onSubmit={handleSubmit(setForm)}>
      <Field label="Password" error={formState.errors.password?.message}> <input {...register("password")} type="password" /> </Field>
      <Field label="Repeat Password" error={formState.errors.confirmPassword?.message}> <input {...register("confirmPassword")} type="password" /> </Field>
      <input type="submit" />
    </form>
  )
}