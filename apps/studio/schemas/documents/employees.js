export default {
  name: 'employees',
  title: 'Ansatte',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Bilde',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'name',
      title: 'Navn',
      type: 'object',
      codegen: { required: true },
      validation: (rule) => [rule.required()],
      fields: [
        {
          name: 'firstName',
          title: 'Fornavn',
          type: 'string',
          codegen: { required: true },
          validation: (rule) => [rule.required()]
        },
        {
          name: 'lastName',
          title: 'Etternavn',
          type: 'string',
          codegen: { required: true },
          validation: (rule) => [rule.required()]
        }
      ]
    },
    {
      name: 'jobTitle',
      type: 'string',
      title: 'Stilling',
      codegen: { required: true },
      validation: (rule) => [rule.required()]
    },
    {
      name: 'description',
      title: 'Beskrivelse',
      type: 'blockContent'
    }
  ],
  preview: {
    select: {
      name: 'name',
      jobTitle: 'jobTitle'
    },
    prepare({ name, jobTitle }) {
      const { firstName, lastName } = name
      return {
        title: `${firstName} ${lastName}`,
        subtitle: jobTitle
      }
    }
  }
}
