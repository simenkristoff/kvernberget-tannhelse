import SanityImage from '@components/Image'
import { UserGroupIcon } from '@heroicons/react/outline'
import { GetEmployeesQueryResult } from '@lib/queries/getEmployees'
import { Employees } from '@lib/schema'
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
          <h2 className="title-font text-lg font-medium text-gray-900">
            {employeeName}
          </h2>
          <h3 className="mb-3 text-gray-500">{data.jobTitle}</h3>
        </div>
      </div>
    </div>
  )
}

export interface EmployeeSectionProps {
  data: GetEmployeesQueryResult
}

export default function EmployeesSection({ data }: EmployeeSectionProps) {
  return (
    <section className="content-section">
      <div className="wrapper">
        <SectionTitle
          title="Våre ansatte"
          icon={<UserGroupIcon />}
          iconAlign="left"
        />
        <div className="-m-4 flex w-full flex-wrap justify-center">
          {data.map((item) => (
            <EmployeeCard key={item._id} data={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
