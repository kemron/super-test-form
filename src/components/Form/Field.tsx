import { PropsWithChildren } from "react";

interface FieldProps {
  label: string;
  error?: string;
}


export default function Field({ label, error, children }: PropsWithChildren<FieldProps>) {
  return (<div>
    <label>{label}</label>
    {children}
    {error && <div>{error}</div>}
  </div>)
}