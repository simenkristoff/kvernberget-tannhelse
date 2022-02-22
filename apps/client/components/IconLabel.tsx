import classNames from 'classnames'
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'

export interface IconLabelProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  icon: JSX.Element
  text: string
  mode: 'dark' | 'light'
  fontWeight: 'normal' | 'medium' | 'semibold' | 'bold'
  transition: 'left' | 'right' | 'up' | 'down' | 'none'
  labelColon?: boolean
  small?: string
}

const defaultProps: Partial<IconLabelProps> = {
  fontWeight: 'semibold',
  mode: 'light',
  transition: 'right',
  labelColon: true
}

export default function IconLabel({
  icon,
  text,
  mode,
  fontWeight,
  transition,
  labelColon,
  small,
  className,
  ...htmlProps
}: IconLabelProps & typeof defaultProps) {
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
        className={classNames('absolute -left-7 top-0 duration-300 ', {
          'text-teal-700 group-hover:text-teal-800': mode === 'light',
          'text-gray-100 group-hover:text-gray-200': mode === 'dark'
        })}
        height={24}
        width={24}
      />
      <p
        className={classNames(' duration-300 ', {
          'text-teal-700 group-hover:text-teal-800': mode === 'light',
          'text-gray-100 group-hover:text-gray-200': mode === 'dark',
          'font-bold': fontWeight === 'bold',
          'font-semibold': fontWeight === 'semibold',
          'font-medium': fontWeight === 'medium'
        })}
      >
        {text}
        {small && labelColon && ':'}
      </p>
      {small && (
        <p
          className={classNames('mt-1 duration-300', {
            'group-hover:text-slate-700': mode === 'light',
            'text-gray-200 group-hover:text-gray-300': mode === 'dark'
          })}
        >
          {small}
        </p>
      )}
    </a>
  )
}

IconLabel.defaultProps = defaultProps
