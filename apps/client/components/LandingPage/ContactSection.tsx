import { MapIcon } from '@heroicons/react/outline'
import { SiteSettings } from '@lib/schema'
import { Fragment } from 'react'

import SectionTitle from './utils/SectionTitle'

interface ContactSectionProps {
  data: SiteSettings
}

export default function ContactSection({ data }: ContactSectionProps) {
  return (
    <section className="content-section relative text-gray-600">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1804.4585281452455!2d7.795477316300185!3d63.110849009282035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4613c5ba3c32a65d%3A0xccf62ef77e80dfb!2sKvernberget%20Tannhelse%20AS!5e0!3m2!1sen!2sno!4v1645493787476!5m2!1sen!2sno"
          style={{ filter: 'grayscale(0.25) contrast(1) opacity(0.75)' }}
        ></iframe>
      </div>
      <div className="container mx-auto flex px-5 py-24">
        <div className="relative z-10 mt-10 flex w-full flex-col rounded-lg bg-white p-8 shadow-md md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3">
          <SectionTitle
            title="Lokale"
            icon={<MapIcon />}
            iconAlign="right"
            className="-mb-0"
            bordered={false}
            textAlign="left"
          />
          <p className="mb-5 leading-relaxed text-gray-700">
            Du finner klinikken våres ved
            <br />
            <span className="font-semibold">{data.address}</span>
          </p>
          {data.openingHours && (
            <Fragment>
              <h3 className="text-xl font-bold text-gray-800">Åpningstider</h3>
              <div className="relative mb-4">
                <ul>
                  {data.openingHours.map((item) => {
                    const state = item.closed
                      ? 'Stengt'
                      : `${item.opensAt}-${item.closesAt}`
                    return (
                      <li key={item._key}>
                        <span className="font-semibold">{item.day}</span>
                        :&nbsp;
                        <span className="font-medium">{state}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </section>
  )
}
