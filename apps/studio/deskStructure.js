import S from '@sanity/desk-tool/structure-builder'

export default () => S.list()
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
    ...S.documentTypeListItems().filter((listItem) => !['siteSettings'].includes(listItem.getId()))
  ])
