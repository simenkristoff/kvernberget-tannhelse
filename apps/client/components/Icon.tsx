import classNames from 'classnames'
import { HTMLProps } from 'react'

export interface IconProps extends Omit<HTMLProps<HTMLDivElement>, 'size'> {
  icon: JSX.Element
  type: 'primary' | 'secondary' | 'ghost'
  size: 'small' | 'normal'
  background: 'round' | 'square'
  className?: string
}

const defaultProps: Partial<IconProps> = {
  type: 'secondary',
  size: 'normal',
  background: 'round'
}

export default function Icon({
  icon,
  type,
  size,
  background,
  className,
  ...htmlProps
}: IconProps & typeof defaultProps) {
  return (
    <icon.type
      {...htmlProps}
      className={classNames('flex items-center justify-center p-2', className, {
        'h-12 w-12 p-1': size === 'normal',
        'h-9 w-9 p-2': size === 'small',
        'bg-primary-light text-white': type === 'primary',
        'bg-gray-100 text-primary-light dark:bg-gray-600 dark:text-primary-accent':
          type === 'secondary',
        'bg-transparent text-gray-500': type === 'ghost',
        'rounded-full': background === 'round'
      })}
    />
  )
}

Icon.defaultProps = defaultProps
