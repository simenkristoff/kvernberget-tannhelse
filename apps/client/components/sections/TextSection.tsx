import { PortableText } from '@lib/sanity'
import { TextSection as TextSectionSchema } from '@lib/schema'

import { ContentSection } from './interface'

export type TextSectionProps = ContentSection<TextSectionSchema>

function TextSection({ data, className, ...htmlProps }: TextSectionProps) {
  const { heading, content } = data
  return (
    <div>
      <div className="wrapper mx-auto">
        <div className="block-content md:flex md:items-center">
          {data && <PortableText blocks={content} />}
        </div>
      </div>
    </div>
  )
}

export default TextSection
