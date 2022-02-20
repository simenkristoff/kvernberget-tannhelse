import { getClient } from '@lib/sanity'
import { groq } from 'next-sanity'
import type * as Schema from '../schema'

export const getSiteSettingsQuery = groq`
    *[_type == "siteSettings"] {
    ...
    }[0]
`

export type GetSiteSettingsQueryResult = Schema.SiteSettings

export const getSiteSettings = async () => getClient(false).fetch<GetSiteSettingsQueryResult>(getSiteSettingsQuery)
