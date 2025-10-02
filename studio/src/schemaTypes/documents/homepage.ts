import {defineType, defineField} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'heroQuote',
      title: 'Hero Quote',
      type: 'text',
      rows: 4,
      description: 'The opening quote at the top of the homepage',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'heroSubheading',
      title: 'Hero Subheading',
      type: 'text',
      rows: 6,
      description: 'Main description of A Dream Factory',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      description: 'Text for the main call-to-action button',
      initialValue: 'How can we be of service?',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'missionStatement',
      title: 'Mission Statement',
      type: 'text',
      rows: 3,
      description: 'Your mission statement for the "Why A Dream Factory" section'
    }),
    defineField({
      name: 'visionStatement',
      title: 'Vision Statement',
      type: 'text',
      rows: 3,
      description: 'Your vision statement for the "Why A Dream Factory" section'
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Homepage Content'
      }
    }
  }
})
