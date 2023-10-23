import { PropsWithChildren, createContext, useContext, useMemo, useState } from "react";


interface StepperState {
  currentStep: number,
  setForm: (values: Record<string, string>) => void,
  setCurrentStep: (step: number) => void,
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

  const state: StepperState = useMemo(() => ({
    currentStep,
    form,
    setCurrentStep,
    setForm,
  }), [currentStep, form])

  return (
    <StepperFormContext.Provider value={state}>
      {children}
    </StepperFormContext.Provider>
  )
}