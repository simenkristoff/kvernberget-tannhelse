import React from 'react'
import { useForm } from 'react-hook-form'
import { InputText, InputCheckbox } from './input'

export default function AppointmentForm () {
  const { control, handleSubmit } = useForm()
  const onSubmit = (data: any) => console.log(data)
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
      <form className="max-w-2xl" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap -mx-2">
          <InputText
            className="w-full sm:w-1/2 px-2"
            control={control}
            name="firstName"
            label="Fornavn"
            rules={{
              required: 'Dette feltet må fylles'
            }}
          />

          <InputText
            className="w-full sm:w-1/2 px-2"
            control={control}
            name="lastName"
            label="Etternavn"
            rules={{
              required: 'Dette feltet må fylles'
            }}
          />

          <InputText
            className="w-full sm:w-1/2 px-2"
            control={control}
            name="email"
            label="E-post"
            rules={{
              required: 'Dette feltet må fylles'
            }}
          />

          <InputText
            className="w-full sm:w-1/2 px-2"
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
        <input className="btn btn-primary" type="submit" />
      </form>
    </div>
  )
}
