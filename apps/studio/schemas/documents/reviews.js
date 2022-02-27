export default {
  name: 'reviews',
  title: 'Omtaler',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
      codegen: { required: true },
      validation: (rule) => [rule.required()]
    },
    {
      title: 'Rangering',
      name: 'rating',
      type: 'rating',
      codegen: { required: true },
      validation: (rule) => [rule.required()],
      options: {
        stars: 5
      }
    },
    {
      title: 'Omtale',
      name: 'content',
      type: 'text',
      codegen: { required: true },
      validation: (rule) => [rule.required()]
    },
    {
      title: 'Kilde',
      name: 'source',
      description: 'Lenke til nettstedet omtalen er hentet fra',
      type: 'url'
    }
  ],
  preview: {
    select: {
      title: 'title',
      rating: 'rating'
    },
    prepare({ title, rating }) {
      return {
        title,
        subtitle: `Rangering: ${rating}/5`
      }
    }
  }
}
