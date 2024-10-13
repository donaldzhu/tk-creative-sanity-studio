import { defineField, defineType } from 'sanity'

import { createDefaultSlug, withMaxChar } from './utils'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'object',
  fields: [
    createDefaultSlug(),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: withMaxChar(),
      description: 'The name of the project (ex. Rushton).'
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: withMaxChar(),
      description: 'The location and year of the project (ex. Toronto, 2022).'
    }),
    defineField({
      name: 'projectImage',
      title: 'Project image',
      type: 'image',
      validation: rule => rule.required()
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: withMaxChar(false, 5000)
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'projectImage',
    },
  },
})
