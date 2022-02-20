import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

function Cta(props: any) {
  const { title, route, link } = props

  if (route && route.slug && route.slug.current) {
    return (
      <Link href={`/${route.slug.current}`}>
        <a className="btn btn-primary">{title}</a>
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

  return <a className="btn btn-primary">{title}</a>
}

Cta.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.shape({
    slug: PropTypes.shape({
      current: PropTypes.string
    })
  }),
  link: PropTypes.string
}

export default Cta
