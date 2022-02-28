import client, { PortableText } from '@lib/sanity'
import { HeroSection as HeroSectionSchema } from '@lib/schema'
import classNames from 'classnames'
import { useNextSanityImage } from 'next-sanity-image'

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
  const { heading, content, textColor, image, contentAlignment, cta } = data

  const isLight = textColor === 'light'

  return (
    <div {...htmlProps} className={classNames('wrapper mx-auto', className)}>
      <div
        className={classNames(
          '-mx-4 mb-10 flex flex-col rounded-b-md bg-cover bg-center bg-no-repeat py-16 px-4 drop-shadow-md sm:mx-0',
          {
            'items-start justify-start': contentAlignment === 'left',
            'items-center justify-center text-center':
              contentAlignment === 'center',
            'items-end justify-end': contentAlignment === 'right'
          }
        )}
        style={{
          backgroundImage: `url(${
            useNextSanityImage(client, image.image || '').src
          })`
        }}
      >
        <div className="z-10">
          {(title && (
            <h1 className={classNames({ '!text-white': isLight })}>{title}</h1>
          )) || (
            <h2 className={classNames({ '!text-white': isLight })}>
              {heading}
            </h2>
          )}

          {content.length > 0 && (
            <div
              className={classNames('group block-content mb-8 max-w-2xl', {
                'override-default-text': isLight
              })}
            >
              <PortableText blocks={content} />
            </div>
          )}
          {cta && <CtaButton data={cta} />}
        </div>
      </div>
    </div>
  )
}
