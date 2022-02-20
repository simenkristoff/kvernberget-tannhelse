import classNames from 'classnames'
import { Controller } from 'react-hook-form'
import { InputProps } from './interface'

export default function InputText (props: InputProps) {
  return (
      <Controller
        {...props}
        render={({ field, fieldState }) => (
          <div
            className={classNames(props.className, { 'mb-6': !fieldState.error })}
          >
            {props.label && (
              <label
                htmlFor={field.name}
                className="inline-block mb-1 text-sm font-semibold text-gray-900"
              >
                {props.label}
              </label>
            )}
            <input
              {...field}
              type="text"
              className={classNames(
                'block w-full text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-600 active:ring-teal-600 active:border-teal-600 focus:ring-teal-600 focus:border-cyan-600',
                { 'border-red-600': fieldState.error }
              )}
            />
            {fieldState.error && (
              <span className="text-sm text-red-600">
                {fieldState.error.message}
              </span>
            )}
          </div>
        )}
      />
  )
}
