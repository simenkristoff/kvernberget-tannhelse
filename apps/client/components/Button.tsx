import classNames from 'classnames'
import Link from 'next/link'
import { HTMLProps, ReactNode } from 'react'

export interface ButtonProps extends HTMLProps<any> {
  href?: string
  type?: 'primary' | 'secondary' | 'ghost'
  className?: string
}

const defaultProps: Partial<ButtonProps> = {
  type: 'primary'
}

export default function Button({
  href,
  type,
  className,
  children,
  ...htmlProps
}: ButtonProps & typeof defaultProps) {
  const classes = classNames('btn', className, {
    'btn-primary': type === 'primary',
    'btn-secondary': type === 'secondary',
    'btn-ghost': type === 'ghost'
  })

  if (href) {
    return (
      <Link href={href} passHref>
        <a href="replace" {...htmlProps} className={classes}>
          {children}
        </a>
      </Link>
    )
  }
  return (
    <button {...htmlProps} className={classes}>
      {children}
    </button>
  )
}

Button.defaultProps = defaultProps
