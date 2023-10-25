import clsx from "clsx";
import { memo } from "react";
interface StepperProps {
  steps: string[];
  currentStep: number;
  className?: string;
}

function Stepper({ steps, currentStep, className }: StepperProps) {
  return (
    <ol role="list" className={clsx("flex text-sm text-left gap-5", className)}>
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-3 text-arival-purple">
          <span className={clsx("relative flex h-4 w-4 items-center justify-center rounded-[4px]", {
            "bg-[#87839F]": index < currentStep,
            "bg-active-purple": index === currentStep,
            "bg-[#C9C5E8]": index > currentStep,
          })} />
          <span> {step}</span>
        </li>)

      )
      }
    </ol >)
}
export default memo(Stepper)