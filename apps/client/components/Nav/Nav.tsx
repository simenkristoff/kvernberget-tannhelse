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
  fixed: boolean;
  className?: string;
  children?: ReactFragment;
}

function Nav ({ fixed, className, children }: NavProps) {
  const [toggle, setToggle] = useState<boolean>(false)

  const checkWidthConstraints = () => {
    if (!window) return

    if (window.innerWidth > breakpoints.md) {
      setToggle(true)
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
              'h-10 w-10 rounded-md text-teal-600 border-2 border-teal-600 hover:text-teal-700 hover:border-teal-700 transition-all duration-300',
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
              className='w-screen absolute bottom-0 left-0 translate-y-full shadow-md md:shadow-none md:relative z-50 md:translate-y-0 md:w-full'
              static
            >
              <Popover.Group
                as="nav"
                className={classNames('flex flex-col h-full bg-white md:bg-transparent md:flex-row lg:space-x-2 justify-start', { 'justify-end': fixed })}
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
