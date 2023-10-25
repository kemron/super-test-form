import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { useStepperFormState } from "@/components/StepperForm/stepperState";
import InputField from "@/components/Form/InputField";
import Form from "@/components/Form/Form";
import { useCallback, FormEvent } from "react";


const VALIDATION_MESSAGES = {
  minLength: "Password must be atleast 8 characters",
  maxLength: "Password cannot be more than 16 characters",
  passwordMismatch: "Passwords must match"
}

const validation = z.object({
  password: z.string().min(8, VALIDATION_MESSAGES.minLength).max(16, VALIDATION_MESSAGES.maxLength),
  confirmPassword: z.string().min(8, VALIDATION_MESSAGES.passwordMismatch).max(16, VALIDATION_MESSAGES.passwordMismatch),
}).refine(data => data.password === data.confirmPassword, {
  message: VALIDATION_MESSAGES.passwordMismatch,
  path: ["confirmPassword"],
})



export default function PasswordScreen() {
  const { setForm, form, nextStep } = useStepperFormState()
  const { register, handleSubmit, formState } = useForm({
    defaultValues: form,
    resolver: zodResolver(validation),
    mode: "onTouched"
  })

  const onSubmit = useCallback(async (data: FormEvent) => {
    await handleSubmit(setForm)(data)
    nextStep()
  }, [handleSubmit, setForm, nextStep])



  return (
    <Form onSubmit={onSubmit} actionBtnLabel="Continue" disabled={!formState.isValid}>
      <InputField id="password" type="password" label="Password" error={formState.errors.password?.message} placeholder="Input password" {...register("password")} />
      <InputField id="confirmPassword" type="password" label="Repeat Password" error={formState.errors.confirmPassword?.message} placeholder="Repeat password" {...register("confirmPassword")} />
    </Form>
  )
}