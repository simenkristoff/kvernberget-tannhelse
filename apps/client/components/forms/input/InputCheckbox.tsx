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
                'absolute mt-1 -ml-6 p-0 h-5 w-5 rounded-md checked:bg-teal-600 focus:checked:bg-teal-600 focus:bg-transparent focus:outline-teal-600',
                { 'border-red-600': fieldState.error }
              )}
              {...field}
              type="checkbox"
            />
            {props.label && (
              <span className="inline-block mb-1 leading-5 text-sm font-semibold text-gray-900">
                {props.label}
              </span>
            )}
          </label>
          {fieldState.error && (
            <span className="ml-6 text-sm text-red-600">
              {fieldState.error.message}
            </span>
          )}
        </div>
      )}
    />
  )
}
