import { defineField, defineType } from 'sanity'

import { createDefaultSlug, withMaxChar } from './utils'

export default defineType({
  name: 'process',
  title: 'Process',
  type: 'object',

  fields: [
    createDefaultSlug(),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'string',
      validation: withMaxChar(),
      description: 'The header to display when the fold-out panel is closed.'
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'text',
      validation: withMaxChar(true, 2500),
      description: 'The body to display when the fold-out panel is expanded.'
    }),
  ],

  preview: {
    select: {
      title: 'summary',
    },
  },
})
