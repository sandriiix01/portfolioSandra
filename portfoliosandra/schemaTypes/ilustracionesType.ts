import {defineField, defineType} from 'sanity'

export const ilustracionesType = defineType({
  name: 'ilustraciones',
  title: 'Ilustraciones',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Titulo',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tituloEn',
      title: 'Title (English)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imagenes',
      title: 'Imagenes',
      type: 'array',
      of: [
        defineField({
          name: 'imagen',
          title: 'Imagen',
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Texto alternativo',
              type: 'string',
            }),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'titulo',
      media: 'imagenes.0',
      subtitle: 'tituloEn',
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      return {
        title,
        subtitle,
        media,
      }
    },
  },
})
