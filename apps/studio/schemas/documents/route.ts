import { MdLink } from "react-icons/md";
import { isUniqueAcrossAllDocuments } from "../../lib/isUniqueAcrossAllDocuments";
import client from "part:@sanity/base/client";

export default {
  name: "route",
  type: "document",
  title: "Route",
  icon: MdLink,
  fields: [
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        isUnique: isUniqueAcrossAllDocuments,
        source: async (doc: any) => {
          const params = {
              ref: doc.page._ref
          }
          const query = `*[references($ref)][0] {
            page->{
            title
          }
          }.page.title`;
          const result = await client.fetch(query, params);
          return result
        },
        maxLength: 96,
      },
    },
    {
      name: "page",
      type: "reference",
      description: "Select the page that this route should point to",
      to: [
        {
          type: "page",
        },
      ],
    },
    {
      name: "includeInSitemap",
      type: "boolean",
      title: "Include page in sitemap",
      description: "For search engines. Will be added to /sitemap.xml",
    },
    {
      name: "disallowRobots",
      type: "boolean",
      title: "Disallow in robots.txt",
      description: "Hide this route for search engines",
    },
  ],
  preview: {
    select: {
      slug: "slug.current",
      pageTitle: "page.title",
    },
    prepare({ slug, pageTitle }) {
      return {
        title: slug === "/" ? "/" : `/${slug}`,
        subtitle: `Page: ${pageTitle}`,
      };
    },
  },
};
