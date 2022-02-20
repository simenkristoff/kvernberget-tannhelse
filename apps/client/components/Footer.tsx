import {
  LocationMarkerIcon,
  PhoneIcon,
  MailIcon
} from '@heroicons/react/outline'
import Image from 'next/image'
import client from '@lib/sanity'
import { useNextSanityImage } from 'next-sanity-image'
import { SiteSettings } from '@lib/schema'

import formatPhoneNumber from '../utils/formatPhoneNumber'

interface FooterProps {
  settings: SiteSettings
}

export default function Footer({ settings }: FooterProps) {
  return (
    <footer className="">
      <div className="border-t border-gray-300 pt-16 text-gray-800">
        <section className="wrapper">
          <div className="mb-0 w-full flex-wrap sm:mb-16 md:flex">
            <div className="mb-6 w-full border-b border-gray-200 border-opacity-25 pb-6 text-left last:border-none md:border-none lg:mb-0 lg:w-1/3 lg:px-6 lg:pb-0">
              {settings.logo?.image && (
                <div className="relative h-20 pb-2 lg:mb-0">
                  <div className="mx-auto aspect-3/1 h-full lg:mx-0">
                    {settings.logo && (
                      <Image
                        src={
                          settings.logo.image
                            ? useNextSanityImage(client, settings.logo.image)
                            : ''
                        }
                        alt={settings.logo.alt || settings.siteTitle}
                        layout="responsive"
                        objectFit="contain"
                        sizes="(max-width: 800px) 100vw, 800px"
                      />
                    )}
                  </div>
                </div>
              )}
              <p
                className="m-0 max-w-xl sm:mx-auto"
                dangerouslySetInnerHTML={{
                  __html: settings.siteDescription || ''
                }}
              />
            </div>

            {/* Address */}
            <div className="mb-6 w-full border-b border-gray-200 border-opacity-25 pb-6 last:border-none md:w-1/2 md:border-none lg:mb-0 lg:w-1/3 lg:px-6 lg:pb-0">
              <h3 className="text-xl font-medium">Kontaktinformasjon:</h3>
              <div className="ml-7 mt-2">
                <span className="group relative my-2 block duration-300 hover:translate-x-2">
                  <LocationMarkerIcon
                    className="absolute -left-7 top-0 text-teal-600 duration-300 group-hover:text-teal-700"
                    height={24}
                    width={24}
                  />
                  <p className="font-bold text-teal-600 duration-300 group-hover:text-teal-700">
                    Addresse:
                  </p>
                  <p className="mt-1 group-hover:text-slate-700">
                    {settings.address}
                  </p>
                </span>

                <a
                  href={`tel: ${settings.phone}`}
                  className="group relative my-2 block duration-300 hover:translate-x-2"
                >
                  <PhoneIcon
                    className="absolute -left-7 top-0 text-teal-600 duration-300 group-hover:text-teal-700"
                    height={24}
                    width={24}
                  />
                  <p className="font-bold text-teal-600 duration-300 group-hover:text-teal-700">
                    Telefon:
                  </p>
                  <p className="mt-1 group-hover:text-slate-700">
                    (+47) {formatPhoneNumber(settings.phone)}
                  </p>
                </a>

                <a
                  href={`mailto: ${settings.email}`}
                  className="group relative my-2 block duration-300 hover:translate-x-2"
                >
                  <MailIcon
                    className="absolute -left-7 top-0 text-teal-600 duration-300 group-hover:text-teal-700"
                    height={24}
                    width={24}
                  />
                  <p className="font-bold text-teal-600 duration-300 group-hover:text-teal-700">
                    Email:
                  </p>
                  <p className="mt-1 group-hover:text-slate-700">
                    {settings.email}
                  </p>
                </a>
              </div>
            </div>

            <div className="mb-6 w-full border-b border-gray-200 border-opacity-25 pb-6 last:border-none md:w-1/2 md:border-none lg:mb-0 lg:w-1/3 lg:px-6 lg:pb-0">
              <h3 className="text-xl font-medium">Åpningstider:</h3>
              <ul>
                {settings.openingHours &&
                  settings.openingHours.map((item) => {
                    const state = item.closed
                      ? 'Stengt'
                      : `${item.opensAt}-${item.closesAt}`
                    return (
                      <li key={item._key}>
                        <span className="font-medium">{item.day}</span>:&nbsp;
                        <span className="font-semibold text-teal-600">
                          {state}
                        </span>
                      </li>
                    )
                  })}
              </ul>
            </div>
          </div>
        </section>
        <section className="wrapper flex-col border-t border-gray-300 py-2 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()}&nbsp;
            <span className="font-medium text-teal-600">
              Kvernberget Tannhelse AS
            </span>
            . Alle rettigheter reservert.
          </p>
          <p className="mt-1">Utviklet av Simen Kristoffersen</p>
        </section>
      </div>
    </footer>
  )
}
