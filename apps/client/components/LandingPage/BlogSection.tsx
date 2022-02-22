import SanityImage from '@components/Image'
import { NewspaperIcon } from '@heroicons/react/outline'
import { PortableText } from '@lib/sanity'
import { Post } from '@lib/schema'

import SectionTitle from './utils/SectionTitle'

interface BlogSectionProps {
  data: Post
}

export default function BlogSection({ data }: BlogSectionProps) {
  return (
    <section className="content-section">
      <div className="wrapper">
        <SectionTitle title="Siste nytt fra oss" icon={<NewspaperIcon />} />
        <div className="flex flex-col items-center space-y-5 md:flex-row md:space-x-10">
          <SanityImage
            className="img-round-shadow md:1/2 aspect-square lg:w-2/5"
            settings={{
              layout: 'responsive'
            }}
            src={data.mainImage?.asset}
            alt={data.title}
            crop={true}
          />
          <div className="flex flex-auto basis-full">
            <article>
              <h3 className="mb-4 text-3xl font-semibold leading-none text-gray-800">
                {data.title}
              </h3>
              <div className="mb-5">
                <PortableText blocks={data.excerpt} />
              </div>

              <hr className="mb-5 border-gray-300" />
              <button className="btn btn-primary">Les mer</button>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
