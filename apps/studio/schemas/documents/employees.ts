import { Rule } from "@sanity/types";

export default {
  name: "employees",
  title: "Ansatte",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Bilde",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Navn",
      type: "object",
      validation: (rule: Rule) => rule.required(),
      fields: [
        {
          name: "firstName",
          title: "Fornavn",
          type: "string",
          validation: (rule: Rule) => rule.required(),
        },
        {
          name: "lastName",
          title: "Etternavn",
          type: "string",
          validation: (rule: Rule) => rule.required(),
        },
      ],
    },
    {
      name: "jobTitle",
      type: "string",
      title: "Stilling",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "description",
      title: "Beskrivelse",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      name: 'name',
      jobTitle: 'jobTitle',
    },
    prepare ({ name, jobTitle }) {
        const {firstName, lastName} = name
      return {
        title: `${firstName} ${lastName}`,
        subtitle: jobTitle
      }
    }
  }
};
