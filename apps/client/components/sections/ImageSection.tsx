import PropTypes from 'prop-types'
// import Cta from '../Cta'
import Image from 'next/image'
import client, { PortableText } from '@lib/sanity'
import { useNextSanityImage } from 'next-sanity-image'
import { ImageSection as ImageSectionSchema } from '@lib/schema'

import { ContentSection } from './interface'
import classNames from 'classnames'
import SanityImage from '@components/Image'
import CtaButton from '@components/CtaButton'
import { useWindow } from 'context/WindowContext'
import { useEffect, useState } from 'react'

export type ImageSectionProps = ContentSection<ImageSectionSchema>

function ImageSection({ data, className, ...htmlProps }: ImageSectionProps) {
  const { heading, content, image, imageAlignment, hideImageOnMobile, cta } =
    data
  const { isMobile } = useWindow()
  const [hideImage, setHideImage] = useState<boolean>(
    hideImageOnMobile && isMobile
  )

  useEffect(() => {
    setHideImage(hideImageOnMobile && isMobile)
  }, [isMobile])

  return (
    <div className="wrapper mx-auto">
      <div className="mb-10 flex w-full flex-col items-center justify-between lg:flex-row">
        <div
          className={classNames('mb-16 md:max-w-2xl lg:mb-0 lg:max-w-xl', {
            'order-2 lg:pl-5': imageAlignment === 'left',
            'order-2 lg:order-1 lg:pr-5': imageAlignment === 'right'
          })}
        >
          <div className="mb-6">
            {heading && <h2>{heading}</h2>}
            {content.length > 0 && (
              <div className={classNames('block-content mb-8')}>
                <PortableText blocks={content} />
              </div>
            )}
            {cta && <CtaButton data={cta} />}
          </div>
        </div>
        {!hideImage && (
          <div
            className={classNames(
              'mb-6 flex w-full items-center justify-center md:max-w-2xl lg:w-1/2 lg:max-w-xl',
              {
                'order-1': imageAlignment === 'left',
                'order-1 lg:order-2': imageAlignment === 'right'
              }
            )}
          >
            <SanityImage
              src={image.image}
              alt={image.alt}
              className="overflow-hidden rounded-md shadow-md shadow-gray-300"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default ImageSection
