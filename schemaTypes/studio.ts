import { defineField, defineType } from 'sanity'

import { createDefaultSlug, withMaxChar } from './utils'

export default defineType({
  name: 'studio',
  title: 'Studio',
  type: 'document',
  fields: [
    createDefaultSlug(),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Studio',
      hidden: true
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      validation: withMaxChar(true, 2500),
      description: 'TK Creative [↗] is...'
    }),
    defineField({
      name: 'studioImages',
      title: 'Studio Images',
      type: 'array',
      of: [{ type: 'image' }],
      description: 'The images that pop up over the arrow [↗].'
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'blockContent',
      validation: rule => rule.required().max(2500).warning(`Exceeded character count (${2500} characters).`)
    }),
    defineField({
      name: 'process',
      title: 'Process',
      type: 'array',
      of: [{ type: 'process' }],
      validation: rule => rule.required(),
      description: 'The list of steps in the process section.'
    }),
  ],
})
