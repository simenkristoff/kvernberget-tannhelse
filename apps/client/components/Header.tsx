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
import IconLabel from './IconLabel'
import SanityImage from './Image'

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
            className={classNames('w-full max-w-[12rem] flex-auto pt-2 ', {
              'sm:max-w-[16rem]': !fixed
            })}
          >
            <SanityImage src={settings.logo?.image} alt={settings.logo?.alt} />
          </div>
          <div
            className={classNames('hidden', {
              'w-full flex-1 flex-row justify-end space-x-4 pl-7 md:flex lg:space-x-14':
                !fixed
            })}
          >
            <IconLabel
              icon={<LocationMarkerIcon />}
              href="#"
              text="Addresse"
              small={settings.address}
            />
            <IconLabel
              icon={<PhoneIcon />}
              href={`tel: ${settings.phone}`}
              text="Telefon"
              small={`(+47) ${formatPhoneNumber(settings.phone)}`}
            />
            <IconLabel
              icon={<MailIcon />}
              href={`mailto: ${settings.email}`}
              text="Email"
              small={settings.email}
            />
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
