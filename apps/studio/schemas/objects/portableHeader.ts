import { MdPalette } from 'react-icons/md'

export default {
  title: 'Simple Portable Header',
  name: 'portableHeader',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' }
      ],
      lists: [],
      marks: {
        decorators: [],
        annotations: [
          {
            name: 'color',
            title: 'Farge',
            type: 'color',
            icon: MdPalette
          }
        ]
      }
    }
  ]
}
