import {defineField, defineType} from 'sanity'

export const proyectoType = defineType({
  name: 'proyecto',
  title: 'Proyecto',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'titulo',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'descripcioncorta',
      title: 'Descripción corta',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
  name: 'imagencover',
  title: 'Imagen de portada',
  type: 'image',
  options: {
    hotspot: true,
  },
}),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'anio',
      title: 'Año',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', title: 'Texto', type: 'string'},
            {name: 'url', title: 'URL', type: 'url'},
          ],
        },
      ],
    }),
    defineField({
      name: 'introduccion',
      title: 'Introducción',
      type: 'object',
      validation: (rule) => rule.required(), 
      fields: [
        defineField({
          name: 'imagenes',
          title: 'Imágenes',
          type: 'array',
          of: [{type: 'image'}],
          validation: (rule) => rule.min(1).error('Añade al menos una imagen'),
        }),
        defineField({
          name: 'texto',
          title: 'Texto',
          type: 'text',
          validation: (rule) => rule.required(),
        }),
      ],
    }),

    defineField({
      name: 'tecnicas',
      title: 'Técnicas',
      type: 'object',
      fields: [
        defineField({
          name: 'texto',
          title: 'Texto',
          type: 'text',
        }),
        defineField({
          name: 'imagenes',
          title: 'Imágenes',
          type: 'array',
          of: [{type: 'image'}],
        }),
        defineField({
          name: 'tags',
          title: 'Tags',
          type: 'array',
          of: [{type: 'string'}],
          options: {layout: 'tags'},
        }),
      ],
    }),
    defineField({
      name: 'mensaje',
      title: 'Mensaje',
      type: 'object',
      fields: [
        defineField({
          name: 'texto',
          title: 'Texto',
          type: 'text',
        }),
        defineField({
          name: 'imagenes',
          title: 'Imágenes',
          type: 'array',
          of: [{type: 'image'}],
        }),
      ],
    }),
    defineField({
      name: 'inspiracion',
      title: 'Inspiración',
      type: 'object',
      fields: [
        defineField({
          name: 'texto',
          title: 'Texto',
          type: 'text',
        }),
        defineField({
          name: 'imagenes',
          title: 'Imágenes',
          type: 'array',
          of: [{type: 'image'}],
        }),
      ],
    }),
    defineField({
      name: 'intencion',
      title: 'Intención',
      type: 'object',
      fields: [
        defineField({
          name: 'texto',
          title: 'Texto',
          type: 'text',
        }),
        defineField({
          name: 'imagenes',
          title: 'Imágenes',
          type: 'array',
          of: [{type: 'image'}],
        }),
      ],
    }),
    defineField({
      name: 'informacionRecalcable',
      title: 'Información Recalcable',
      type: 'text',
    }),
  ],
})
