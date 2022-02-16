import {
  LocationMarkerIcon,
  PhoneIcon,
  MailIcon
} from '@heroicons/react/outline'

import { useSettings } from 'context/SettingsContext'

export default function Footer () {
  const settings = useSettings()
  return (
    <footer>
      <div className="bg-sky-800 border-t border-b border-gray-200 dark:border-gray-700 pt-16 text-white">
        <section className="mx-auto mb-4 container px-4 xl:px-12 2xl:px-4">
          <div className="w-full mb-16 lg:mb-0 lg:flex">

          {/* Address */}
          <div className="w-full lg:w-1/2 px-6">
              <h3 className="text-xl font-medium">Kontaktinformasjon:</h3>
              <div className="ml-7 mt-2">
                <a
                  href="#"
                  className="relative group hover:translate-x-2 duration-300 my-2 block"
                >
                  <LocationMarkerIcon
                    className="absolute -left-7 top-0 group-hover:text-slate-200 duration-300"
                    height={24}
                    width={24}
                  />
                  <p className="font-medium group-hover:text-slate-200 duration-300">
                    Addresse:
                  </p>
                  <p className="mt-1 text-slate-200 group-hover:text-slate-200">
                    {settings.address}
                  </p>
                </a>

                <a
                  href={`tel: ${settings.phone}`}
                  className="relative group hover:translate-x-2 duration-300 my-2 block"
                >
                  <PhoneIcon
                    className="absolute -left-7 top-0 group-hover:text-slate-200 duration-300"
                    height={24}
                    width={24}
                  />
                  <p className="font-medium group-hover:text-slate-200 duration-300">
                    Telefon:
                  </p>
                  <p className="mt-1 text-slate-200 group-hover:text-slate-200">
                    (+47) {settings.phone}
                  </p>
                </a>

                <a
                  href={`mailto: ${settings.email}`}
                  className="relative group hover:translate-x-2 duration-300 my-2 block"
                >
                  <MailIcon
                    className="absolute -left-7 top-0 group-hover:text-slate-200 duration-300"
                    height={24}
                    width={24}
                  />
                  <p className="font-medium group-hover:text-slate-200 duration-300">
                    Email:
                  </p>
                  <p className="mt-1 text-slate-200 group-hover:text-slate-200">
                    {settings.email}
                  </p>
                </a>
              </div>
            </div>

            <div className="w-full lg:w-1/2 px-6">

          </div>

          <div className="w-full lg:w-1/2 px-6">
              <h3 className="text-xl font-medium">Åpningstider:</h3>
              <ul>
                {settings.openingHours &&
                  settings.openingHours.map((item) => {
                    const state = item.closed ? 'Stengt' : `${item.opensAt}-${item.closesAt}`
                    return (
                      <li key={item._key}>
                        {item.day}:{' '}
                        <span className="font-medium text-slate-200">{state}</span>
                      </li>
                    )
                  })}
              </ul>
            </div>

          </div>
        </section>
        <section className="mx-auto container px-4 xl:px-12 2xl:px-4 py-8 border-t border-gray-200 border-opacity-25 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Kvernberget Tannhelse AS. Alle
            rettigheter reservert.
          </p>
          <p className='mt-1'>Utviklet av Simen Kristoffersen</p>
        </section>
      </div>
    </footer>
  )
}
