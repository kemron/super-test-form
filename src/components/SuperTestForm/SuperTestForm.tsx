import StepperForm from "../StepperForm/StepperForm";
import InitialInfoForm from "./Steps/InitialInfo";
import PasswordScreen from "./Steps/Password";
import Review from "./Steps/Review";

const steps = [
  {
    name: "Initial Info",
    tag: "Initial Info",
    form: <InitialInfoForm />
  },
  {
    name: "Password Screen",
    tag: "Password Screen",
    form: <PasswordScreen />
  },
  {
    name: "Review Screen",
    tag: "Review",
    form: <Review />
  }
]


export default function SuperTestForm() {
  return <StepperForm title="Super Test Form" steps={steps} />
}