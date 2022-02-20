import { Review } from '@lib/queries/getReviews'
import classNames from 'classnames'
import { useRef, useState } from 'react'
import ReviewCard from './ReviewCard'

interface ReviewSliderProps {
  reviews: Review[];
  className?: string;
}

export default function ReviewSlider ({ reviews, className }: ReviewSliderProps) {
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
    const next = Math.min(Math.max(slides, -(maxSlide)), 0)
    setCurrTrans(
      next * width
    )
    setActive(next)
  }

  return (
    <div className={classNames('w-full max-w-sm sm:max-w-md', className)}>

        <div className={'transition-all w-full aspect-4/3 sm:aspect-video relative overflow-hidden duration-1000'}>
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
              className={'absolute min-h-max max-h-72 block w-full max-w-sm sm:max-w-md transition-all -translate-x-full duration-300 drop-shadow-md select-none'}
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
          <div
            key={i}
            onClick={() => changeSlide(i)}
            className={classNames(
              'inline mx-1 h-5 w-5 border border-gray-300 hover:bg-teal-600 duration-500 rounded-full cursor-pointer',
              { 'bg-teal-600': i === Math.abs(active) }
            )}
          />
        ))}
      </div>
    </div>
  )
}

// (i - active) * width
