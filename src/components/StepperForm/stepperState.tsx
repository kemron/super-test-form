import { PropsWithChildren, createContext, useCallback, useContext, useMemo, useState } from "react";


interface StepperState {
  currentStep: number,
  setForm: (values: Record<string, string>) => void,
  nextStep: () => void,
  onComplete: () => void,
  form: Record<string, string>,
}


const StepperFormContext = createContext<StepperState | undefined>(undefined)

export function useStepperFormState() {
  const context = useContext(StepperFormContext)
  if (context === undefined) {
    throw new Error('useStepperFormState must be used within a StepperFormProvider')
  }
  return context
}


export function StepperFormProvider({ children, defaultValues = {} }: PropsWithChildren<{ defaultValues?: Record<string, string> }>) {
  const [currentStep, setCurrentStep] = useState(0)
  const [form, setForm] = useState<Record<string, string>>(defaultValues)


  const updateForm = useCallback((values: Record<string, string>) => {
    setForm((prevForm) => ({ ...prevForm, ...values }))
  }, [])

  const nextStep = useCallback(() => {
    setCurrentStep((step) => step + 1)
  }, [])

  const onComplete = useCallback(() => {
    setCurrentStep(0)
    setForm(defaultValues)
  }, [])

  const state: StepperState = useMemo(() => ({
    currentStep,
    form,
    nextStep,
    onComplete,
    setForm: updateForm,
  }), [currentStep, form])

  return (
    <StepperFormContext.Provider value={state}>
      {children}
    </StepperFormContext.Provider>
  )
}