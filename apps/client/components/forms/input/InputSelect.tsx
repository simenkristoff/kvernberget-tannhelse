import classNames from 'classnames'
import { Controller } from 'react-hook-form'

import { InputProps } from './interface'

const days = [
  'Mandag',
  'Tirsdag',
  'Onsdag',
  'Torsdag',
  'Fredag',
  'Lørdag',
  'Søndag'
]

export default function InputSelect(props: InputProps) {
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
              className="mb-1 inline-block text-sm font-semibold text-gray-900"
            >
              {props.label}
            </label>
          )}
          <select
            {...field}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 placeholder:text-gray-600 focus:border-cyan-600 focus:ring-teal-600 active:border-teal-600 active:ring-teal-600"
          >
            {days.map((day) => (
              <option key="day">{day}</option>
            ))}
          </select>
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
