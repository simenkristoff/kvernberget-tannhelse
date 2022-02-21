import { CleanSchema } from '@lib/interface'
import { getClient } from '@lib/sanity'
import { groq } from 'next-sanity'

import type * as Schema from '../schema'

export type Frontpage = CleanSchema<Schema.Frontpage>

export const getFrontpageQuery = groq`
  *[_type == "frontpage"][0] {
    ...,
      introSection {
        ...,
        ctas[] {
          ...,
            route->
        }
      }
  }
`

export const getFrontpage = async (preview: boolean) =>
  getClient(preview).fetch<Frontpage>(getFrontpageQuery)
