import { Rule } from '@sanity/types'

export default {
  type: 'object',
  name: 'imageSection',
  title: 'Bildeseksjon',
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
      name: 'hideImageOnMobile',
      type: 'boolean',
      title: 'Skjul bildet på små skjermstørrelser',
      group: 'general',
      codegen: { required: true },
      validation: (rule: Rule) => [rule.required()]
    },
    {
      name: 'imageAlignment',
      type: 'string',
      title: 'Bildeplassering',
      options: {
        list: [
          { title: 'Venstre', value: 'left' },
          { title: 'Høyre', value: 'right' }
        ]
      },
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
    hideImageOnMobile: false,
    imageAlignment: 'right'
  },
  preview: {
    select: {
      title: 'heading',
      media: 'image'
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Bildeseksjon',
        media
      }
    }
  }
}
