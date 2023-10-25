import Form from "@/components/Form/Form"
import { useStepperFormState } from "@/components/StepperForm/stepperState"




function ReviewItem({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex justify-between text-sm leading-4">
      <p className="text-[#CECAEB]">{label}</p>
      <p className="font-medium text-white">{value}</p>
    </div>
  )
}

export default function Review() {
  const { form, onComplete } = useStepperFormState()

  const onSubmit = () => {
    alert("Contratulations! You've completed the form!")
    onComplete()
  }


  return (
    <Form onSubmit={onSubmit} actionBtnLabel="Complete">
      <ReviewItem label="Username" value={form.username} />
      <ReviewItem label="Email" value={form.email} />
      <ReviewItem label="Phone Number" value={form.phone} />
    </Form >
  )
}