export default {
  name: 'contactSection',
  type: 'object',
  fields: [
    {
      title: 'Vis seksjon',
      name: 'showContactSection',
      type: 'boolean',
      codegen: { required: true },
      validation: (rule) => [rule.required()]
    }
  ],
  initialValue: {
    showBlogSection: true
  }
}
