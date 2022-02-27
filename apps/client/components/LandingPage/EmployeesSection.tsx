import SanityImage from '@components/Image'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { GetEmployeesQueryResult } from '@lib/queries/getEmployees'
import {
  Employees,
  EmployeeSection as EmployeeSectionSchema
} from '@lib/schema'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

import SectionTitle from './utils/SectionTitle'

interface EmployeeCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: Employees
}

export function EmployeeCard({ data }: EmployeeCardProps) {
  const employeeName = `${data.name?.firstName} ${data.name?.lastName}`
  return (
    <div className="p-4 md:w-1/2 lg:w-1/4">
      <div className="flex h-full flex-col items-center text-center">
        <div className="mb-2 aspect-square h-56 w-auto overflow-hidden rounded-sm drop-shadow-lg">
          <SanityImage src={data.image} alt={employeeName} />
        </div>
        <div className="w-full">
          <h3 className="title-font mb-0 text-lg font-medium text-gray-800">
            {employeeName}
          </h3>
          <span className="mb-3 text-gray-600">{data.jobTitle}</span>
        </div>
      </div>
    </div>
  )
}

export interface EmployeeSectionProps extends EmployeeSectionSchema {
  data: GetEmployeesQueryResult
}

export default function EmployeesSection({
  data,
  ...props
}: EmployeeSectionProps) {
  if (!props.showEmployeeSection || data.length === 0) return null

  return (
    <section className="content-section">
      <div className="wrapper">
        <SectionTitle
          title="Våre ansatte"
          icon={<HiOutlineUserGroup />}
          iconAlign="left"
        />
        <div className="flex w-full flex-wrap justify-center">
          {data.map((item) => (
            <EmployeeCard key={item._id} data={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
