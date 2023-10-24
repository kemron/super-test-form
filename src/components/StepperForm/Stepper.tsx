import { memo } from "react";
interface StepperProps {
  steps: string[];
  onStepChange: (step: number) => void;
}

function Stepper({ steps, onStepChange }: StepperProps) {
  return (<div className="flex flex-col text-sm text-left gap-5">
    {steps.map((step, index) => (
      <div className="flex space-x-3">
        <svg width="16" height="16" viewBox="0 0 16 16" className="fill-red-600">
          <rect width="16" height="16" rx="2" fill="#C9C5E8" />
        </svg>
        <button key={step} onClick={() => onStepChange(index)}>{step}</button>
      </div>)

    )
    }
  </div >)
}
export default memo(Stepper)