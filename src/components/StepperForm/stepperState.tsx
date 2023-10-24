import { PropsWithChildren, createContext, useCallback, useContext, useMemo, useState } from "react";


interface StepperState {
  currentStep: number,
  setForm: (values: Record<string, string>) => void,
  setCurrentStep: (step: number) => void,
  nextStep: () => void,
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


export function StepperFormProvider({ children }: PropsWithChildren<{}>) {
  const [currentStep, setCurrentStep] = useState(0)
  const [form, setForm] = useState<Record<string, string>>({})


  const updateForm = useCallback((values: Record<string, string>) => {
    setForm((prevForm) => ({ ...prevForm, ...values }))
  }, [])

  const nextStep = useCallback(() => {
    setCurrentStep((step) => step + 1)
  }, [])

  const state: StepperState = useMemo(() => ({
    currentStep,
    form,
    setCurrentStep,
    nextStep,
    setForm: updateForm,
  }), [currentStep, form])

  return (
    <StepperFormContext.Provider value={state}>
      {children}
    </StepperFormContext.Provider>
  )
}