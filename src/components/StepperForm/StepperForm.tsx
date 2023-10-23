import { useMemo } from "react";
import Stepper from "./Stepper";
import { StepperFormProvider, useStepperFormState } from "./stepperState";

export type Step = {
  name: string;
  tag: string;
  form: JSX.Element
}


export type StepperProps = {
  title: string;
  steps: Step[];
}
function StepperForm({ title, steps }: StepperProps) {
  const stepTags = useMemo(() => steps.map(step => step.tag), [steps])
  const { currentStep, setCurrentStep } = useStepperFormState()
  const step = steps[currentStep]

  return (
    <section>
      <Stepper steps={stepTags} onStepChange={setCurrentStep} />
      <h1 className="text-xl">{title}</h1>
      <h2 className="text-lg">{step.name}</h2>
      <div className="mt-9">
        {step.form}
      </div>
    </section >
  )
}

export default function StepperFormWrapper(props: StepperProps) {
  return (
    <StepperFormProvider>
      <StepperForm {...props} />
    </StepperFormProvider>
  )
}