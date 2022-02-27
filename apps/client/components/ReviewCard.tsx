import ReactStars from 'react-stars'
import classNames from 'classnames'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { HiOutlineChat } from 'react-icons/hi'
import { Review } from '@lib/queries/getReviews'

interface ReviewProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: Review
}

function getBaseUrl(url: string) {
  const match = url.match(/^((https|http):\/\/){1}[a-zA-z.-]*\/{1}/gm)
  if (match)
    return match[0].slice(0, -1).replace(/^((https|http):\/\/)?(www.)?/gm, '')
  return ''
}

export default function ReviewCard({
  data,
  style,
  className,
  ...htmlProps
}: ReviewProps) {
  const { title, content, rating, source } = data
  return (
    <article {...htmlProps} style={style} className={classNames(className)}>
      <div
        className={classNames(
          'relative flex basis-full cursor-move flex-col rounded-md border border-gray-200 bg-white py-2 px-4'
        )}
      >
        <HiOutlineChat className="absolute top-0 right-0 h-12 w-12 text-primary-light " />
        <ReactStars
          className="w-full"
          count={5}
          half
          edit={false}
          value={rating}
          size={24}
        />

        <h3 className="mb-2 text-xl font-medium text-gray-700">{title}</h3>
        <p
          className="mb-2 text-gray-700"
          dangerouslySetInnerHTML={{ __html: content || '' }}
        />
        {source && (
          <p className="flex flex-1 items-end font-medium italic">
            Hentet fra:&nbsp;
            <a
              className="text-blue-600 hover:text-blue-800 hover:underline"
              href={source}
            >
              {getBaseUrl(source)}
            </a>
          </p>
        )}
      </div>
    </article>
  )
}
