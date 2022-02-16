import client from '@lib/sanity'
import Image from 'next/image'
import { Employees } from '@lib/schema'
import { useNextSanityImage } from 'next-sanity-image'

interface IProps {
    data: Employees
}

export default function EmployeeCard ({ data }: IProps) {
  const employeeName = `${data.name?.firstName} ${data.name?.lastName}`
  return (
      <div
        className="relative p-4 block bg-white drop-shadow-md hover:drop-shadow-xl hover:scale-105 duration-500"
        key={data._id}
      >
        <div className="relative w-full mx-auto aspect-square rounded-full overflow-hidden border-2 border-slate-100">
            <Image
              src={data.image ? useNextSanityImage(client, data.image) : ''}
              alt={employeeName}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
            />
          </div>
        <ul className="mt-4 py-4 -m-4 border-t-2 border-slate-100 text-center bg-sky-100">
          <li className="text-lg font-semibold text-slate-600">{data.jobTitle}</li>
          <li className="font-bold text-slate-700">{employeeName}</li>
        </ul>
      </div>
  )
}
