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
    <div className={classNames('wrapper mx-auto w-full', className)}>
      <div className="md:flex md:items-center md:space-x-10">
        <div
          className={classNames('mx-auto mt-5 w-full max-w-lg md:w-1/2', {
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
        <div
          className={classNames('w-5/6 md:w-1/2 lg:w-full lg:max-w-lg', {
            'hidden md:block': hideImageOnMobile
          })}
        >
          <SanityImage
            className="overflow-hidden rounded-lg object-cover object-center shadow-md shadow-gray-400"
            src={backgroundImage?.image}
            alt={backgroundImage?.alt}
          />
        </div>
      </div>
    </div>
  )
}
