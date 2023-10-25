import { forwardRef } from "react";
import Field from "./Field";

interface InputFieldProps extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  type?: "text" | "password" | "email" | "number"
}



function InputField({ label, error, type = "text", id, ...htmlInputProps }: InputFieldProps, ref: React.ForwardedRef<HTMLInputElement>) {
  return (
    <Field label={label} error={error} name={id}>
      <div className="relative">
        <input id={id} className="w-full px-4 py-3 leading-4" type={type} ref={ref} {...htmlInputProps} />

        {error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg fill="none" className="w-4 h-4 bg-error-red">
              <rect width="16" height="16" rx="2" />
              <path d="M8.57102 3L8.47159 10.3182H7.31818L7.21875 3H8.57102ZM7.89489 13.2614C7.64962 13.2614 7.43916 13.1735 7.26349 12.9979C7.08783 12.8222 7 12.6117 7 12.3665C7 12.1212 7.08783 11.9107 7.26349 11.7351C7.43916 11.5594 7.64962 11.4716 7.89489 11.4716C8.14015 11.4716 8.35062 11.5594 8.52628 11.7351C8.70194 11.9107 8.78977 12.1212 8.78977 12.3665C8.78977 12.5289 8.74834 12.678 8.66548 12.8139C8.58594 12.9498 8.47822 13.0592 8.34233 13.142C8.20975 13.2216 8.06061 13.2614 7.89489 13.2614Z" fill="white" />
            </svg>
          </div>
        )}

      </div>

    </Field>
  )
}


export default forwardRef(InputField)