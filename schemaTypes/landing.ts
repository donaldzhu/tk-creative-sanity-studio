import { defineField, defineType } from 'sanity'

import { createDefaultSlug, withMaxChar } from './utils'

export default defineType({
  name: 'landing',
  title: 'Landing',
  type: 'document',
  fields: [
    createDefaultSlug(),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Landing',
      hidden: true,
    }),
    defineField({
      name: 'heroCopy',
      title: 'Hero Copy',
      type: 'text',
      validation: withMaxChar(true, 1000),
      description: 'A short copy that introduces the website.'
    }),
    defineField({
      name: 'landingImages',
      title: 'Landing Images',
      type: 'array',
      of: [{ type: 'landingImage' }],
    }),
  ],
})
