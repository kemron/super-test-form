import { useStepperFormState } from "@/components/StepperForm/stepperState"


export default function Review() {
  const { form } = useStepperFormState()


  return (
    <div>
      <div>
        <span>UserName</span>
        <span>{form.username}</span>
      </div>
      <div>
        <span>Email</span>
        <span>{form.email}</span>
      </div>
      <div>
        <span>Country</span>
        <span>{form.county}</span>
      </div>
    </div >
  )
}