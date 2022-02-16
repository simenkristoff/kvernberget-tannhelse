import { useForm } from 'react-hook-form'

export default function AppointmentForm () {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = (data: any) => console.log(data)
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label
            htmlFor="firstName"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Fornavn
          </label>

          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg active:ring-cyan-600 active:border-cyan-600 focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
            {...register('firstName')}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="lastName"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Etternavn
          </label>
          <input type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg active:ring-cyan-600 active:border-cyan-600 focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
            {...register('lastName', { required: true })}
          />

          {errors.lastName && <p>Last name is required</p>}
        </div>
        <div className="mb-6">
          <label
            htmlFor="age"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Alder
          </label>
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg active:ring-cyan-600 active:border-cyan-600 focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
            {...register('age', { pattern: /\d+/ })}
          />

          {errors.age && <p>Please enter number for age.</p>}
        </div>
        <input type="submit" />
      </form>
    </div>
  )
}
