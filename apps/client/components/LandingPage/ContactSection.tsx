import { Popover, Transition } from '@headlessui/react'
import { HiOutlineMap, HiOutlineMenu } from 'react-icons/hi'
import {
  ContactSection as ContactSectionSchema,
  SiteSettings
} from '@lib/schema'
import classNames from 'classnames'
import { useWindow } from 'context/WindowContext'
import { Fragment, useEffect, useState } from 'react'

import SectionTitle from './utils/SectionTitle'

interface ContactSectionProps extends ContactSectionSchema {
  data: SiteSettings
}

export default function ContactSection({
  data,
  ...props
}: ContactSectionProps) {
  if (!props.showContactSection) return null

  const [toggle, setToggle] = useState<boolean>(false)
  const { isMobile } = useWindow()

  useEffect(() => {
    setToggle(!isMobile)
  }, [])

  useEffect(() => {
    setToggle(!isMobile)
  }, [isMobile])

  return (
    <section className="content-section relative h-[550px] text-gray-600">
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
      <div className="wrapper mx-auto flex h-full w-full px-5">
        <Popover className="flex h-full w-full justify-end">
          <Popover.Button
            className={classNames(
              'group absolute -right-1 top-4 -translate-x-1/2 border border-gray-200 bg-gray-100 shadow-md'
            )}
          >
            <HiOutlineMenu
              className="h-10 w-10 text-gray-500 duration-300 group-hover:text-gray-600"
              aria-hidden="true"
              onClick={() => setToggle(!toggle)}
            />
          </Popover.Button>
          {toggle && (
            <Transition
              as={Fragment}
              appear={true}
              show={toggle}
              enter="transition fade-in duration-300"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition fade-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="relative z-10 mt-10 flex w-full max-w-sm flex-col rounded-lg bg-white p-8 shadow-md dark:bg-gray-900 md:ml-auto md:mt-0 md:w-1/2 md:max-w-lg lg:w-1/3 lg:max-w-xl">
                <div className="my-auto flex flex-col">
                  <SectionTitle
                    title="Lokasjon"
                    className="items-start"
                    centerOnMobile={false}
                    margin={false}
                    icon={<HiOutlineMap />}
                    iconAlign="right"
                    bordered={false}
                    textAlign="left"
                  />
                  <p className="mb-5 leading-relaxed text-gray-700 dark:text-gray-200">
                    Du finner klinikken våres ved
                    <br />
                    <span className="font-semibold">{data.address}</span>
                  </p>

                  {data.openingHours && (
                    <Fragment>
                      <h3 className="text-xl font-bold">Åpningstider</h3>
                      <div className="relative mb-4">
                        <ul>
                          {data.openingHours.map((item) => {
                            const state = item.closed
                              ? 'Stengt'
                              : `${item.opensAt}-${item.closesAt}`
                            return (
                              <li key={item._key}>
                                <span className="font-semibold">
                                  {item.day}
                                </span>
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
              </Popover.Panel>
            </Transition>
          )}
        </Popover>
        {/* <div className="relative z-10 mt-10 flex w-full flex-col rounded-lg bg-white p-8 shadow-md md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3">
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
        </div> */}
      </div>
    </section>
  )
}
