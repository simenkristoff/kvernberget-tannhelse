import { SanityDocument } from 'sanity-codegen'

export type CleanSchema<T extends SanityDocument> = Omit<T, '_rev' | '_type'>
