import { Rule } from '@sanity/types'

export default {
  title: 'CTA',
  name: 'cta',
  type: 'object',
  description:
    'CTA står for Call-to-Action, og benyttes hyppig innen markedsføring. CTA kan på norsk oversettes til «oppfordring til handling», siden du oppfordrer besøkende på nettsiden til å gjøre noe. Helt konkret er en CTA en klikkbar lenke, et bilde eller en knapp som oppfordrer til en handling',
  validation: (rule: Rule) =>
    rule.custom(
      (fields = {} as any) =>
        !(fields as any).route ||
        !(fields as any).link ||
        'Only one link type is allowed'
    ),
  fieldsets: [
    {
      title: 'Link',
      name: 'link'
    }
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      codegen: { required: true },
      validation: (rule: Rule) => [rule.required()]
    },
    {
      title: 'Internal link',
      description: 'Use this to link between pages on the website',
      name: 'route',
      type: 'reference',
      to: [{ type: 'route' }],
      fieldset: 'link'
    },
    {
      title: 'External link',
      name: 'link',
      type: 'url',
      fieldset: 'link'
    }
  ],
  preview: {
    select: {
      title: 'title',
      routeTitle: 'route.title',
      slug: 'route.slug.current',
      link: 'link'
    },
    prepare({ title, routeTitle = '', slug, link }) {
      // eslint-disable-next-line no-nested-ternary
      const subtitleExtra = slug
        ? `Slug:/${slug}/`
        : link
        ? `External link: ${link}`
        : 'Not set'
      return {
        title: `${title}`,
        subtitle: `${routeTitle} ${subtitleExtra}`
      }
    }
  }
}
