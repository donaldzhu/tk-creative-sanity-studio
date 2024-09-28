import type { StructureBuilder } from 'sanity/structure'


export const structure = (S: StructureBuilder) => // S.defaults()
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Landing Page')
        .child(
          S.editor()
            .id('landing')
            .schemaType('landing')
            .documentId('landing')
            .title('Landing Page')
        ),
      S.listItem()
        .title('Projects Page')
        .child(
          S.editor()
            .id('projects')
            .schemaType('projects')
            .documentId('projects')
            .title('Projects Page')
        ),
      S.listItem()
        .title('Studio Page')
        .child(
          S.editor()
            .id('studio')
            .schemaType('studio')
            .documentId('studio')
            .title('Studio Page')
        ),
      S.listItem()
        .title('Contact')
        .child(
          S.editor()
            .id('contact')
            .schemaType('contact')
            .documentId('contact')
            .title('Contact')
        )
    ])