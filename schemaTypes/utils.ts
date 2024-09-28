import { defineField, StringRule, ValidationBuilder } from 'sanity'
import slugify from 'slugify'

export const uniqueSlug = () => ({ current: slugify(`${Date.now()}`) })
export const createDefaultSlug = () => defineField({
  name: 'slug',
  title: 'Slug',
  type: 'slug',
  hidden: true,
  initialValue: uniqueSlug,
  options: {
    source: 'title',
    maxLength: 96,
  },
})

export const withMaxChar = (required = true, charCount = 120): ValidationBuilder<StringRule, string> =>
  rule => {
    if (required) rule = rule.required()
    return rule.max(charCount).warning(`Exceeded character count (${charCount} characters).`)
  }