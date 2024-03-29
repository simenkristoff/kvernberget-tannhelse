import Button from '@components/Button'
import Icon from '@components/Icon'
import {
  IntroSection as IntroSectionSchema,
  Service as ServiceSchema
} from '@lib/schema'
import classNames from 'classnames'

function ServiceCard({ title, description, icon }: ServiceSchema) {
  return (
    <div className="inline-block p-8 text-center dark:border dark:border-gray-700 dark:bg-gray-800">
      <Icon icon={icon.name} className="mx-auto mb-4" />
      <p className="font-bold tracking-wide text-gray-800 dark:text-gray-200">
        {title}
      </p>
      <small>{description}</small>
    </div>
  )
}

export type IntroSectionProps = IntroSectionSchema

export default function IntroSection(props: IntroSectionProps) {
  const { introText, services } = props
  return (
    <div className={classNames({ 'mb-16': services })}>
      <div className="bg-secondary-50 dark:bg-gray-900">
        <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
          <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
            <h1 className="relative mb-4">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 -mt-8 -ml-20 hidden w-32 text-gray-300 dark:text-gray-800 sm:block lg:-ml-28 lg:-mt-10 lg:w-32"
              >
                <defs>
                  <pattern
                    id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                  width="52"
                  height="24"
                />
              </svg>
              Velkommen til
              <br />
              <span className="tracking-tighter text-primary-base dark:text-primary-accent">
                Kvernberget Tannhelse
              </span>
            </h1>
            <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg">
              {introText}
            </p>
          </div>
          <div className="flex items-center space-x-5 sm:justify-center">
            <Button>Bestill time</Button>
            <Button type="secondary">Les mer</Button>
          </div>
        </div>
      </div>
      {services && (
        <div className="relative px-4 dark:bg-gray-900 sm:px-0">
          <div className="absolute inset-0 h-1/2 bg-secondary-50 dark:bg-gray-900" />
          <div className="relative mx-auto grid overflow-hidden rounded bg-white shadow dark:divide-dark-700 dark:bg-gray-900 sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
