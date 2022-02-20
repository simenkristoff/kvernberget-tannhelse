export default {
  name: "seoMetaData",
  type: "object",
  fields: [
    {
      name: "description",
      type: "text",
      title: "Metabeskrivelse",
      description: "Beskrivelse som vises når denne siden dukker opp i søkeresultater eller deles på sosiale medier.",
    },
    {
      name: "openGraphImage",
      type: "image",
      title: "Metabilde",
      description: "Dette bildet forhåndsvises når denne siden deles på sosiale medier.",
      options: { hotspot: true },
    },
  ],
};
