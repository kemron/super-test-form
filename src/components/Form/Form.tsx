import { PropsWithChildren } from "react";

export interface FormTypes extends React.FormHTMLAttributes<HTMLFormElement> {
  actionBtnLabel: string;
  disabled?: boolean;
}




export default function Form({ children, actionBtnLabel, disabled, ...formProps }: PropsWithChildren<FormTypes>) {
  return (
    <form className="flex flex-col gap-10 bg-[#817CA5] px-5 py-10 rounded-[1.25rem]"    {...formProps}>
      {children}
      <button type="submit" className="w-full bg-white rounded-[4px] py-4 disabled:bg-[#C0BCDF] disabled:text-[#8B85B1] text-2xl text-[#413C5F]" disabled={disabled} >{actionBtnLabel}</button>
    </form>
  )
}