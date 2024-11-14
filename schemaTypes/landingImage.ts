import { defineField, defineType } from 'sanity'

import { createDefaultSlug } from './utils'

export default defineType({
  name: 'landingImage',
  title: 'Landing Image',
  type: 'object',

  fields: [
    createDefaultSlug(),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'size',
      title: 'Image Size',
      type: 'number',
      options: {
        list: [
          { title: '1 - Extra Narrow', value: 1 },
          { title: '2 - Narrow', value: 2 },
          { title: '3 - Regular Width', value: 3 },
          { title: '4 - Wide', value: 4 },
          { title: '5 - Extra Wide', value: 5 },
        ],
      },
      initialValue: 3,
      validation: rule => rule.required(),
      description: 'Select one of the following image widths.'
    }),
  ],

  preview: {
    select: {
      title: 'image.asset._ref',
      media: 'image'
    }
  },
})
