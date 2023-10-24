import { forwardRef } from "react";
import Field from "./Field";

interface InputFieldProps extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  type?: "text" | "password" | "email" | "number"
}


function InputField({ label, error, type = "text", ...htmlInputProps }: InputFieldProps, ref: React.ForwardedRef<HTMLInputElement>) {
  return (
    <Field label={label} error={error}>
      <input className="w-full px-4 py-3 leading-4" type={type} ref={ref} {...htmlInputProps} />
    </Field>
  )
}


export default forwardRef(InputField)