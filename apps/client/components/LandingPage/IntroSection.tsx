import CtaButton from '@components/CtaButton'
import SanityImage from '@components/Image'
import { Frontpage } from '@lib/queries/getLandingPage'
import classNames from 'classnames'
import Image from 'next/image'

import abstractLeft from '../../public/assets/abstract-left.png'
import abstractRight from '../../public/assets/abstract-right.png'

interface IntroSectionProps {
  data: Pick<Frontpage, 'introSection'>
}

export default function IntroSection({ data }: IntroSectionProps) {
  const { introSection } = data
  if (!introSection) return null
  const { cta, centerTextOnMobile, image } = introSection
  return (
    <section className="content-section relative flex flex-col-reverse items-center overflow-hidden bg-gradient-to-b from-secondary-200 to-gray-100 text-lg dark:from-dark-600 dark:to-dark-700 lg:flex-col lg:py-0">
      <div className={classNames('wrapper z-10 mx-auto sm:py-16')}>
        <div className="flex w-full flex-col items-center justify-between sm:mb-10 lg:flex-row">
          <div
            className={classNames({
              'mb-16 text-center md:max-w-2xl md:text-left lg:mb-0 lg:max-w-xl':
                centerTextOnMobile
            })}
          >
            <div className="py-8">
              <h1 className="mb-4">
                Velkommen til
                <br />
                <span className="text-primary-base">Kvernberget Tannhelse</span>
              </h1>
              <p className="mb-8">
                Her jobber tannlegene Kleivmyr, Neuenkirchen, Caoile,
                Kristoffersen og Folland. Vi gir deg en trygg og forsvarlig
                tannbehandling etter dine behov og ønsker.
              </p>
              <div className="flex items-center justify-center space-x-5 md:justify-start">
                <button className="btn btn-primary">Bestill time</button>
                <button className="text-xl font-bold text-primary-base">
                  Les mer
                </button>
              </div>
            </div>
          </div>
          {image && (
            <div
              className={classNames(
                'mb-6 flex w-full items-center justify-center md:max-w-2xl lg:w-1/2 lg:max-w-xl'
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
      <svg
        className="absolute bottom-0 z-0 -mt-5 h-6 w-full text-white dark:text-dark-800 sm:-mt-10 sm:h-16"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
    </section>
  )
}
