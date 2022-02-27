export default {
  name: 'frontpage',
  title: 'Forside',
  type: 'document',
  __experimental_actions: ['create', 'update', 'delete', 'publish'],
  groups: [
    {
      name: 'intro',
      title: 'Introseksjon'
    },
    {
      name: 'treatments',
      title: 'Behandlinger'
    },
    {
      name: 'reviews',
      title: 'Omtaler'
    },
    {
      name: 'blog',
      title: 'Nyheter'
    },
    {
      name: 'contact',
      title: 'Kontaktseksjon'
    },
    {
      name: 'employee',
      title: 'Ansatte'
    }
  ],
  fields: [
    {
      title: 'Introseksjon',
      name: 'introSection',
      type: 'introSection',
      group: 'intro'
    },
    {
      title: 'Behandlinger',
      name: 'treatmentsSection',
      type: 'treatmentsSection',
      group: 'treatments'
    },
    {
      title: 'Omtaler',
      name: 'reviewsSection',
      type: 'reviewsSection',
      group: 'reviews'
    },
    {
      title: 'Nyheter',
      name: 'blogSection',
      type: 'blogSection',
      group: 'blog'
    },
    {
      title: 'Kontaktseksjon',
      name: 'contactSection',
      type: 'contactSection',
      group: 'contact'
    },
    {
      title: 'Ansatte',
      name: 'employeeSection',
      type: 'employeeSection',
      group: 'employee'
    }
  ]
}
