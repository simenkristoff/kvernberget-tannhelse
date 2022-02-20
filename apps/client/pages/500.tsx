import { useRouter } from 'next/router'

export default function Custom500() {
  const router = useRouter()

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <article className="text-center">
        <h1 className="font-bold text-9xl text-gray-700">500</h1>
        <p className="font-bold text-3xl text-teal-600">Ooops!</p>
        <p className="text-lg font-medium text-gray-700 mt-2">
          En intern serverfeil har oppstått
        </p>
        <a
          onClick={() => router.back()}
          className="btn btn-primary mt-4 cursor-pointer"
        >
          Gå til forrige side
        </a>
      </article>
    </div>
  )
}
