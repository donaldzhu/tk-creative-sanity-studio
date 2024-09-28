import { defineField, defineType } from 'sanity'

import { createDefaultSlug } from './utils'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    createDefaultSlug(),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Projects',
      hidden: true,
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{ type: 'project' }],
      validation: rule => rule.required()
    }),
  ],
})
