import ReviewSlider from '@components/ReviewSlider'
import { Review } from '@lib/queries/getReviews'
import Image from 'next/image'
import reviewsImage from '../../public/reviews.png'

interface ReviewsSectionProps {
  data: Review[]
}

export default function ReviewsSection({ data }: ReviewsSectionProps) {
  return (
    <section className="relative h-full w-full bg-gradient-to-b from-sky-50 via-gray-50 to-gray-100 py-16">
      <div className="wrapper relative flex min-h-[10rem] w-full flex-1 items-center justify-center px-0">
        <div className="relative hidden aspect-auto h-full w-1/3 md:flex">
          <Image
            className="block"
            src={reviewsImage}
            alt="Illustrasjon for omtaler"
            priority
          />
        </div>
        <div className="block w-full max-w-sm py-8 sm:max-w-md lg:py-0">
          <h2 className="section-title text-center md:text-left">
            Våre omtaler
          </h2>
          <ReviewSlider className="ml-auto" reviews={data} />
        </div>
      </div>
    </section>
  )
}
