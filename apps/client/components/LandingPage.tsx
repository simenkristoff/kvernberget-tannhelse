import { GetEmployeesQueryResult } from '@lib/queries/getEmployees'
import { GetLatestPostQueryResult } from '@lib/queries/getLatestPost'
import { Review } from '@lib/queries/getReviews'
import client, { PortableText } from '@lib/sanity'
import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'
import React from 'react'

import EmployeeCard from './EmployeeCard'
import ReviewSlider from './ReviewSlider'

const treatments: string[] = [
  'Fyllinger',
  'Tannbleking',
  'Tannregulering',
  'Krone og bro',
  'Implantater',
  'Visdomstenner'
]

export interface LandingPageProps {
  latestPost: GetLatestPostQueryResult
  reviews: Review[]
  employees: GetEmployeesQueryResult
}

export default function LandingPage({
  latestPost,
  reviews,
  employees
}: LandingPageProps) {
  return (
    <React.Fragment>
      <section className="relative flex h-full max-h-screen bg-gradient-to-b from-sky-100 via-gray-100 py-16">
        <div className="wrapper z-10 flex space-x-8">
          <div className="w-full items-center self-center text-center lg:w-1/2 lg:text-left">
            <h2 className="mb-8 text-5xl font-bold text-gray-700">
              Velkommen til <br />
              <span className="text-teal-700">Kvernberget Tannhelse</span>
            </h2>
            <p className="mx-auto w-full max-w-lg text-lg font-medium text-gray-800 md:w-full lg:max-w-full">
              Her jobber tannlegene Kleivmyr, Neuenkirchen, Caoile,
              Kristoffersen og Folland. Vi gir deg en trygg og forsvarlig
              tannbehandling etter dine behov og ønsker.
            </p>
            <div className="flex justify-center space-x-2 lg:justify-start">
              <button className="btn btn-primary mt-8 hover:-translate-y-1">
                Bestill time
              </button>
            </div>
          </div>
          <div className="hidden aspect-4/3 h-full w-1/2 flex-1 lg:flex">
            <div className="relative h-full w-full overflow-hidden rounded-xl shadow-md shadow-gray-500">
              <Image src="/banner.jpg" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 z-0 h-full w-2/5">
          <Image
            className="animate-full-pulse"
            src="/abstract-left.png"
            layout="fill"
          />
        </div>
        <div className="absolute top-0 right-0 z-0 h-full w-2/5">
          <Image
            className="animate-full-pulse"
            src="/abstract-right.png"
            layout="fill"
          />
        </div>
      </section>

      <section className="relative py-16">
        <div className="wrapper">
          <article className="mx-auto flex max-w-4xl flex-col overflow-hidden rounded-lg border border-gray-300 shadow-md md:flex-row">
            <div className="md:h-[300px] lg:h-[400px]">
              <div className="relative aspect-square h-full w-full">
                {latestPost.mainImage && (
                  <Image
                    src={
                      latestPost.mainImage.asset
                        ? useNextSanityImage(client, latestPost.mainImage.asset)
                        : ''
                    }
                    alt={latestPost.title}
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 800px) 100vw, 800px"
                  />
                )}
              </div>
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

      <section className="relative h-full w-full bg-gradient-to-b from-sky-50 via-gray-50 to-gray-100 py-16">
        <div className="wrapper relative flex min-h-[10rem] w-full flex-1 items-center justify-center px-0">
          <div className="relative hidden aspect-square h-full w-1/3 md:flex">
            <Image
              className="block"
              src="/reviews.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="block w-full max-w-sm py-8 sm:max-w-md lg:py-0">
            <h2 className="section-title text-center md:text-left">
              Våre omtaler
            </h2>
            <ReviewSlider className="ml-auto" reviews={reviews} />
          </div>
        </div>
      </section>
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
