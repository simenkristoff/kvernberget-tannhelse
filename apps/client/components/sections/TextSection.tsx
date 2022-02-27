import { PortableText } from '@lib/sanity'
import { TextSection as TextSectionSchema } from '@lib/schema'

import { ContentSection } from './interface'

export type TextSectionProps = ContentSection<TextSectionSchema>

function TextSection({
  data,
  title,
  className,
  ...htmlProps
}: TextSectionProps) {
  const { heading, content } = data
  return (
    <div>
      <div className="wrapper mx-auto">
        <div className="px-4">
          {(title && <h1>{title}</h1>) || <h2>{heading}</h2>}
          <div className="block-content md:flex md:items-center">
            {data && <PortableText blocks={content} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextSection
