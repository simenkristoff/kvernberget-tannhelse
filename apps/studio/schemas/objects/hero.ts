import { Rule } from '@sanity/types'

export default {
  type: 'object',
  name: 'hero',
  title: 'Hero',
  fields: [
    {
      name: 'heading',
      type: 'portableHeader',
      title: 'Heading'
    },
    {
      name: 'hideImageOnMobile',
      type: 'boolean',
      title: 'Skjul bildet på små skjermstørrelser',
      initialValue: true,
      codegen: { required: true },
      validation: (rule: Rule) => [rule.required()]
    },
    {
      name: 'centerTextOnMobile',
      type: 'boolean',
      title: 'Sentrer text på små skjermstørrelser',
      initialValue: true,
      codegen: { required: true },
      validation: (rule: Rule) => [rule.required()]
    },
    {
      name: 'tagline',
      type: 'simplePortableText',
      title: 'Tagline'
    },
    {
      name: 'backgroundImage',
      type: 'altImage',
      title: 'Bakgrunnsbilde',
      options: {
        hotspot: true
      }
    },
    {
      name: 'ctas',
      type: 'array',
      title: 'Call to actions',
      of: [
        {
          title: 'Call to action',
          type: 'cta'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'backgroundImage'
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Hero section',
        media
      }
    }
  }
}
