import ReactStars from 'react-stars'
import classNames from 'classnames'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { ChatIcon } from '@heroicons/react/outline'
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
  ...props
}: ReviewProps) {
  const { title, content, rating, source } = data
  return (
    <article {...props} style={style} className={classNames(className)}>
      <div
        className={classNames(
          'relative flex flex-col basis-full bg-white border py-2 px-4 rounded-md border-gray-200 cursor-move'
        )}
      >
        <ChatIcon className="absolute top-0 right-0 text-teal-600 h-12 w-12" />
        <ReactStars
          className="w-full"
          count={5}
          half
          edit={false}
          value={rating}
          size={24}
        />

        <h3 className="text-xl mb-2 font-medium text-gray-700">{title}</h3>
        <p
          className="mb-2 text-gray-700"
          dangerouslySetInnerHTML={{ __html: content || '' }}
        />
        {source && (
          <p className="italic font-medium flex flex-1 items-end">
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
