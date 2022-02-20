import {
  LocationMarkerIcon,
  PhoneIcon,
  MailIcon
} from '@heroicons/react/outline'
import Image from 'next/image'
import client from '@lib/sanity'
import { useNextSanityImage } from 'next-sanity-image'
import { SiteSettings } from '@lib/schema'

import formatPhoneNumber from './utils/formatPhoneNumber'

interface FooterProps {
  settings: SiteSettings
}

export default function Footer({ settings }: FooterProps) {
  return (
    <footer className="">
      <div className="border-t border-gray-300 pt-16 text-gray-800">
        <section className="wrapper">
          <div className="w-full flex-wrap mb-0 sm:mb-16 md:flex">
            <div className="w-full lg:w-1/3 lg:px-6 pb-6 mb-6 lg:pb-0 lg:mb-0 border-b border-gray-200 border-opacity-25 text-left md:border-none last:border-none">
              {settings.logo?.image && (
                <div className="h-20 relative pb-2 lg:mb-0">
                  <div className="h-full aspect-3/1 mx-auto lg:mx-0">
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
                className="max-w-xl sm:mx-auto m-0"
                dangerouslySetInnerHTML={{
                  __html: settings.siteDescription || ''
                }}
              />
            </div>

            {/* Address */}
            <div className="w-full md:w-1/2 lg:w-1/3 lg:px-6 pb-6 mb-6 lg:pb-0 lg:mb-0 border-b border-gray-200 border-opacity-25 md:border-none last:border-none">
              <h3 className="text-xl font-medium">Kontaktinformasjon:</h3>
              <div className="ml-7 mt-2">
                <a
                  href="#"
                  className="relative group hover:translate-x-2 duration-300 my-2 block"
                >
                  <LocationMarkerIcon
                    className="absolute -left-7 top-0 text-teal-600 group-hover:text-teal-700 duration-300"
                    height={24}
                    width={24}
                  />
                  <p className="font-bold text-teal-600 group-hover:text-teal-700 duration-300">
                    Addresse:
                  </p>
                  <p className="mt-1 group-hover:text-slate-700">
                    {settings.address}
                  </p>
                </a>

                <a
                  href={`tel: ${settings.phone}`}
                  className="relative group hover:translate-x-2 duration-300 my-2 block"
                >
                  <PhoneIcon
                    className="absolute -left-7 top-0 text-teal-600 group-hover:text-teal-700 duration-300"
                    height={24}
                    width={24}
                  />
                  <p className="font-bold text-teal-600 group-hover:text-teal-700 duration-300">
                    Telefon:
                  </p>
                  <p className="mt-1 group-hover:text-slate-700">
                    (+47) {formatPhoneNumber(settings.phone)}
                  </p>
                </a>

                <a
                  href={`mailto: ${settings.email}`}
                  className="relative group hover:translate-x-2 duration-300 my-2 block"
                >
                  <MailIcon
                    className="absolute -left-7 top-0 text-teal-600 group-hover:text-teal-700 duration-300"
                    height={24}
                    width={24}
                  />
                  <p className="font-bold text-teal-600 group-hover:text-teal-700 duration-300">
                    Email:
                  </p>
                  <p className="mt-1 group-hover:text-slate-700">
                    {settings.email}
                  </p>
                </a>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 lg:px-6 pb-6 mb-6 lg:pb-0 lg:mb-0 border-b border-gray-200 border-opacity-25 md:border-none last:border-none">
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
        <section className="wrapper flex-col py-2 border-t border-gray-300 text-center text-sm">
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
