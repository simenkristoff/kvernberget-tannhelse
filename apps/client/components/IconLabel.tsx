import classNames from 'classnames'
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'

export type IconLabelProps = {
  icon: JSX.Element
  text: string
  fontWeight: 'normal' | 'medium' | 'semibold' | 'bold'
  transition: 'left' | 'right' | 'up' | 'down' | 'none'
  labelColon?: boolean
  small?: string
} & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> &
  typeof defaultProps

const defaultProps = {
  fontWeight: 'semibold',
  transition: 'right',
  labelColon: true
}

export default function IconLabel({
  icon,
  text,
  fontWeight,
  transition,
  labelColon,
  small,
  className,
  ...htmlProps
}: IconLabelProps) {
  return (
    <a
      {...htmlProps}
      className={classNames(
        'group relative my-2 block duration-300',
        className,
        {
          'hover:-translate-x-2': transition === 'left',
          'hover:translate-x-2': transition === 'right',
          'hover:-translate-y-2': transition === 'up',
          'hover:translate-y-2': transition === 'down'
        }
      )}
    >
      <icon.type
        className="absolute -left-7 top-0 text-teal-700 duration-300 group-hover:text-teal-800"
        height={24}
        width={24}
      />
      <p
        className={classNames(
          'text-teal-700 duration-300 group-hover:text-teal-800',
          {
            'font-bold': fontWeight === 'bold',
            'font-semibold': fontWeight === 'semibold',
            'font-medium': fontWeight === 'medium'
          }
        )}
      >
        {text}
        {small && labelColon && ':'}
      </p>
      {small && <p className="mt-1 group-hover:text-slate-700">{small}</p>}
    </a>
  )
}

IconLabel.defaultProps = defaultProps
