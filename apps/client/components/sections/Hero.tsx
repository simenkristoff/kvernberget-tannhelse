import { PortableText } from '@lib/sanity'
import { Hero as HeroSchema } from '@lib/schema'
import SanityImage from '@components/Image'
import classNames from 'classnames'

import CtaButton from '../CtaButton'

export interface HeroProps {
  data?: HeroSchema
}

export default function Hero({ data }: HeroProps) {
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
    <div>
      <div className="wrapper mx-auto">
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
            className={classNames(
              'relative w-full overflow-hidden rounded-xl shadow-md shadow-gray-500 md:w-1/2',
              {
                'hidden md:block': hideImageOnMobile
              }
            )}
          >
            <SanityImage
              src={backgroundImage?.image}
              alt={backgroundImage?.alt}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
