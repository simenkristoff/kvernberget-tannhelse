import client from '@lib/sanity'
import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface SanityImageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  src?: SanityImageSource
  alt?: string
}

export default function SanityImage({
  src,
  alt,
  className,
  ...htmlProps
}: SanityImageProps) {
  if (!src) return null
  const source = useNextSanityImage(client, src)
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
      />
    </div>
  )
}
