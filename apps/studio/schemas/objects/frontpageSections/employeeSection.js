export default {
  name: 'employeeSection',
  type: 'object',
  fields: [
    {
      title: 'Vis seksjon',
      name: 'showEmployeeSection',
      type: 'boolean',
      codegen: { required: true },
      validation: (rule) => [rule.required()]
    }
  ],
  initialValue: {
    showBlogSection: true
  }
}
