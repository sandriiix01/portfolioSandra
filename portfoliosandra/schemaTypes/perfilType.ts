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
      name: 'ocupacion',
      title: 'Ocupación',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
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
  ],
})