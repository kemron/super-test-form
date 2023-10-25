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
  const { currentStep } = useStepperFormState()
  const step = steps[currentStep]

  return (



    <section className="grid grid-cols-4 h-screen auto-rows-min">
      <header className="sm:col-span-2 sm:col-start-2 col-span-4 text-white p-4 mt-20 h-fit">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl text-arival-gray">{title}</h1>
          <h2 className="text-xl text-arival-purple mt-[17px]">{step.name}</h2>
        </div>
      </header>
      <aside className="flex row-start-2 sm:col-span-1 col-span-4 p-4 justify-center">
        <Stepper steps={stepTags} currentStep={currentStep} className="sm:flex-col" />
      </aside>
      <div className="sm:col-start-2 sm:col-span-2 col-span-4 p-4 mt-5">
        <div className="max-w-[400px] justify-items-stretch mx-auto">
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