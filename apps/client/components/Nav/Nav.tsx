import { Popover, Transition } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import { Fragment, ReactFragment, useEffect, useState } from 'react'

import NavDropdown from './NavDropdown'
import NavItem from './NavItem'

const breakpoints: { [key: string]: number } = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
}

export interface NavProps {
  fixed: boolean
  className?: string
  children?: ReactFragment
}

function Nav({ fixed, className, children }: NavProps) {
  const [toggle, setToggle] = useState<boolean>(false)

  const checkWidthConstraints = () => {
    if (!window) return

    if (window.innerWidth > breakpoints.md) {
      setToggle(true)
    } else {
      setToggle(false)
    }
  }

  useEffect(() => {
    checkWidthConstraints()
    window.addEventListener('resize', checkWidthConstraints)

    return () => {
      window.removeEventListener('resize', checkWidthConstraints)
    }
  }, [])

  return (
    <Popover className={classNames('flex items-center', className)}>
      <Fragment>
        <Popover.Button className="md:hidden">
          <span className="sr-only">Toggle menu</span>
          <MenuIcon
            className={classNames(
              'h-10 w-10 rounded-md border-2 border-teal-600 text-teal-600 transition-all duration-300 hover:border-teal-700 hover:text-teal-700',
              { '-rotate-90': toggle }
            )}
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
            <Popover.Panel
              className="absolute bottom-0 left-0 z-50 w-screen translate-y-full shadow-md md:relative md:w-full md:translate-y-0 md:shadow-none"
              static
            >
              <Popover.Group
                as="nav"
                className={classNames(
                  'flex h-full flex-col justify-start bg-white md:flex-row md:bg-transparent lg:space-x-2',
                  { 'justify-end': fixed }
                )}
              >
                {children}
              </Popover.Group>
            </Popover.Panel>
          </Transition>
        )}
      </Fragment>
    </Popover>
  )
}

Nav.NavItem = NavItem
Nav.NavDropdown = NavDropdown

export default Nav
