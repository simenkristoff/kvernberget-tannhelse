import preview from 'part:sanity-plugin-icon-picker/preview'

export default {
  title: 'Salgspunkt',
  name: 'service',
  type: 'object',
  fields: [
    {
      title: 'Tittel',
      name: 'title',
      type: 'string',
      codegen: { required: true },
      validation: (rule) => [rule.required()]
    },
    {
      title: 'Beskrivelse',
      name: 'description',
      type: 'text',
      codegen: { required: true },
      validation: (rule) => [rule.required()]
    },
    {
      title: 'Ikon',
      name: 'icon',
      type: 'iconPicker',
      codegen: { required: true },
      validation: (rule) => [rule.required()],
      options: {
        outputFormat: 'react',
        providers: ['hi']
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
      provider: 'icon.provider',
      name: 'icon.name'
    },
    prepare(icon) {
      return {
        title: icon.title,
        subtitle: icon.description,
        media: preview({ name: icon.name, provider: icon.provider })
      }
    }
  }
}
