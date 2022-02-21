import { CleanSchema } from '@lib/interface'
import { getClient } from '@lib/sanity'
import { groq } from 'next-sanity'

import type * as Schema from '../schema'

export type Page = CleanSchema<Schema.Page>
export type GetPageBySlugParams = { slug: string }

export const getPageBySlugQuery = groq`
    *[_type == "page" && slug.current == $slug][0]{
        ...
        }
`

export const getPageBySlug = async (
  preview: boolean,
  params: GetPageBySlugParams
) => getClient(preview).fetch<Page>(getPageBySlugQuery, params)
