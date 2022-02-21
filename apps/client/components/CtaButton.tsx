import React from 'react'
import Link from 'next/link'
import { Cta as CtaSchema, Route } from '@lib/schema'

export interface CtaButtonProps {
  data?: CtaSchema
}

export default function CtaButton({ data }: CtaButtonProps) {
  if (!data) return null
  const { title, link } = data
  const route = data.route as unknown as Route

  if (route && route.slug && route.slug.current) {
    return (
      <Link href={`/${route.slug.current}`} passHref>
        <a href="replace" className="btn btn-primary">
          {title}
        </a>
      </Link>
    )
  }

  if (link) {
    return (
      <a className="btn btn-primary" href={link}>
        {title}
      </a>
    )
  }

  return <button className="btn btn-primary">{title}</button>
}
