import { PortableText } from '@lib/sanity'
import { ImageSection as ImageSectionSchema } from '@lib/schema'
import classNames from 'classnames'
import SanityImage from '@components/Image'
import CtaButton from '@components/CtaButton'
import { useWindow } from 'context/WindowContext'
import { useEffect, useState } from 'react'

import { ContentSection } from './interface'

export type ImageSectionProps = ContentSection<ImageSectionSchema>

function ImageSection({
  data,
  title,
  className,
  ...htmlProps
}: ImageSectionProps) {
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
      <div className="mb-10 flex w-full flex-col items-center justify-between px-4 lg:flex-row">
        <div
          className={classNames('md:max-w-2xl lg:max-w-xl', {
            'order-2 lg:pl-5': imageAlignment === 'left',
            'order-2 lg:order-1 lg:pr-5': imageAlignment === 'right'
          })}
        >
          {(title && <h1>{title}</h1>) || <h2>{heading}</h2>}
          {content.length > 0 && (
            <div className={classNames('block-content mb-4')}>
              <PortableText blocks={content} />
            </div>
          )}
          {cta && <CtaButton data={cta} />}
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
