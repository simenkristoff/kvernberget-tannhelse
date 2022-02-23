import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { upperFirst } from 'lodash'

import * as SectionComponents from '.'

function resolveSections(section: any) {
  // eslint-disable-next-line import/namespace
  const SectionComps = SectionComponents as any
  const Section = SectionComps[upperFirst(section._type as any)]
  if (Section) {
    return Section
  }

  console.error('Cant find section', section) // eslint-disable-line no-console
  return null
}

interface RenderSectionsProps {
  sections: any
  title: string
}

function RenderSections({ sections, title }: RenderSectionsProps) {
  if (!sections) {
    console.error('Missing section')
    return <div>Missing sections</div>
  }

  return (
    <Fragment>
      {sections.map((section: any, i: number) => {
        const SectionComponent = resolveSections(section)
        if (!SectionComponent) {
          return <div>Missing section {section._type}</div>
        }
        return (
          <SectionComponent
            data={section}
            title={i === 0 ? title : undefined}
            key={section._key}
          />
        )
      })}
    </Fragment>
  )
}

RenderSections.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      _type: PropTypes.string,
      _key: PropTypes.string,
      section: PropTypes.instanceOf(Object)
    })
  )
}

export default RenderSections
