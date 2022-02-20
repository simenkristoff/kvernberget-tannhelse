import { CleanSchema } from '@lib/interface'
import { getClient } from '@lib/sanity'
import { groq } from 'next-sanity'

import type * as Schema from '../schema'

export type Review = CleanSchema<Schema.Reviews>

export const getReviewsQuery = groq`
    *[_type == "reviews"] {
        _id,
        title,
        rating,
        content,
        source
    }
`

export const getReviews = async (preview: boolean) =>
  getClient(preview).fetch<Review[]>(getReviewsQuery)
