import client from '@lib/sanity'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import classNames from 'classnames'
import { useWindow } from 'context/WindowContext'
import {
  LocationMarkerIcon,
  PhoneIcon,
  MailIcon
} from '@heroicons/react/outline'
import { SiteSettings } from '@lib/schema'

import formatPhoneNumber from '../utils/formatPhoneNumber'

import Nav from './Nav/Nav'

interface HeaderProps {
  settings: SiteSettings
}

export default function Header({ settings }: HeaderProps) {
  const { fixed } = useWindow()

  return (
    <header
      className={classNames('z-50 w-full bg-white shadow-md', {
        relative: !fixed,
        'fixed top-0 left-0': fixed
      })}
    >
      <div className="bg-white">
        <div className="wrapper flex flex-wrap">
          <div
            className={classNames(
              'my-2 aspect-3/1 w-full max-w-[10rem] flex-auto transition-all duration-200',
              {
                'md:max-w-[12rem] lg:max-w-[16rem]': !fixed
              }
            )}
          >
            {settings.logo?.image && (
              <Image
                src={useNextSanityImage(client, settings.logo.image)}
                alt={settings.logo?.alt || settings.siteTitle}
                layout="responsive"
                objectFit="contain"
                sizes="(max-width: 800px) 100vw, 800px"
              />
            )}
          </div>
          <div
            className={classNames('hidden', {
              'w-full flex-1 flex-row justify-end space-x-4 pl-7 md:flex lg:space-x-14':
                !fixed
            })}
          >
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

          <Nav
            fixed={fixed}
            className={classNames(
              'flex flex-auto items-center justify-end md:justify-start',
              { 'border-t border-transparent md:border-gray-100': !fixed }
            )}
          >
            <Nav.NavItem to="/">Hjem</Nav.NavItem>
            <Nav.NavDropdown label="Behandlinger">
              <Nav.NavItem to="/fyllinger">Fyllinger</Nav.NavItem>
              <Nav.NavItem to="/tannbleking">Tannbleking</Nav.NavItem>
              <Nav.NavItem to="/tannregulering">Tannregulering</Nav.NavItem>
              <Nav.NavItem to="/krone-og-bro">Krone og bro</Nav.NavItem>
              <Nav.NavItem to="/implantater">Implantater</Nav.NavItem>
              <Nav.NavItem to="/visdomstenner">Visdomstenner</Nav.NavItem>
            </Nav.NavDropdown>
            <Nav.NavItem to="/priser">Priser</Nav.NavItem>
            <Nav.NavItem to="/om-oss">Om oss</Nav.NavItem>
            <Nav.NavItem to="/kontakt-oss">Kontakt oss</Nav.NavItem>
            <button
              className={classNames('btn btn-primary md:py-0', {
                'h-full self-stretch rounded-none md:absolute md:right-0 md:bottom-0':
                  !fixed,
                'rounded-none md:rounded-md': fixed
              })}
            >
              Bestill time
            </button>
          </Nav>
        </div>
      </div>
    </header>
  )
}
