import {defineField, defineType} from 'sanity'

// Helper para campos traducibles
const localizedString = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'object',
    fields: [
      defineField({
        name: 'es',
        title: 'Español',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'en',
        title: 'English',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
    ],
  })

const localizedText = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'object',
    fields: [
      defineField({
        name: 'es',
        title: 'Español',
        type: 'text',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'en',
        title: 'English',
        type: 'text',
        validation: (rule) => rule.required(),
      }),
    ],
  })

export const proyectoType = defineType({
  name: 'proyecto',
  title: 'Proyecto',
  type: 'document',
  preview: {
    select: {
      title: 'titulo.es', // Mostrar el título en español
      media: 'imagencover', // Mostrar la imagen de portada
    },
    prepare({title, media}) {
      return {
        title: title || 'Sin título',
        media,
      }
    },
  },
  fields: [
    // Título traducible
    localizedString('titulo', 'Título'),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        // El slug se genera a partir del título en español
        source: (doc) => (doc.titulo as {es?: string} | undefined)?.es || '',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (rule) => rule.required(),
    }),

    // Descripción corta traducible
    localizedText('descripcioncorta', 'Descripción corta'),

    defineField({
      name: 'imagencover',
      title: 'Imagen de portada',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    // Tags traducibles
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'tag'}],
          options: {
            filter: '!(_id in path("drafts.**"))',
          },
        },
      ],
      options: {layout: 'tags'},
      validation: (rule) => rule.required().min(1).unique(),
    }),

    defineField({
      name: 'anio',
      title: 'Año',
      type: 'number',
      validation: (rule) => rule.required(),
    }),

    // Labels de links traducibles
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Texto',
              type: 'object',
              fields: [
                {name: 'es', title: 'Español', type: 'string'},
                {name: 'en', title: 'English', type: 'string'},
              ],
            }),
            {name: 'url', title: 'URL', type: 'url'},
          ],
        },
      ],
    }),

    defineField({
      name: 'youtubeLinks',
      title: 'Enlaces de YouTube',
      description:
        'Opcional: puedes añadir 0, 1 o varios enlaces de YouTube. Le das a compartir en YouTube, le das a insertar, te muestra el iframe y de ahí SOLO copias el enlace que esta dentro de src entre comillas.',
      type: 'array',
      of: [
        defineField({
          name: 'url',
          title: 'URL de YouTube',
          type: 'url',
          validation: (rule) =>
            rule.uri({scheme: ['http', 'https']}).custom((value) => {
              if (!value) {
                return true
              }

              return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//i.test(value)
                ? true
                : 'Solo se permiten enlaces de YouTube (youtube.com o youtu.be).'
            }),
        }),
      ],
      validation: (rule) => rule.unique().max(4),
    }),

    // INTRODUCCIÓN
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
          validation: (rule) => rule.min(1),
        }),
        localizedText('texto', 'Texto'),
      ],
    }),

    // TÉCNICAS
    defineField({
      name: 'tecnicas',
      title: 'Técnicas',
      type: 'object',
      fields: [
        localizedText('texto', 'Texto'),
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
          of: [
            {
              type: 'reference',
              to: [{type: 'tag'}],
              options: {
                filter: '!(_id in path("drafts.**"))',
              },
            },
          ],
          options: {layout: 'tags'},
          validation: (rule) => rule.unique(),
        }),
      ],
    }),

    // MENSAJE
    defineField({
      name: 'mensaje',
      title: 'Mensaje',
      type: 'object',
      fields: [
        localizedText('texto', 'Texto'),
        defineField({
          name: 'imagenes',
          title: 'Imágenes',
          type: 'array',
          of: [{type: 'image'}],
        }),
      ],
    }),

    // INSPIRACIÓN
    defineField({
      name: 'inspiracion',
      title: 'Inspiración',
      type: 'object',
      fields: [
        localizedText('texto', 'Texto'),
        defineField({
          name: 'imagenes',
          title: 'Imágenes',
          type: 'array',
          of: [{type: 'image'}],
        }),
      ],
    }),

    // INTENCIÓN
    defineField({
      name: 'intencion',
      title: 'Intención',
      type: 'object',
      fields: [
        localizedText('texto', 'Texto'),
        defineField({
          name: 'imagenes',
          title: 'Imágenes',
          type: 'array',
          of: [{type: 'image'}],
        }),
      ],
    }),

    // Texto final traducible
    localizedText('informacionRecalcable', 'Información Recalcable'),
  ],
})
