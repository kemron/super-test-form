import { memo } from "react";

interface StepperProps {
  steps: string[];
  onStepChange: (step: number) => void;
}

function Stepper({ steps, onStepChange }: StepperProps) {
  return (<div className="space-x-3">
    {steps.map((step, index) => <button key={step} onClick={() => onStepChange(index)}>{step}</button>)}
  </div>)
}
export default memo(Stepper)