import { Fragment } from "react";
import Field from "./Field";
import { faChevronDown, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Listbox, Transition } from "@headlessui/react";
import clsx from "clsx";


interface SelectProps<TData> {
  label: string;
  name?: string;
  error?: string;
  data: TData[];
  optionLabel: (option: TData) => string;
  onChange?: (value: TData | undefined) => void;
  onBlur?: () => void;
  placeholder?: string;
  defaultValue?: TData | ((previous: TData) => TData | undefined)
}


function getOptions<TData>(data: TData[], optionLabel: (option: TData) => string) {
  return data.map((option) => (

    <Listbox.Option
      key={optionLabel(option)}
      className="flex cursor-default select-none py-2 pl-10 pr-4 even:bg-list-stripe hover:bg-active-purple/50 hover:text-white"
      value={option}
    >
      {({ selected }) => (
        <>
          <span
            className={`block truncate ${selected ? 'font-semibold' : 'font-normal'
              }`}
          >
            {optionLabel(option)}
          </span>
          {selected && (
            <span className=" inset-y-0 left-0 flex items-center pl-3 text-active-purple">
              <FontAwesomeIcon icon={faCheck} aria-hidden />
            </span>

          )}
        </>
      )}
    </Listbox.Option>
  )
  )
}

function SelectFormField<TData>({ label, data, error, optionLabel, name, placeholder, defaultValue, onChange, onBlur }: SelectProps<TData>) {


  return (
    <Field label={label} error={error} name={name} onBlur={onBlur}>
      <Listbox onChange={onChange} defaultValue={defaultValue}>
        <div className="relative mt-1" >
          <Listbox.Button className="relative w-full px-4 py-3 leading-4 cursor-default rounded-[4px] bg-white pr-8 text-left ">
            {({ value }) => (
              <>
                <span className={clsx("block truncate", {
                  "text-placeholder-gray": !value,
                })}>
                  {value ? optionLabel(value) : placeholder}
                </span>
                <span className=" flex items-center absolute inset-y-0 right-3">
                  <FontAwesomeIcon icon={faChevronDown} aria-hidden />
                </span>
              </>
            )}

          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-2 max-h-60 w-full overflow-auto rounded-[4px] bg-white py-1 text-sm shadow-md focus:outline-none z-10">
              {getOptions(data, optionLabel)}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </Field >
  )
}
export default SelectFormField