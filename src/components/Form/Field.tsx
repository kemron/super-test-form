import { PropsWithChildren } from "react";

interface FieldProps {
  label: string;
  error?: string;
  className?: string;
  name?: string;
}


export default function Field({ label, error, children, name, ...rest }: PropsWithChildren<FieldProps>) {
  return (
    <div {...rest}>
      <label className="text-white leading-4 text-sm" htmlFor={name}>{label}</label>
      {children}
      {error && <div className="text-error-red text-sm leading-4 font-normal mt-2">{error}</div>}
    </div>
  )
}