import Image from 'next/image'
import client, { PortableText } from '@lib/sanity'
import { useNextSanityImage } from 'next-sanity-image'
import { Hero as HeroSectionProps } from '@lib/schema'

import Cta from '../Cta'

export default function Hero(props: HeroSectionProps) {
  const { heading, backgroundImage, tagline, ctas } = props

  return (
    <div>
      <div className="wrapper mx-auto mt-4 px-6">
        <div className="md:flex md:items-center">
          <div className="mx-auto mt-5 w-full max-w-lg md:ml-8 md:mt-0 md:w-1/2">
            <h3 className="text-lg uppercase text-gray-700">{heading}</h3>
            {tagline && <PortableText blocks={tagline} />}
            {ctas && (
              <div>
                {ctas.map((cta: any) => (
                  <Cta {...cta} key={cta._key} />
                ))}
              </div>
            )}
          </div>
          <div className="relative h-64 w-full md:w-1/2 lg:h-96">
            {backgroundImage && (
              <Image
                src={
                  backgroundImage.image
                    ? useNextSanityImage(client, backgroundImage?.image)
                    : ''
                }
                alt={backgroundImage?.alt}
                layout="fill"
                objectFit="contain"
                sizes="(max-width: 800px) 100vw, 800px"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
