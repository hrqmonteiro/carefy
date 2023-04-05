import { ChangeEventHandler, FocusEventHandler } from 'react'
import cn from 'classnames'

interface InputProps {
  className?: string
  disabled?: boolean
  icon?: React.ReactNode | string
  id?: string
  label?: string
  onBlur?: FocusEventHandler<HTMLInputElement>
  onChange?: ChangeEventHandler<HTMLInputElement>
  onFocus?: FocusEventHandler<HTMLInputElement>
  placeholder?: string
  type?: string
  value?: string | number | readonly string[] | undefined
}

export default function Input({
  className,
  disabled,
  icon,
  id,
  label,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  type,
  value
}: InputProps) {
  return (
    <div className='flex flex-wrap w-full justify-center items-center mb-4'>
      {label && (
        <label htmlFor={id} className='inline-block mb-2 form-label w-full'>
          {label}
        </label>
      )}
      {icon && (
        <div className='z-10 ml-1 flex justify-center items-center '>
          {icon}
        </div>
      )}
      <input
        className={cn(
          `${className} truncate ... form-control appearance-none block w-full py-3 font-normal bg-primary bg-clip-padding border border-solid border-accent-2 rounded transition ease-in-out focus:text-carefy focus:border-carefy focus:outline-none`,
          disabled && 'opacity-60',
          icon ? '-ml-7 px-10' : 'px-3'
        )}
        disabled={disabled}
        id={id}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        type={type || 'text'}
        value={value}
      />
    </div>
  )
}
