import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface ContentSection<T>
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: T
  title?: string
}
