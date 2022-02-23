import Button from '@components/Button'
import Icon from '@components/Icon'
import { CogIcon } from '@heroicons/react/outline'
import classNames from 'classnames'

import SectionTitle from './utils/SectionTitle'

export function TeethIcon({ className }: { className?: string }) {
  return (
    <svg
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      className={classNames('flex-shrink-0 text-white', className)}
      viewBox="0 0 448 512"
    >
      <path d="M394.1 212.8c-20.04 27.67-28.07 60.15-31.18 93.95c-3.748 41.34-8.785 82.46-17.89 122.8l-6.75 29.64c-2.68 12.14-13.29 20.78-25.39 20.78c-12 0-22.39-8.311-25.29-20.23l-29.57-121.2C254.1 322.6 240.1 311.4 224 311.4c-16.18 0-30.21 11.26-34.07 27.23l-29.57 121.2c-2.893 11.92-13.39 20.23-25.29 20.23c-12.21 0-22.71-8.639-25.5-20.78l-6.643-29.64c-9.105-40.36-14.14-81.48-17.1-122.8C81.93 272.1 73.9 240.5 53.86 212.8c-18.75-25.92-27.11-60.15-18.43-96.57c9.428-39.59 40.39-71.75 78.85-82.03c20.14-5.25 39.54-.4375 57.32 9.077l86.14 56.54c6.643 4.375 15.11 1.86 18.96-4.264c4.07-6.454 2.25-15.09-4.18-19.36l-24.21-15.86c3-1.531 6.215-2.735 9-4.813c22.39-16.84 48.75-28.65 76.39-21.33c38.46 10.28 69.43 42.43 78.85 82.03C421.2 152.7 412.9 187 394.1 212.8z" />
    </svg>
  )
}

const treatments: string[] = [
  'Fyllinger',
  'Tannbleking',
  'Tannregulering',
  'Krone og bro',
  'Implantater',
  'Visdomstenner'
]

export function TreatmentCard({ text }: { text: string }) {
  return (
    <div className="w-full p-2 sm:w-1/2">
      <div className="group flex h-full cursor-pointer items-center rounded border border-gray-200 bg-gray-50 p-4 shadow-sm transition-all duration-500 hover:scale-105 hover:bg-primary-light dark:border-gray-700 dark:bg-gray-800">
        <Icon
          icon={<TeethIcon />}
          type="primary"
          size="small"
          className="mr-2 duration-500 group-hover:bg-white group-hover:text-primary-light"
        />
        <span className="title-font font-semibold text-gray-700 duration-500 group-hover:text-white dark:text-gray-300">
          {text}
        </span>
      </div>
    </div>
  )
}

export default function TreatmentsSection() {
  return (
    <section className="content-section text-gray-600 dark:bg-gray-900">
      <div className="wrapper">
        <SectionTitle
          title="Behandlinger"
          icon={<CogIcon />}
          iconAlign="right"
          small="Vi utfører både spesialist- og allmennbehandling!"
          textAlign="center"
        />
        <div className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5">
          {treatments.map((treatment) => (
            <TreatmentCard key={treatment} text={treatment} />
          ))}
        </div>
        <Button className="mx-auto mt-4 flex">Se alle behandlinger</Button>
      </div>
    </section>
  )
}
