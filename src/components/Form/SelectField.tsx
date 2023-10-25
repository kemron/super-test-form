import { forwardRef } from "react";
import Field from "./Field";


interface SelectProps<TData> extends React.HTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  data: TData[];
  optionLabel: (option: TData) => string;
  optionValue: (option: TData) => string;
}


function getOptions<TData>(data: TData[], optionLabel: (option: TData) => string, optionValue: (option: TData) => string) {
  return data.map((option) => <option key={optionValue(option)} value={optionValue(option)}>{optionLabel(option)}</option>)
}

function SelectFormField<TData>({ label, data, error, optionLabel, optionValue, id, ...htmlSelectProps }: SelectProps<TData>, ref: React.ForwardedRef<HTMLSelectElement>) {
  return (
    <Field label={label} error={error} name={id}>
      <select id={id} className="w-full px-4 py-3 leading-4 border-r-[12px] border-transparent" ref={ref} {...htmlSelectProps}>
        {getOptions<TData>(data, optionLabel, optionValue)}
      </select>
    </Field >
  )
}

export default forwardRef(SelectFormField) as <TData>(props: SelectProps<TData> & { ref?: React.ForwardedRef<HTMLSelectElement> }) => JSX.Element