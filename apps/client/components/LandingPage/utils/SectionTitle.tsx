import Icon from '@components/Icon'
import classNames from 'classnames'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface SectionTitleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  margin?: boolean
  bordered?: boolean
  centerOnMobile: boolean
  small?: string
  icon?: JSX.Element
  iconAlign?: 'left' | 'right'
  textAlign?: 'left' | 'center' | 'right'
}

const defaultProps: Partial<SectionTitleProps> = {
  margin: true,
  centerOnMobile: true,
  bordered: true,
  textAlign: 'center',
  iconAlign: 'left'
}

export default function SectionTitle(
  props: SectionTitleProps & typeof defaultProps
) {
  const {
    title,
    bordered,
    centerOnMobile,
    margin,
    icon,
    small,
    iconAlign,
    textAlign,
    className
  } = props
  return (
    <div
      className={classNames(
        className,
        `flex basis-full flex-col justify-center text-center`,

        {
          'items-center': centerOnMobile,
          'mb-10': margin,
          'md:items-start md:text-left': textAlign === 'left',
          'md:items-end md:text-right': textAlign === 'right'
        }
      )}
    >
      <div
        className={classNames('relative', {
          block: !icon,
          flex: icon,
          'ml-14': icon && iconAlign === 'left',
          'mr-14': icon && iconAlign === 'right'
        })}
      >
        {icon && (
          <Icon
            icon={icon}
            className={classNames('absolute -top-1', {
              '-left-14 mr-2': iconAlign === 'left',
              '-right-14 ml-2': iconAlign === 'right'
            })}
          />
        )}
        <h2
          className={classNames('float-left mb-2 inline text-center', {
            'after:block after:h-[3px] after:w-full after:rounded-[50%] after:bg-primary-base ':
              bordered
          })}
        >
          {title}
        </h2>
      </div>
      {small && (
        <p
          className={classNames(
            'block text-base leading-relaxed lg:w-3/4 xl:w-2/4',
            {
              'md:text-left': textAlign === 'left',
              'md:text-center': textAlign === 'center',
              'md:text-right': textAlign === 'right'
            }
          )}
        >
          {small}
        </p>
      )}
    </div>
  )
}

SectionTitle.defaultProps = defaultProps
