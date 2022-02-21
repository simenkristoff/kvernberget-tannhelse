import { Hero } from '@components/sections'
import { Frontpage } from '@lib/queries/getLandingPage'
import Image from 'next/image'

import abstractLeft from '../../public/abstract-left.png'
import abstractRight from '../../public/abstract-right.png'

type HeroSectionProps = Pick<Frontpage, 'introSection'>

export default function HeroSection({ introSection }: HeroSectionProps) {
  return (
    <section className="frontpage-section bg-gradient-to-b from-sky-100 via-gray-100 text-lg">
      <div className="wrapper relative z-10">
        <Hero data={introSection} />
      </div>
      <div className="absolute top-0 left-0 z-0 hidden aspect-auto h-full w-2/5 md:block">
        <Image
          className="animate-full-pulse"
          src={abstractLeft}
          alt="Abstrakte bølger på venstre side"
          priority
        />
      </div>
      <div className="absolute top-0 right-0 z-0 hidden aspect-auto h-full w-2/5 md:block">
        <Image
          className="animate-full-pulse"
          src={abstractRight}
          alt="Abstrakte bølger på høyre side"
          priority
        />
      </div>
    </section>
  )
}
