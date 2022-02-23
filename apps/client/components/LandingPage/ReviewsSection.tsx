import ReviewSlider from '@components/ReviewSlider'
import { SparklesIcon, StarIcon } from '@heroicons/react/outline'
import { Review } from '@lib/queries/getReviews'
import Image from 'next/image'

import reviewsIllustration from '../../public/assets/reviews-illustration.png'

import SectionTitle from './utils/SectionTitle'

interface ReviewsSectionProps {
  data: Review[]
}

export default function ReviewsSection({ data }: ReviewsSectionProps) {
  return (
    <section className="content-section bg-gradient-to-b from-secondary-50 via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="wrapper relative flex min-h-[10rem] w-full flex-1 items-center justify-center px-0">
        <div className="relative hidden aspect-auto h-full w-1/3 md:flex">
          <Image
            src={reviewsIllustration}
            alt="Illustrasjon for omtaler"
            priority={true}
          />
        </div>
        <div className="block w-full max-w-sm py-8 sm:max-w-md lg:py-0">
          <SectionTitle
            title="Våre omtaler"
            icon={<SparklesIcon />}
            iconAlign="right"
            textAlign="left"
            className="mb-1"
          />
          <ReviewSlider className="ml-auto" reviews={data} />
        </div>
      </div>
    </section>
  )
}
