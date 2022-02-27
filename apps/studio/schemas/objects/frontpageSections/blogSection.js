export default {
  name: 'blogSection',
  type: 'object',
  fields: [
    {
      title: 'Vis seksjon',
      name: 'showBlogSection',
      type: 'boolean',
      codegen: { required: true },
      validation: (rule) => [rule.required()]
    },
    {
      title: 'Festet innlegg',
      name: 'pinnedPost',
      description:
        'Hvis dette feltet står tomt vil det nyeste innlegget vises på forsiden',
      type: 'reference',
      to: [
        {
          type: 'post'
        }
      ]
    }
  ],
  initialValue: {
    showBlogSection: true
  }
}
