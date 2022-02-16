import { GetEmployeesQueryResult } from '@lib/queries/getEmployees'

import Image from 'next/image'
import React from 'react'
import EmployeeCard from './EmployeeCard'

interface IProps {
  employees: GetEmployeesQueryResult
}

export default function Frontpage ({ employees }: IProps) {
  return (
    <React.Fragment>
      <section className="relative h-full lg:min-h-screen py-16 flex bg-sky-100 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center z-10 space-x-8 2xl:-mt-16">
          <div className="w-full text-center lg:w-1/2 lg:text-left">
            <h2 className="text-5xl font-bold text-slate-700 mb-8">
              Velkommen til <br />
              <span className="text-cyan-900">Kvernberget Tannhelse</span>
            </h2>
            <p className="w-5/6 md:w-full mx-auto text-lg text-slate-700 font-medium">
              Her jobber tannlegene Kleivmyr, Neuenkirchen, Caoile,
              Kristoffersen og Folland. Vi gir deg en trygg og forsvarlig
              tannbehandling etter dine behov og ønsker.
            </p>

            <a
              href="#"
              className="mt-8 whitespace-nowrap inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-cyan-600 hover:bg-cyan-700"
            >
              Bestill time
            </a>
          </div>
          <div className="relative w-1/2 aspect-[4/3] drop-shadow-xl m-16 hidden lg:block">
            <Image className="rounded-2xl" src="/banner.jpg" layout="fill" />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-1/3 h-full z-0">
          <Image
            className="animate-full-pulse"
            src="/abstract-left.png"
            layout="fill"
          />
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full z-0">
          <Image
            className="animate-full-pulse"
            src="/abstract-right.png"
            layout="fill"
          />
        </div>
      </section>
      {/* Employees */}
      <section className="relative mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl mb-8 text-center font-medium text-slate-700">
            Våre ansatte
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {employees.length > 0 &&
              employees.map((emp) => <EmployeeCard key={emp._id} data={emp}/>)}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
