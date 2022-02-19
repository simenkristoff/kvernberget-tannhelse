import client from '@lib/sanity'
import Nav from './Nav/Nav'
import Image from 'next/image'
import { useSettings } from 'context/SettingsContext'
import { useNextSanityImage } from 'next-sanity-image'
import classNames from 'classnames'
import { useWindow } from 'context/WindowContext'
import {
  LocationMarkerIcon,
  PhoneIcon,
  MailIcon
} from '@heroicons/react/outline'
import formatPhoneNumber from './utils/formatPhoneNumber'

export default function Header () {
  const settings = useSettings()
  const { fixed } = useWindow()

  return (
    <header
      className={classNames('w-full z-50 bg-white shadow-md', {
        relative: !fixed,
        'fixed top-0 left-0': fixed
      })}
    >
      <div className="bg-white">
        <div className="wrapper flex flex-wrap">
          <div className={classNames('flex-auto w-full max-w-[10rem] aspect-3/1 my-2 transition-all duration-200', {
            'md:max-w-[12rem] lg:max-w-[16rem]': !fixed
          })}>
            {settings.logo?.asset && (
              <Image
                src={useNextSanityImage(client, settings.logo)}
                alt={settings.logo?.alt || settings.siteTitle}
                layout="responsive"
                objectFit="contain"
                sizes="(max-width: 800px) 100vw, 800px"
              />
            )}
          </div>
          <div className={classNames('hidden', { 'md:flex flex-1 pl-7 flex-row w-full justify-end space-x-4 lg:space-x-14': !fixed })}>
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
                (+47) {formatPhoneNumber(settings.phone!)}
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

          <Nav fixed={fixed} className={classNames('flex flex-auto justify-end md:justify-start items-center', { 'border-t border-transparent md:border-gray-100': !fixed })}>
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
            <button className={classNames('btn btn-primary md:py-0', { 'h-full rounded-none self-stretch md:absolute md:right-0 md:bottom-0': !fixed, 'rounded-none md:rounded-md': fixed })}>
              Bestill time
            </button>
          </Nav>
        </div>
      </div>
    </header>
  )
}
