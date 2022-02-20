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
  latestPost: GetLatestPostQueryResult;
  reviews: Review[];
  employees: GetEmployeesQueryResult;
}

export default function LandingPage ({ latestPost, reviews, employees }: LandingPageProps) {
  console.log(latestPost)
  return (
    <React.Fragment>
      <section className="relative py-16 flex h-full max-h-screen bg-gradient-to-b from-sky-100 via-gray-100">
        <div className="wrapper flex z-10 space-x-8">
          <div className="w-full items-center self-center text-center lg:w-1/2 lg:text-left">
            <h2 className="text-5xl font-bold text-gray-700 mb-8">
              Velkommen til <br />
              <span className="text-teal-700">Kvernberget Tannhelse</span>
            </h2>
            <p className="w-full max-w-lg md:w-full lg:max-w-full mx-auto text-lg text-gray-800 font-medium">
              Her jobber tannlegene Kleivmyr, Neuenkirchen, Caoile,
              Kristoffersen og Folland. Vi gir deg en trygg og forsvarlig
              tannbehandling etter dine behov og ønsker.
            </p>
            <div className="flex justify-center lg:justify-start space-x-2">
              <button className="btn btn-primary hover:-translate-y-1 mt-8">
                Bestill time
              </button>
            </div>
          </div>
          <div className="w-1/2 h-full aspect-4/3 hidden lg:flex flex-1">
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md shadow-gray-500">
              <Image src="/banner.jpg" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-2/5 h-full z-0">
          <Image
            className="animate-full-pulse"
            src="/abstract-left.png"
            layout="fill"
          />
        </div>
        <div className="absolute top-0 right-0 w-2/5 h-full z-0">
          <Image
            className="animate-full-pulse"
            src="/abstract-right.png"
            layout="fill"
          />
        </div>
      </section>

      <section className="relative py-16">
        <div className="wrapper">
          <article className="flex flex-col md:flex-row border max-w-4xl mx-auto border-gray-300 rounded-lg overflow-hidden shadow-md">
            <div className="md:h-[300px] lg:h-[400px]">
              <div className="relative w-full h-full aspect-square">
                <Image
                  src={useNextSanityImage(client, latestPost.mainImage!)}
                  alt={latestPost.title}
                  layout="fill"
                  objectFit="cover"
                  sizes="(max-width: 800px) 100vw, 800px"
                />
              </div>
            </div>
            <div className="relative py-8 px-4 my-auto">
              <div className="flex flex-col flex-grow h-full">
                <h3 className="text-gray-700 text-2xl font-medium">
                  {latestPost.title}
                </h3>
                <PortableText blocks={latestPost.excerpt} />
                <p className='font-bold text-teal-700 hover:text-teal-600 duration-300'>Les mer...</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="relative py-16 flex h-full w-full">
        <div className="wrapper">
          <div className="flex flex-col justify-center mb-4">
            <div className="block mx-auto">
              <h2 className="section-title text-center mb-2">Behandlinger</h2>
            </div>
            <p className="font-medium text-gray-800 text-center">
              Vi utfører både spesialist- og allmennbehandling!
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {treatments.map((item) => (
              <div
                key={item}
                className="flex flex-col items-center bg-white justify-center px-6 py-4 border-2 border-gray-200 rounded-md shadow-md group hover:bg-teal-600 hover:scale-110 cursor-pointer transition-all duration-500"
              >
                <p className="text-sm font-bold group-hover:text-white duration-500">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <button className="btn btn-primary block mx-auto">
            Se alle behandlinger
          </button>
        </div>
      </section>

      <section className="relative w-full h-full py-16 bg-gradient-to-b from-sky-50 via-gray-50 to-gray-100">
        <div className="wrapper px-0 relative flex flex-1 w-full min-h-[10rem] justify-center items-center">
          <div className="relative hidden md:flex w-1/3 h-full aspect-square">
            <Image
              className="block"
              src="/reviews.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="block w-full max-w-sm sm:max-w-md py-8 lg:py-0">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {employees.length > 0 &&
              employees.map((emp) => <EmployeeCard key={emp._id} data={emp} />)}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
