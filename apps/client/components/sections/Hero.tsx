import Cta from '../Cta'
import Image from 'next/image'
import client, { PortableText } from '@lib/sanity'
import { useNextSanityImage } from 'next-sanity-image'
import { Hero as HeroSectionProps } from '@lib/schema'

export default function Hero (props: HeroSectionProps) {
  const { heading, backgroundImage, tagline, ctas } = props

  return (
    <div>
      <div className="wrapper mx-auto px-6 mt-4">
        <div className="md:flex md:items-center">
          <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
            <h3 className="text-gray-700 uppercase text-lg">{heading}</h3>
            {tagline && <PortableText blocks={tagline} />}
            {ctas && (
              <div>
                {ctas.map((cta: any) => (
                  <Cta {...cta} key={cta._key} />
                ))}
              </div>
            )}
          </div>
          <div className="relative w-full h-64 md:w-1/2 lg:h-96">
            <Image
              src={useNextSanityImage(client, backgroundImage?.image!)}
              alt={backgroundImage?.alt}
              layout="fill"
              objectFit="contain"
              sizes="(max-width: 800px) 100vw, 800px"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
