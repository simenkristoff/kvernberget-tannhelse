import SanityImage from '@components/Image'
import { PortableText, urlFor } from '@lib/sanity'
import { HeroSection as HeroSectionSchema } from '@lib/schema'
import classNames from 'classnames'

import CtaButton from '../CtaButton'

import { ContentSection } from './interface'

export type HeroSectionProps = ContentSection<HeroSectionSchema>

export default function HeroSection({
  data,
  title,
  className,
  ...htmlProps
}: HeroSectionProps) {
  if (!data) return null
  const { heading, content, image, contentAlignment, cta } = data
  return (
    <div
      {...htmlProps}
      className={classNames(
        'relative mx-auto flex overflow-hidden bg-primary-base pb-16',
        className
      )}
    >
      <div
        className={classNames(
          'wrapper flex flex-col bg-cover bg-center bg-no-repeat pt-16 pb-24',
          {
            'items-start justify-start': contentAlignment === 'left',
            'items-center justify-center text-center':
              contentAlignment === 'center',
            'items-end justify-end': contentAlignment === 'right'
          }
        )}
      >
        <div className="z-10">
          {(title && <h1 className="!text-white">{title}</h1>) || (
            <h2 className="!text-white">{heading}</h2>
          )}

          {content.length > 0 && (
            <div className={classNames('override-white mb-8 max-w-2xl')}>
              <PortableText blocks={content} />
            </div>
          )}
          {cta && <CtaButton data={cta} />}
        </div>
        <svg
          className="absolute bottom-0 left-0 -mt-5 h-6 w-full text-white sm:-mt-10 sm:h-16"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>
      </div>
    </div>
  )
}
