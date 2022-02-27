export default {
  name: 'reviewsSection',
  type: 'object',
  fields: [
    {
      title: 'Vis seksjon',
      name: 'showReviewsSection',
      type: 'boolean',
      codegen: { required: true },
      validation: (rule) => [rule.required()]
    }
  ],
  initialValue: {
    showBlogSection: true
  }
}
