import React from 'react'

// eslint-disable-next-line react/prop-types
const LinkRender = ({ children }) => <span>{children} 🌍</span>

export default {
  title: 'URL',
  name: 'link',
  type: 'object',
  fields: [
    {
      title: 'URL',
      name: 'href',
      type: 'url',
      validation: (rule) =>
        rule.uri({
          allowRelative: true,
          scheme: ['https', 'http', 'mailto', 'tel']
        })
    }
  ],
  blockEditor: {
    icon: () => '🌍',
    render: LinkRender
  }
}
