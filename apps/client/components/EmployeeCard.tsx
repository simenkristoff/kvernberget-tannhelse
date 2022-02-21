import client from '@lib/sanity'
import Image from 'next/image'
import { Employees } from '@lib/schema'
import { useNextSanityImage } from 'next-sanity-image'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

import SanityImage from './Image'

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: Employees
}

export default function EmployeeCard({ data, ...props }: IProps) {
  const employeeName = `${data.name?.firstName} ${data.name?.lastName}`
  return (
    <div {...props} className="relative block">
      <div className="overflow-hidden rounded-full border border-teal-600 drop-shadow-lg">
        <SanityImage src={data.image} alt={employeeName} />
      </div>
      <ul className="py-4 text-center">
        <li className="text-lg font-semibold text-gray-600">{data.jobTitle}</li>
        <li className="font-bold text-gray-700">{employeeName}</li>
      </ul>
    </div>
  )
}
