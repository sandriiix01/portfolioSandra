import {defineField, defineType} from 'sanity'

export const tagType = defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'ID',
      type: 'slug',
      hidden: true,
      readOnly: true,
      initialValue: () => ({
        _type: 'slug',
        current: `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
      }),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Etiqueta',
      type: 'object',
      fields: [
        defineField({
          name: 'es',
          title: 'Espanol',
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Tag destacada',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'switch',
      },
    }),
  ],
  preview: {
    select: {
      title: 'label.es',
      subtitle: 'slug.current',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Tag sin nombre',
        subtitle: subtitle ? `id: ${subtitle}` : 'id pendiente',
      }
    },
  },
})
