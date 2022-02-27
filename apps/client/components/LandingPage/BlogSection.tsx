import Button from '@components/Button'
import SanityImage from '@components/Image'
import { HiOutlineNewspaper } from 'react-icons/hi'
import { PortableText } from '@lib/sanity'
import { BlogSection as BlogSectionSchema, Post } from '@lib/schema'

import SectionTitle from './utils/SectionTitle'

interface BlogSectionProps extends BlogSectionSchema {
  data?: Post
}

export default function BlogSection({ data, ...props }: BlogSectionProps) {
  if (!props.showBlogSection || !(data && props.pinnedPost)) return null
  return (
    <section className="content-section">
      <div className="wrapper">
        <SectionTitle
          title="Siste nytt fra oss"
          icon={<HiOutlineNewspaper />}
        />
        <div className="mx-auto flex max-w-3xl flex-col items-center space-y-5 md:flex-row md:space-x-10">
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
              <h3>{data.title}</h3>
              <div className="mb-5">
                <PortableText blocks={data.excerpt} />
              </div>

              <hr className="mb-5 border-gray-300" />
              <Button>Les mer</Button>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
