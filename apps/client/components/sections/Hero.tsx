import { PortableText } from '@lib/sanity'
import { Hero as HeroSchema } from '@lib/schema'
import SanityImage from '@components/Image'
import classNames from 'classnames'

import CtaButton from '../CtaButton'

export interface HeroProps {
  data?: HeroSchema
  className?: string
}

export default function Hero({ data, className }: HeroProps) {
  if (!data) return null
  const {
    heading,
    backgroundImage,
    tagline,
    ctas,
    hideImageOnMobile,
    centerTextOnMobile
  } = data

  return (
    <div
      className={classNames(
        'wrapper flex flex-col items-center py-16 md:flex-row',
        className
      )}
    >
      <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:text-left lg:flex-grow lg:pr-24">
        <div
          className={classNames({
            'text-center md:text-left': centerTextOnMobile
          })}
        >
          {heading && <PortableText blocks={heading} />}
          {tagline && <PortableText blocks={tagline} />}
          {ctas && (
            <div className="mt-8">
              {ctas.map((cta) => (
                <CtaButton data={cta} key={cta._key} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div
        className={classNames('w-5/6 md:w-1/2 lg:w-full lg:max-w-lg', {
          'hidden md:block': hideImageOnMobile
        })}
      >
        <SanityImage
          className="overflow-hidden rounded-lg object-cover object-center shadow-gray-500 drop-shadow-md"
          src={backgroundImage?.image}
          alt={backgroundImage?.alt}
        />
      </div>
    </div>
  )
}
