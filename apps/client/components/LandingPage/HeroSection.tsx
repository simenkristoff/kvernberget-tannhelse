import { Hero } from '@components/sections'
import { Frontpage } from '@lib/queries/getLandingPage'
import Image from 'next/image'

import abstractLeft from '../../public/assets/abstract-left.png'
import abstractRight from '../../public/assets/abstract-right.png'

type HeroSectionProps = Pick<Frontpage, 'introSection'>

export default function HeroSection({ introSection }: HeroSectionProps) {
  return (
    <section className="content-section bg-gradient-to-b from-sky-100 via-gray-100 text-lg">
      <Hero className="z-10" data={introSection} />
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
