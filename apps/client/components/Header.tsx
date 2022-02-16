import { Fragment, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import {
  MailIcon,
  MenuIcon,
  PhoneIcon,
  XIcon
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useSettings } from 'context/SettingsContext'
import classnames from 'classnames'
import { urlFor } from '@lib/sanity'

const treatments = [
  {
    name: 'Bedøvelse hos tannlegen',
    href: '#'
  },
  {
    name: 'Hull i tennene',
    href: '#'
  },
  {
    name: 'Rotfylling',
    href: '#'
  },
  {
    name: 'Tannfylling',
    href: '#'
  },
  {
    name: 'Odontofobi',
    href: '#'
  }
]

function classNames (...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Header () {
  const [fixed, setFixed] = useState<Boolean>(false)
  const settings = useSettings()

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar)

    return () => {
      window.removeEventListener('scroll', stickNavbar)
    }
  }, [])

  const stickNavbar = () => {
    if (window !== undefined) {
      setFixed(window.scrollY > 200)
    }
  }

  return (
    <header className="z-50">
      <div className="hidden sm:block relative bg-sky-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
          <div className="flex space-x-4">
            <a href={`mailto: ${settings.email}`} className="flex items-center space-x-2">
              <MailIcon className="rounded-full h-7 w-7 p-1 bg-cyan-600 text-white" />
              <span className="text-gray-600 text-sm">
                Email: {settings.email}
              </span>
            </a>
            <a href={`tel: ${settings.phone}`} className="flex items-center space-x-2">
              <PhoneIcon className="rounded-full h-7 w-7 p-1 bg-cyan-600 text-white" />
              <span className="text-gray-600 text-sm">
                Tlf: (+47) {settings.phone}
              </span>
            </a>
          </div>
        </div>
      </div>
      <Popover className={classnames('bg-white border-b-2 border-slate-200 z-50', { relative: !fixed, 'fixed top-0 left-0 w-full': fixed })}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <Image
                  src={urlFor(settings.logo!).url() || ''}
                  alt={settings.logo?.alt || settings.siteTitle}
                  width={fixed ? 150 : 225}
                  height={fixed ? 56 : 85}
                />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Link href="/">
              <a
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Hjem
              </a>
              </Link>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600'
                      )}
                    >
                      <span>Behandlinger</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-50 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {treatments.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Priser
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Om oss
              </a>

              <Link href="/contact">
              <a
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Kontakt oss
              </a>
              </Link>
            </Popover.Group>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 z-20 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                  <Image
                  src={urlFor(settings.logo!).url() || ''}
                  alt={settings.logo?.alt || settings.siteTitle}
                  width={225}
                  height={85}
                />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                  <a
                        href="#"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          Behandlinger
                        </span>
                      </a>
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          Priser
                        </span>
                      </a>
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          Om oss
                        </span>
                      </a>
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          Kontakt oss
                        </span>
                      </a>
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  )
}
