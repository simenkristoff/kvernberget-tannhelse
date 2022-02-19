import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import classNames from 'classNames'
import { Fragment, ReactFragment } from 'react'

export interface NavDropdownProps {
  label: string;
  children: ReactFragment;
}

export default function NavDropdown ({ label, children }: NavDropdownProps) {
  return (
    <Popover className="relative flex flex-col md:flex-row">
      {({ open }) => (
        <Fragment>
          <Popover.Button className={classNames('nav-item', { open: open })}>
            {label}
            <ChevronDownIcon className={classNames('h-5 w-5 transition-transform duration-300', { 'rotate-180': open })} aria-hidden="true" />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition fade-in duration-300"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition fade-in duration-200"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="z-50 min-w-full md:absolute md:bottom-0 md:translate-y-full md:transform">
              <div className="relative flex flex-col md:items-center bg-white px-5 py-2 border-b md:border-x md:shadow-md">
                {children}
              </div>
            </Popover.Panel>
          </Transition>
        </Fragment>
      )}
    </Popover>
  )
}