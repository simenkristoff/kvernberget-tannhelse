import { Rule } from '@sanity/types'

export default {
  type: 'object',
  name: 'heroSection',
  title: 'Introseksjon',
  groups: [
    {
      name: 'general',
      title: 'Generelt'
    },
    {
      name: 'imageSettings',
      title: 'Bildeinnstillinger'
    },
    {
      name: 'actions',
      title: 'Handlinger'
    }
  ],
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Overskrift',
      group: 'general'
    },
    {
      name: 'content',
      type: 'simplePortableText',
      title: 'Innhold',
      group: 'general',
      codegen: { required: true },
      validation: (rule: Rule) => [rule.required()]
    },
    {
      name: 'contentAlignment',
      type: 'string',
      title: 'Tekstplassering',
      options: {
        list: [
          { title: 'Venstre', value: 'left' },
          { title: 'Midten', value: 'center' },
          { title: 'Høyre', value: 'right' }
        ]
      },
      group: 'general',
      codegen: { required: true },
      validation: (rule: Rule) => [rule.required()]
    },
    {
      name: 'centerTextOnMobile',
      type: 'boolean',
      title: 'Sentrer tekst på små skjermstørrelser',
      group: 'general',
      codegen: { required: true },
      validation: (rule: Rule) => [rule.required()]
    },
    {
      name: 'image',
      type: 'altImage',
      title: 'Bilde',
      group: 'imageSettings',
      codegen: { required: true },
      validation: (rule: Rule) => [rule.required()],
      options: {
        hotspot: true
      }
    },
    {
      name: 'cta',
      type: 'cta',
      group: 'actions'
    }
  ],
  initialValue: {
    centerTextOnMobile: true,
    contentAlignment: 'center'
  },
  preview: {
    select: {
      title: 'heading',
      media: 'image'
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Introseksjon',
        media
      }
    }
  }
}
