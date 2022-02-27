import { CleanSchema } from '@lib/interface'
import { getClient } from '@lib/sanity'
import { groq } from 'next-sanity'

import type * as Schema from '../schema'

export type FrontpageSettings = CleanSchema<Schema.Frontpage>

export const getFrontpageSettingsQuery = groq`
  *[_type == "frontpage"][0] {
    ...
  }
`

export const getFrontpageSettings = async (preview: boolean) =>
  getClient(preview).fetch<FrontpageSettings>(getFrontpageSettingsQuery)
