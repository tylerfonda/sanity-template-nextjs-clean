import {defineType, defineField} from 'sanity'
import {UsersIcon} from '@sanity/icons'

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'bio',
      title: 'Bio (12 words max)',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.max(100).warning('Keep it concise - aim for 12 words or less')
    }),
    defineField({
      name: 'headshot',
      title: 'Headshot',
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
              if ((context.document?.headshot as any)?.asset?._ref && !alt) {
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
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      initialValue: 0
    })
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'headshot',
      order: 'order'
    },
    prepare({title, subtitle, media, order}) {
      return {
        title: title,
        subtitle: `${subtitle} (Order: ${order})`,
        media: media
      }
    }
  }
})
