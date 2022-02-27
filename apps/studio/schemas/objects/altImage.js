export default {
  type: 'object',
  name: 'altImage',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Bilde',
      options: {
        hotspot: true
      }
    },

    {
      name: 'alt',
      type: 'string',
      title: 'Alternativ tekst',
      description:
        'Noen av de besøkende kan ikke se bilder, enten fordi de er blinde, fargeblinde, eller svaksynte; i slike tilfeller benyttes alternativ tekst av nettleseren for å beskrive bildet for brukeren.',
      options: {
        isHighlighted: true
      }
    }
  ]
}
