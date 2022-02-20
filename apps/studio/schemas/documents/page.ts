import { isUniqueAcrossAllDocuments } from '../../lib/isUniqueAcrossAllDocuments'

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fieldsets: [
    {
      title: 'SEO',
      name: 'seo',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1
      }
    }
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tittel'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        isUnique: isUniqueAcrossAllDocuments,
        source: 'title'
      }
    },
    {
      name: 'includeInSitemap',
      type: 'boolean',
      title: 'Include page in sitemap',
      description: 'For search engines. Will be added to /sitemap.xml'
    },
    {
      name: 'disallowRobots',
      type: 'boolean',
      title: 'Disallow in robots.txt',
      description: 'Hide this route for search engines'
    },
    {
      name: 'content',
      type: 'array',
      title: 'Seksjoner',
      of: [{ type: 'hero' }, { type: 'imageSection' }, { type: 'textSection' }]
    },
    {
      name: 'meta',
      title: 'Metadata',
      type: 'seoMetaData',
      fieldset: 'seo'
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage'
    }
  },
  prepare(selection) {
    return Object.assign({}, selection)
  }
}
