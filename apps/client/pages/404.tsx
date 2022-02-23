import { useRouter } from 'next/router'

export default function Custom404() {
  const router = useRouter()

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <article className="text-center">
        <h1 className="text-9xl font-bold text-gray-700">404</h1>
        <p className="text-3xl font-bold text-primary-base">Ooops!</p>
        <p className="mt-2 text-lg font-medium text-gray-700">
          Denne siden finnes ikke
        </p>
        <button
          onClick={() => router.back()}
          className="btn btn-primary mt-4 cursor-pointer"
        >
          Gå til forrige side
        </button>
      </article>
    </div>
  )
}
