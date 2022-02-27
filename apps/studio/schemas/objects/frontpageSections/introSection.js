import preview from 'part:sanity-plugin-icon-picker/preview'

export default {
  name: 'introSection',
  type: 'object',
  fields: [
    {
      title: 'Velkomstmelding',
      name: 'introText',
      type: 'text',
      codegen: { required: true },
      validation: (rule) => [rule.required()]
    },
    {
      title: 'Salgspunkter',
      name: 'services',
      type: 'array',
      of: [
        {
          type: 'service'
        }
      ]
    }
  ]
}
