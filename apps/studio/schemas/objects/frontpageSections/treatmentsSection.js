export default {
  name: 'treatmentsSection',
  type: 'object',
  fields: [
    {
      title: 'Vis seksjon',
      name: 'showTreatmentsSection',
      type: 'boolean',
      codegen: { required: true },
      validation: (rule) => [rule.required()]
    }
  ],
  initialValue: {
    showBlogSection: true
  }
}
