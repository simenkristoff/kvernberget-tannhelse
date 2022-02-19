import React from 'react'
import { useForm, Controller, ControllerProps } from 'react-hook-form'

function InputText (
  props: Omit<ControllerProps & { label?: string }, 'render'>
) {
  return (
    <Controller
      {...props}
      render={({ field, fieldState }) => {
        console.log(fieldState)
        return (
          <div className="mb-6">
            {props.label && (
              <label
                htmlFor={props.name}
                className="block mb-1  font-semibold text-gray-900"
              >
                {props.label}
              </label>
            )}
            <input
              {...field}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg active:ring-cyan-600 active:border-cyan-600 focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
            />
            {fieldState.error && fieldState.error.message}
          </div>
        )
      }}
    />
  )
}

export default function AppointmentForm () {
  const {
    control,
    handleSubmit
  } = useForm()
  const onSubmit = (data: any) => console.log(data)
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          control={control}
          name="firstName"
          label="Fornavn"
          rules={{
            required: 'Dette feltet må fylles'
          }}
        />

        <InputText
          control={control}
          name="lastName"
          label="Etternavn"
          rules={{
            required: 'Dette feltet må fylles'
          }}
        />

        <input type="submit" />
      </form>
    </div>
  )
}
