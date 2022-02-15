import {
  LocationMarkerIcon,
  PhoneIcon,
  MailIcon
} from '@heroicons/react/outline'

export default function Footer () {
  return (
    <footer>
      <div className="bg-cyan-700 border-t border-b border-gray-200 dark:border-gray-700 pt-16 text-white">
        <section className="mx-auto mb-4 container px-4 xl:px-12 2xl:px-4">
          <div className="w-full mb-16 lg:mb-0 lg:flex">
            {/* Address */}
            <div className="w-full lg:w-1/2 px-6">
              <h3 className="text-xl font-medium">Kontaktinformasjon:</h3>
              <a href="mailto:" className="flex items-center mt-2">
                <LocationMarkerIcon className="mr-2" height={24} width={24} />
                Rørgata 8, 6517 Kristiansund
              </a>
              <a href="mailto:" className="flex items-center mt-2">
                <PhoneIcon className="mr-2" height={24} width={24} />
                (+47) 71 67 00 00
              </a>
              <a href="mailto:" className="flex items-center mt-2">
                <MailIcon className="mr-2" height={24} width={24} />
                post@kvernbergettannhelse.no
              </a>
            </div>

            {/* Sitemap */}
            <div className="w-full lg:w-1/2 px-6">
              <h3 className="text-xl font-medium">Åpningstider:</h3>
              <ul>
                <li>Mandag: 08:00-16:00</li>
                <li>Tirsdag: 08:00-16:00</li>
                <li>Onsdag: 08:00-16:00</li>
                <li>Torsdag: 08:00-17:00</li>
                <li>Fredag: 08:00-15:00</li>
                <li>Lørdag: STENGT</li>
                <li>Søndag: STENGT</li>
              </ul>
            </div>

            {/* Contact information */}
            <div className="w-full lg:w-1/2 px-6"></div>
          </div>
        </section>
        <section className="mx-auto container px-4 xl:px-12 2xl:px-4 py-8 border-t border-gray-200 border-opacity-25 text-center text-sm">
            <p>&copy; 2022 Kvernberget Tannhelse AS. Alle rettigheter reservert.</p>
            <p>Utviklet av Simen Kristoffersen</p>
        </section>
      </div>
    </footer>
  )
}
