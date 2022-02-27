import classNames from 'classnames'
import { useWindow } from 'context/WindowContext'
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi'
import { SiteSettings } from '@lib/schema'
import { useEffect, useRef } from 'react'

import formatPhoneNumber from '../utils/formatPhoneNumber'

import Nav from './Nav/Nav'
import IconLabel from './IconLabel'
import SanityImage from './Image'
import Button from './Button'

interface HeaderProps {
  settings: SiteSettings
}

export default function Header({ settings }: HeaderProps) {
  const ref = useRef<HTMLElement>(null)
  const { fixed, setRef } = useWindow()

  useEffect(() => {
    if (ref.current) setRef(ref.current)
  }, [])

  return (
    <header
      ref={ref}
      className={classNames(
        'wrapper-full z-50 bg-white shadow-md dark:bg-gray-900',
        {
          relative: !fixed,
          'fixed top-0 left-0': fixed
        }
      )}
    >
      <div>
        <div
          className={classNames(
            'wrapper flex min-h-[4rem] flex-wrap justify-between ',
            {
              'flex-row md:flex-col': !fixed,
              'flex-row': fixed
            }
          )}
        >
          <div
            className={classNames('flex', {
              'flex-auto md:w-full md:justify-between': !fixed,
              'flex-auto': fixed
            })}
          >
            <div
              className={classNames(
                'w-full max-w-[12rem] flex-auto pt-2 pb-1 duration-200',
                {
                  'sm:max-w-[16rem]': !fixed
                }
              )}
            >
              <SanityImage
                src={settings.logo?.image}
                alt={settings.logo?.alt}
              />
            </div>
            <div
              className={classNames('hidden', {
                'w-full flex-1 flex-row justify-end space-x-4 pl-7 md:flex lg:space-x-14':
                  !fixed
              })}
            >
              <IconLabel
                icon={<HiOutlinePhone />}
                href={`tel: ${settings.phone}`}
                text="Telefon"
                small={`(+47) ${formatPhoneNumber(settings.phone)}`}
              />
              <IconLabel
                icon={<HiOutlineMail />}
                href={`mailto: ${settings.email}`}
                text="Email"
                small={settings.email}
              />
            </div>
          </div>

          <Nav
            fixed={fixed}
            className={classNames('flex items-center', {
              'border-t border-transparent md:border-gray-100 dark:md:border-gray-800':
                !fixed
            })}
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
            <Button
              className={classNames({
                'h-full items-center self-stretch rounded-none md:absolute md:right-0 md:bottom-0':
                  !fixed,
                'rounded-none md:rounded-md': fixed
              })}
            >
              Bestill time
            </Button>
          </Nav>
        </div>
      </div>
    </header>
  )
}
