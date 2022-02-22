import CtaButton from '@components/CtaButton'
import SanityImage from '@components/Image'
import { Frontpage } from '@lib/queries/getLandingPage'
import classNames from 'classnames'
import Image from 'next/image'

import abstractLeft from '../../public/assets/abstract-left.png'
import abstractRight from '../../public/assets/abstract-right.png'

type HeroSectionProps = Pick<Frontpage, 'introSection'>

export default function HeroSection({ introSection }: HeroSectionProps) {
  if (!introSection) return null
  const { ctas, backgroundImage, centerTextOnMobile, hideImageOnMobile } =
    introSection
  return (
    <section className="content-section relative flex flex-col-reverse items-center bg-gradient-to-b from-sky-100 via-gray-100 text-lg lg:flex-col lg:py-0">
      <div
        className={classNames(
          'wrapper z-10 flex flex-col items-center py-16 md:flex-row md:space-x-2'
        )}
      >
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:text-left lg:flex-grow lg:pr-24">
          <div
            className={classNames({
              'text-center md:text-left': centerTextOnMobile
            })}
          >
            <h1>
              Velkommen til
              <br />
              <span className="text-teal-700">Kvernberget Tannhelse</span>
            </h1>
            <p>
              Her jobber tannlegene Kleivmyr, Neuenkirchen, Caoile,
              Kristoffersen og Folland. Vi gir deg en trygg og forsvarlig
              tannbehandling etter dine behov og ønsker.
            </p>
            {ctas && (
              <div className="mt-8">
                {ctas.map((cta) => (
                  <CtaButton data={cta} key={cta._key} />
                ))}
              </div>
            )}
          </div>
        </div>
        <div
          className={classNames('w-5/6 md:w-1/2 lg:w-full lg:max-w-lg', {
            'hidden md:block': hideImageOnMobile
          })}
        >
          <SanityImage
            className="overflow-hidden rounded-lg object-cover object-center shadow-gray-500 drop-shadow-md"
            src={backgroundImage?.image}
            alt={backgroundImage?.alt}
          />
        </div>
      </div>
      <div className="absolute top-0 left-0 z-0 hidden aspect-auto h-full w-2/5 text-left md:block">
        <Image
          className="aspect-auto animate-full-pulse"
          src={abstractLeft}
          alt="Abstrakte bølger på venstre side"
          priority={true}
        />
      </div>
      <div className="absolute top-0 right-0 z-0 hidden h-full w-2/5 text-right md:block">
        <Image
          className="h-full w-full animate-full-pulse"
          src={abstractRight}
          alt="Abstrakte bølger på høyre side"
          priority={true}
        />
      </div>
    </section>
  )
}
