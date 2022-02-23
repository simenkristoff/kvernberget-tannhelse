// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents
import siteSettings from './documents/siteSettings'
import frontpage from './documents/frontpage'
import route from './documents/route'
import reviews from './documents/reviews'
import post from './documents/post'
import employees from './documents/employees'
import page from './documents/page'

// Objects
import seoMetaData from './objects/seoMetaData'
import dayAndTime from './objects/dayAndTime'
import altImage from './objects/altImage'
import cta from './objects/cta'
import figure from './objects/figure'
import internalLink from './objects/internalLink'
import link from './objects/link'

// Block content
import blockContent from './objects/blockContent/blockContent'
import portableText from './objects/blockContent/portableText'
import simplePortableText from './objects/blockContent/simplePortableText'

// Page sections
import hero from './objects/contentSections/heroSection'
import imageSection from './objects/contentSections/imageSection'
import textSection from './objects/contentSections/textSection'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blockContent,
    seoMetaData,
    dayAndTime,
    altImage,
    internalLink,
    figure,
    link,
    portableText,
    cta,
    simplePortableText,
    hero,
    imageSection,
    textSection,

    route,
    reviews,
    siteSettings,
    frontpage,
    employees,
    post,
    page
  ])
})
