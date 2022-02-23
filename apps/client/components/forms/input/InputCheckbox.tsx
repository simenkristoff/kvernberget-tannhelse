import classNames from 'classnames'
import { Controller } from 'react-hook-form'

import { InputProps } from './interface'

export default function InputCheckbox(props: InputProps) {
  return (
    <Controller
      {...props}
      render={({ field, fieldState }) => (
        <div
          className={classNames(props.className, { 'mb-6': !fieldState.error })}
        >
          <label className="relative block pl-6" htmlFor={field.name}>
            <input
              className={classNames(
                'absolute mt-1 -ml-6 h-5 w-5 rounded-md p-0 checked:bg-primary-light  focus:bg-transparent focus:outline-primary-light  focus:checked:bg-primary-light ',
                { 'border-red-600': fieldState.error }
              )}
              {...field}
              type="checkbox"
            />
            <span className="mb-1 inline-block text-sm font-semibold leading-5 text-gray-900">
              {props.label}
            </span>
          </label>
          {fieldState.error && (
            <span className="text-red-600 ml-6 text-sm">
              {fieldState.error.message}
            </span>
          )}
        </div>
      )}
    />
  )
}
