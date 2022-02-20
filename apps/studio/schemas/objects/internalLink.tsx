import React from 'react'

const InternalLinkRender = ({ children }: { children: React.ReactNode }) => (
  <span>{children} 🔗</span>
)

export default {
  title: 'Internal link to another document',
  name: 'internalLink',
  type: 'reference',
  description: 'Locate a document you want to link to',
  to: [{ type: 'route' }],
  blockEditor: {
    icon: () => '🔗',
    render: InternalLinkRender
  }
}
