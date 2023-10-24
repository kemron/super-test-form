import { PropsWithChildren } from "react";

interface FieldProps {
  label: string;
  error?: string;
  className?: string;
}


export default function Field({ label, error, children, ...rest }: PropsWithChildren<FieldProps>) {
  return (
    <div {...rest}>
      <label className="text-white leading-4 text-sm">{label}</label>
      {children}
      {error && <div className="text-[#DA2121] text-sm leading-4 font-normal mt-2">{error}</div>}
    </div>
  )
}