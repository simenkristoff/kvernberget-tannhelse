import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Innhold')
    .items([
      S.listItem()
        .title('Sideinnstillinger')
        .child(
          S.document()
            .title('Innstillinger')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Forside')
        .child(
          S.document()
            .title('Innstillinger')
            .schemaType('frontpage')
            .documentId('frontpage')
        ),
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteSettings', 'frontpage'].includes(listItem.getId())
      )
    ])
