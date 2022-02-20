import { getClient } from '@lib/sanity'
import { groq } from 'next-sanity'

import type * as Schema from '../schema'

export const getEmployeesQuery = groq`
    *[_type == "employees"] {
        _id,
        name,
        jobTitle,
        image
    }
`

export type GetEmployeesQueryResult = Array<Schema.Employees>

export const getEmployees = async (preview: boolean) =>
  getClient(preview).fetch<GetEmployeesQueryResult>(getEmployeesQuery)
