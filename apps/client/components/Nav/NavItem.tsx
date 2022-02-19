import classNames from 'classNames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

export interface NavItemProps {
  to: string;
  className?: string;
  children?: ReactNode;
}

export default function NavItem ({ to, className, children }: NavItemProps) {
  const { pathname } = useRouter()
  const isActive = pathname === to + 'foo'
  return (
    <Link href={to}>
      <a className={classNames('nav-item', className, { active: isActive })}>{children}</a>
    </Link>
  )
}
