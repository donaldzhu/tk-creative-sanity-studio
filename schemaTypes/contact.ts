import { defineField, defineType } from 'sanity'

import { createDefaultSlug, withMaxChar } from './utils'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    createDefaultSlug(),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Contact',
      hidden: true,
    }),
    defineField({
      name: 'contactDescription',
      title: 'Contact Description',
      type: 'blockContent',
      validation: rule => rule.required(),
      description: 'A short copy for the contact menu pop-up.'
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: withMaxChar()
    }),
    defineField({
      name: 'googleMapLink',
      title: 'Google Map Link',
      type: 'url',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: withMaxChar()
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: withMaxChar()
    }),
    defineField({
      name: 'instagramHandle',
      title: 'Instagram Handle',
      type: 'string',
      validation: withMaxChar(),
      description: 'Please prefix your handle with the "@" symbol.'
    }),
  ],
})
