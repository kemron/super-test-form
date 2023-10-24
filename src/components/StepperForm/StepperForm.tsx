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
    <section className="flex mt-[74px]">
      <Stepper steps={stepTags} onStepChange={setCurrentStep} />
      <div className="max-w-[400px] w-[400px] mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl text-[#413C5F]">{title}</h1>
          <h2 className="text-xl text-[#817CA5] mt-[17px]">{step.name}</h2>
        </div>

        <div className="mt-9">
          {step.form}
        </div>
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