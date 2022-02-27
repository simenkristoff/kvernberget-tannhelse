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
import service from './objects/service'

// Frontpage sections
import introSection from './objects/frontpageSections/introSection'
import treatmentsSection from './objects/frontpageSections/treatmentsSection'
import reviewsSection from './objects/frontpageSections/reviewsSection'
import blogSection from './objects/frontpageSections/blogSection'
import contactSection from './objects/frontpageSections/contactSection'
import employeeSection from './objects/frontpageSections/employeeSection'

// Block content
import blockContent from './objects/blockContent/blockContent'
import portableText from './objects/blockContent/portableText'
import simplePortableText from './objects/blockContent/simplePortableText'

// Page sections
import heroSection from './objects/contentSections/heroSection'
import imageSection from './objects/contentSections/imageSection'
import textSection from './objects/contentSections/textSection'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // Objects
    seoMetaData,
    dayAndTime,
    altImage,
    internalLink,
    figure,
    link,
    cta,
    service,

    // Block content
    blockContent,
    portableText,
    simplePortableText,

    // Content sections
    heroSection,
    imageSection,
    textSection,

    // Frontpage sections
    introSection,
    treatmentsSection,
    reviewsSection,
    blogSection,
    contactSection,
    employeeSection,

    // Documents
    route,
    reviews,
    siteSettings,
    frontpage,
    employees,
    post,
    page
  ])
})
