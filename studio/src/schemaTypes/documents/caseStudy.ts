import {defineType, defineField} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'roles',
      title: 'Roles',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: "'A' Studio", value: 'studio' },
              { title: 'Collaboration', value: 'collaboration' },
              { title: 'Taste', value: 'taste' }
            ]
          }
        }
      ]
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
        aiAssist: {
          imageDescriptionField: 'alt',
        },
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: (rule) => {
            return rule.custom((alt, context) => {
              if ((context.document?.coverImage as any)?.asset?._ref && !alt) {
                return 'Required'
              }
              return true
            })
          },
        }
      ],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'challenge',
      title: 'Challenge',
      type: 'blockContent'
    }),
    defineField({
      name: 'approach',
      title: 'Our Approach',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'outcome',
      title: 'Outcome',
      type: 'blockContent'
    }),
    defineField({
      name: 'metrics',
      title: 'Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label' },
            { name: 'value', type: 'string', title: 'Value' }
          ]
        }
      ]
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Alternative text' }
          ]
        }
      ]
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show on homepage',
      initialValue: false
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      featured: 'featured'
    },
    prepare({title, media, featured}) {
      return {
        title: title,
        subtitle: featured ? 'Featured Case Study' : 'Case Study',
        media: media
      }
    }
  }
})
