import React from 'react'
import { useForm } from 'react-hook-form'

import { InputText, InputCheckbox } from './input'

export default function AppointmentForm() {
  const { control, handleSubmit } = useForm()
  // eslint-disable-next-line no-console
  const onSubmit = (data: any) => console.log(data)
  return (
    <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
      <form className="max-w-2xl" onSubmit={handleSubmit(onSubmit)}>
        <div className="-mx-2 flex flex-wrap">
          <InputText
            className="w-full px-2 sm:w-1/2"
            control={control}
            name="firstName"
            label="Fornavn"
            rules={{
              required: 'Dette feltet må fylles'
            }}
          />

          <InputText
            className="w-full px-2 sm:w-1/2"
            control={control}
            name="lastName"
            label="Etternavn"
            rules={{
              required: 'Dette feltet må fylles'
            }}
          />

          <InputText
            className="w-full px-2 sm:w-1/2"
            control={control}
            name="email"
            label="E-post"
            rules={{
              required: 'Dette feltet må fylles'
            }}
          />

          <InputText
            className="w-full px-2 sm:w-1/2"
            control={control}
            name="phone"
            label="Telefon"
            rules={{
              required: 'Dette feltet må fylles'
            }}
          />
        </div>
        <InputCheckbox
          control={control}
          name="special"
          label="Jeg har spesielle behov til timen min og ønsker å bli kontaktet per telefon"
        />
        <InputCheckbox
          control={control}
          name="agreement"
          label="Jeg samtykker til lagring av persondata hos Kvernberget Tannhelse i forbindelse med timebestilling"
          rules={{
            required: 'Dette feltet må fylles'
          }}
        />
        <div className="mx-auto text-center">
          <input className="btn btn-primary" type="submit" />
        </div>
      </form>
    </div>
  )
}
