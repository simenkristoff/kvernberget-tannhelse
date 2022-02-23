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
          <div
            className={classNames(
              'absolute -top-1 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-gray-100',
              {
                '-left-14 mr-2': iconAlign === 'left',
                '-right-14 ml-2': iconAlign === 'right'
              }
            )}
          >
            <icon.type className="h-10 w-10 py-1 text-primary-light" />
          </div>
        )}
        <h2
          className={classNames('section-title mb-2 text-center', {
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
