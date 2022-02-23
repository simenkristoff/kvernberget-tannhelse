/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Review } from '@lib/queries/getReviews'
import classNames from 'classnames'
import { useRef, useState } from 'react'

import ReviewCard from './ReviewCard'

interface ReviewSliderProps {
  reviews: Review[]
  className?: string
}

export default function ReviewSlider({
  reviews,
  className
}: ReviewSliderProps) {
  const startPos = useRef<number>(0)
  const dragging = useRef<boolean>(false)
  const [active, setActive] = useState<number>(0)
  const [prevTrans, setPrevTrans] = useState<number>(0)
  const [currTrans, setCurrTrans] = useState<number>(0)
  const width = 500
  const maxSlide = reviews.length - 1

  const getPositionX = (e: any) => {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX
  }

  const changeSlide = (idx: number) => {
    const slide = -idx
    setCurrTrans(slide * width)
    setActive(slide)
  }

  const handleStart = (e: any) => {
    startPos.current = getPositionX(e)
    setPrevTrans(currTrans)
    dragging.current = true
  }

  const handleDrag = (e: any) => {
    if (dragging.current) {
      const currPos = getPositionX(e)
      setCurrTrans(prevTrans + currPos - startPos.current)
    }
  }

  const handleEnd = () => {
    dragging.current = false
    const movedBy = currTrans - prevTrans
    const dir = movedBy / Math.abs(movedBy)

    const slides = Math.abs(movedBy) > 50 ? dir + active : active
    const next = Math.min(Math.max(slides, -maxSlide), 0)
    setCurrTrans(next * width)
    setActive(next)
  }

  return (
    <div className={classNames('w-full max-w-sm sm:max-w-md', className)}>
      <div
        className={
          'relative aspect-4/3 w-full overflow-hidden transition-all duration-1000 sm:aspect-video'
        }
      >
        {reviews.map((review, i) => (
          <ReviewCard
            onTouchStart={handleStart}
            onMouseDown={handleStart}
            onTouchMove={handleDrag}
            onMouseMove={handleDrag}
            onTouchEnd={handleEnd}
            onMouseUp={handleEnd}
            onMouseLeave={() => {
              if (dragging.current) handleEnd()
            }}
            onContextMenu={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
            key={review._id}
            className={
              'absolute block max-h-72 min-h-max w-full max-w-sm -translate-x-full select-none drop-shadow-md transition-all duration-300 sm:max-w-md'
            }
            style={{
              transform: `translate3d(${i * width + currTrans}px, 0px, 0px )`,
              width
            }}
            data={review}
          />
        ))}
      </div>

      <div className="flex items-center justify-center">
        {[...Array(maxSlide + 1)].map((x, i) => (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            key={i}
            onClick={() => changeSlide(i)}
            className={classNames(
              'mx-1 inline h-5 w-5 cursor-pointer rounded-full border border-gray-300 duration-500 hover:bg-primary-light ',
              { 'bg-primary-light ': i === Math.abs(active) }
            )}
          />
        ))}
      </div>
    </div>
  )
}
