import { Rule } from '@sanity/types'
import { chain } from 'lodash'

const verifyOpeningHours = (openingHours: any) => {
  const nonUniq = chain(openingHours).groupBy('day').pickBy(x => x.length > 1).keys().value()
  if (nonUniq.length > 0) {
    return `Ugyldig verdier.. ${nonUniq.join(', ')} gjentas flere ganger`
  }
  
  return true
}

// schemas/siteSettings.js
export default {
  name: 'siteSettings',
  title: 'Innstillinger',
  type: 'document',
  __experimental_actions: ['create', 'update', 'delete', 'publish'], 
  groups: [
    {
      name: 'general',
      title: 'Generelt'
    },
    {
      name: 'availability',
      title: 'Åpningstider'
    }
  ],
  fields: [
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      group: 'general'
    },
    {
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      group: 'general'
    },
    {
      title: "siteLogo",
      name: 'logo',
      type: "image",
      group: 'general',
      options: {hotspot: true},
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessibility",
          options: {
            isHighlighted: true,
          }
        }
      ]
    },
    {
      type: 'string',
      name: 'address',
      title: 'Address'
    },
    {
      type: 'string',
      name: 'email',
      title: 'Email',
      validation: (rule: Rule) => rule.email()
    },
    {
      type: 'string',
      name: 'phone',
      title: 'Phone number',
      validation: (rule: Rule) => rule.regex(/^\d{8}$/)
    },
    {
      title: "Opening Hours",
      name: "openingHours",
      type: "array",
      of: [{ type: "dayAndTime" }],
      group: 'availability',
      validation: (rule: Rule) => [
        rule.custom(verifyOpeningHours)
      ]
    },
  ],
  initialValue: {
    siteTitle: "Kvernberget Tannhelse",
    siteDescription: "Hei",
    address: "Rørgata 8, 6517 Kristiansund",
    phone: "71670000",
    email: "post@kvernbergettannhelse.no",
    openingHours: [
      {
        day: "Mandag",
        closed: false,
        opensAt: "08:00",
        closesAt: "16:00"
      },
      {
        day: "Tirsdag",
        closed: false,
        opensAt: "08:00",
        closesAt: "16:00"
      },
      {
        day: "Onsdag",
        closed: false,
        opensAt: "08:00",
        closesAt: "16:00"
      },
      {
        day: "Torsdag",
        closed: false,
        opensAt: "08:00",
        closesAt: "17:00"
      },
      {
        day: "Fredag",
        closed: false,
        opensAt: "08:00",
        closesAt: "15:00"
      },
      {
        day: "Lørdag",
        closed: true,
        opensAt: "08:00",
        closesAt: "15:00"
      },
      {
        day: "Søndag",
        closed: true,
        opensAt: "08:00",
        closesAt: "15:00"
      }
    ]
  }
}
