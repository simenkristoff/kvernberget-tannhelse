import { Rule } from '@sanity/types'

export default {
  type: 'object',
  name: 'textSection',
  title: 'Tekstseksjon',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Overskrift'
    },
    {
      name: 'content',
      type: 'simplePortableText',
      title: 'Innhold'
    }
  ],
  preview: {
    select: {
      heading: 'heading'
    },
    prepare({ heading }) {
      return {
        title: `${heading}`,
        subtitle: 'Tekstseksjon'
      }
    }
  }
}
