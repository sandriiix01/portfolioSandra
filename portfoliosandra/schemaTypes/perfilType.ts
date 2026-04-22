import {defineField, defineType} from 'sanity'

export const perfilType = defineType({
  name: 'perfil',
  title: 'Perfil',
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'descripcioncorta',
      title: 'Descripción Corta',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ocupacion',
      title: 'Ocupación',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'descripcion',
      title: 'Esto es el sobre mí',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Skills / Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'avatar',
      title: 'Foto de perfil',
      type: 'image',
    }),
    defineField({
  name: 'programas',
  title: 'Programas',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        defineField({
          name: 'nombre',
          title: 'Programa',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'nivel',
          title: 'Nivel (estrellas)',
          type: 'number',
          options: {
            list: [
              {title: '⭐ 1', value: 1},
              {title: '⭐⭐ 2', value: 2},
              {title: '⭐⭐⭐ 3', value: 3},
              {title: '⭐⭐⭐⭐ 4', value: 4},
              {title: '⭐⭐⭐⭐⭐ 5', value: 5},
            ],
            layout: 'radio', // o 'dropdown'
          },
          validation: (rule) =>
            rule.required().min(1).max(5),
        }),
      ],
      preview: {
        select: {
          title: 'nombre',
          nivel: 'nivel',
        },
        prepare({title, nivel}) {
          return {
            title,
            subtitle: '⭐'.repeat(nivel || 0),
          }
        },
      },
    },
  ],
}),
  ],
})