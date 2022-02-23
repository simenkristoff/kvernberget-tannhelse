import {
  LocationMarkerIcon,
  PhoneIcon,
  MailIcon
} from '@heroicons/react/outline'
import { SiteSettings } from '@lib/schema'

import formatPhoneNumber from '../utils/formatPhoneNumber'

import IconLabel from './IconLabel'

interface FooterProps {
  settings: SiteSettings
}

export default function Footer({ settings }: FooterProps) {
  return (
    <footer className="wrapper-full relative mt-16 bg-primary-base">
      <svg
        className="absolute top-0 -mt-5 h-6 w-full text-primary-base  sm:-mt-10 sm:h-16"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="border-t border-gray-300 pt-16 text-gray-100">
        <section className="wrapper">
          <div className="mb-0 w-full flex-wrap sm:mb-16 md:flex">
            <div className="mb-6 w-full border-b border-gray-200 border-opacity-25 pb-6 text-left last:border-none md:border-none lg:mb-0 lg:w-1/3 lg:px-6 lg:pb-0">
              <h3 className="mb-2 text-center text-xl font-bold tracking-wide text-gray-100 lg:text-left">
                {settings.siteTitle}
              </h3>
              <p
                className="m-0 max-w-xl text-gray-100 sm:mx-auto"
                dangerouslySetInnerHTML={{
                  __html: settings.siteDescription || ''
                }}
              />
            </div>

            {/* Address */}
            <div className="mb-6 w-full border-b border-gray-200 border-opacity-25 pb-6 last:border-none md:w-1/2 md:border-none lg:mb-0 lg:w-1/3 lg:px-6 lg:pb-0">
              <h3 className="mb-2 text-xl font-bold tracking-wide text-gray-100">
                Kontaktinformasjon:
              </h3>
              <div className="ml-7 mt-2">
                <IconLabel
                  icon={<LocationMarkerIcon />}
                  mode="dark"
                  href="#"
                  text="Addresse"
                  small={settings.address}
                />
                <IconLabel
                  icon={<PhoneIcon />}
                  mode="dark"
                  href={`tel: ${settings.phone}`}
                  text="Telefon"
                  small={`(+47) ${formatPhoneNumber(settings.phone)}`}
                />
                <IconLabel
                  icon={<MailIcon />}
                  mode="dark"
                  href={`mailto: ${settings.email}`}
                  text="Email"
                  small={settings.email}
                />
              </div>
            </div>

            <div className="mb-6 w-full border-b border-gray-200 border-opacity-25 pb-6 last:border-none md:w-1/2 md:border-none lg:mb-0 lg:w-1/3 lg:px-6 lg:pb-0">
              <h3 className="mb-2 text-xl font-bold tracking-wide text-gray-100">
                Åpningstider:
              </h3>
              <ul>
                {settings.openingHours &&
                  settings.openingHours.map((item) => {
                    const state = item.closed
                      ? 'Stengt'
                      : `${item.opensAt}-${item.closesAt}`
                    return (
                      <li key={item._key} className="">
                        <span className="font-semibold text-gray-100">
                          {item.day}
                        </span>
                        :&nbsp;
                        <span className="font-medium text-gray-100">
                          {state}
                        </span>
                      </li>
                    )
                  })}
              </ul>
            </div>
          </div>
        </section>
        <section className="wrapper flex-col border-t border-gray-100 border-opacity-25 py-2 text-center text-sm ">
          <p className="text-gray-100">
            &copy; {new Date().getFullYear()}&nbsp;
            <span className="font-bold text-gray-100">
              Kvernberget Tannhelse AS
            </span>
            . Alle rettigheter reservert.
          </p>
          <p className="mt-1 text-gray-100">Utviklet av Simen Kristoffersen</p>
        </section>
      </div>
    </footer>
  )
}
