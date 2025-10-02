import {defineType, defineField} from 'sanity'
import {SparklesIcon} from '@sanity/icons'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: SparklesIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'string',
      options: {
        list: [
          { title: "'A' Studio", value: 'studio' },
          { title: 'Collaboration', value: 'collaboration' },
          { title: 'Taste', value: 'taste' }
        ]
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'promise',
      title: 'One-line Promise',
      type: 'string',
      description: 'A concise statement of what this service delivers',
      validation: (Rule) => Rule.required().max(150)
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'promise'
    },
    prepare({title, subtitle}) {
      return {
        title: title,
        subtitle: subtitle
      }
    }
  }
})
