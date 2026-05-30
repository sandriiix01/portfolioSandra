import type {StructureResolver} from 'sanity/structure'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export const deskStructure: StructureResolver = (S, context) =>
  S.list()
    .title('Contenido')
    .items([
      orderableDocumentListDeskItem({
        type: 'proyecto',
        title: 'Proyectos (orden manual)',
        S,
        context,
      }),
      ...S.documentTypeListItems().filter((item) => item.getId() !== 'proyecto'),
    ])
