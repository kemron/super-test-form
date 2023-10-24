import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { useStepperFormState } from "@/components/StepperForm/stepperState";
import InputField from "@/components/Form/InputField";
import Form from "@/components/Form/Form";
import { useCallback, FormEvent } from "react";


const validation = z.object({
  password: z.string().min(8).max(16),
  confirmPassword: z.string().min(8).max(16),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords must match",
  path: ["confirmPassword"],
})


export default function PasswordScreen() {
  const { setForm, form, nextStep } = useStepperFormState()
  const { register, handleSubmit, formState } = useForm({
    defaultValues: form,
    resolver: zodResolver(validation),
    mode: "onBlur"
  })

  const onSubmit = useCallback(async (data: FormEvent) => {
    await handleSubmit(setForm)(data)
    nextStep()
  }, [handleSubmit, setForm, nextStep])



  const canSubmit = formState.isValid && formState.isDirty
  return (
    <Form onSubmit={onSubmit} actionBtnLabel="Continue" disabled={!canSubmit}>
      <InputField type="password" label="Password" error={formState.errors.password?.message} placeholder="Input password" {...register("password")} />
      <InputField type="password" label="Repeat Password" error={formState.errors.confirmPassword?.message} placeholder="Repeat password" {...register("confirmPassword")} />
    </Form>
  )
}