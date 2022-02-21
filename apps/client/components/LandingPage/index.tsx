import { GetEmployeesQueryResult } from '@lib/queries/getEmployees'
import { Frontpage } from '@lib/queries/getLandingPage'
import { GetLatestPostQueryResult } from '@lib/queries/getLatestPost'
import { Review } from '@lib/queries/getReviews'
import { PortableText } from '@lib/sanity'
import React from 'react'

import EmployeeCard from '../EmployeeCard'
import SanityImage from '../Image'

import HeroSection from './HeroSection'
import ReviewsSection from './ReviewsSection'

const treatments: string[] = [
  'Fyllinger',
  'Tannbleking',
  'Tannregulering',
  'Krone og bro',
  'Implantater',
  'Visdomstenner'
]

export interface LandingPageProps {
  frontpage: Frontpage
  latestPost: GetLatestPostQueryResult
  reviews: Review[]
  employees: GetEmployeesQueryResult
}

export default function LandingPage({
  frontpage,
  latestPost,
  reviews,
  employees
}: LandingPageProps) {
  return (
    <React.Fragment>
      {frontpage.introSection && (
        <HeroSection introSection={frontpage.introSection} />
      )}

      <section className="relative py-16">
        <div className="wrapper">
          <article className="mx-auto flex max-w-4xl flex-col overflow-hidden rounded-lg border border-gray-300 shadow-md md:flex-row">
            <div className="w-full">
              <SanityImage
                src={latestPost.mainImage?.asset}
                alt={latestPost.title}
              />
            </div>
            <div className="relative my-auto py-8 px-4">
              <div className="flex h-full flex-grow flex-col">
                <h3 className="text-2xl font-medium text-gray-700">
                  {latestPost.title}
                </h3>
                <PortableText blocks={latestPost.excerpt} />
                <p className="font-bold text-teal-700 duration-300 hover:text-teal-600">
                  Les mer...
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="relative flex h-full w-full py-16">
        <div className="wrapper">
          <div className="mb-4 flex flex-col justify-center">
            <div className="mx-auto block">
              <h2 className="section-title mb-2 text-center">Behandlinger</h2>
            </div>
            <p className="text-center font-medium text-gray-800">
              Vi utfører både spesialist- og allmennbehandling!
            </p>
          </div>
          <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {treatments.map((item) => (
              <div
                key={item}
                className="group flex cursor-pointer flex-col items-center justify-center rounded-md border-2 border-gray-200 bg-white px-6 py-4 shadow-md transition-all duration-500 hover:scale-110 hover:bg-teal-600"
              >
                <p className="text-sm font-bold duration-500 group-hover:text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <button className="btn btn-primary mx-auto block">
            Se alle behandlinger
          </button>
        </div>
      </section>

      <ReviewsSection data={reviews} />

      {/* Employees */}
      <section className="relative py-16">
        <div className="wrapper">
          <div className="flex justify-center">
            <h2 className="section-title text-center">Våre ansatte</h2>
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {employees.length > 0 &&
              employees.map((emp) => <EmployeeCard key={emp._id} data={emp} />)}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
