import client from '@lib/sanity'
import { ImageUrlBuilder, useNextSanityImage } from 'next-sanity-image'
import Image, { ImageProps } from 'next/image'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import classNames from 'classnames'

export type SanityImageProps = {
  src?: SanityImageSource
  alt?: string
  crop?: boolean
  settings?: Partial<ImageProps> & { className?: string }
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
  typeof defaultProps

const defaultProps = {
  crop: false
}

const myCustomImageBuilder = (
  imageUrlBuilder: ImageUrlBuilder,
  options: any
) => {
  return imageUrlBuilder
    .width(
      options.width || Math.min(options.originalImageDimensions.width, 800)
    )
    .height(
      options.width || Math.min(options.originalImageDimensions.width, 800)
    )
    .crop('center')
    .fit('crop')
}

export default function SanityImage({
  src,
  alt,
  crop,
  settings,
  className,
  ...htmlProps
}: SanityImageProps) {
  if (!src) return null
  const source = useNextSanityImage(
    client,
    src,
    crop
      ? {
          imageBuilder: myCustomImageBuilder
        }
      : {}
  )
  return (
    <div
      {...htmlProps}
      className={classNames('relative block aspect-auto w-full', className)}
    >
      <Image
        {...source}
        alt={alt || ''}
        layout="responsive"
        objectFit="contain"
        sizes="(max-width: 800px) 100vw, 800px"
        {...settings}
      />
    </div>
  )
}

SanityImage.defaultProps = defaultProps
