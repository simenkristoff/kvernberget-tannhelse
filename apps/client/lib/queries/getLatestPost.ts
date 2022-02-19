import { getClient } from '@lib/sanity'
import { groq } from 'next-sanity'
import type * as Schema from '../schema'

export const getLatestPostQuery = groq`
    *[_type == "post"] | order(publishedAt){
        ...
    }[0]
`

export type GetLatestPostQueryResult = Schema.Post

export const getLatestPost = async (preview: boolean) => getClient(preview).fetch<GetLatestPostQueryResult>(getLatestPostQuery)
