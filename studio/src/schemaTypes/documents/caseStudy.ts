export default {
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
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
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'text',
      rows: 3
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text'
        }
      ]
    },
    {
      name: 'challenge',
      title: 'Challenge',
      type: 'blockContent'
    },
    {
      name: 'approach',
      title: 'Our Approach',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'outcome',
      title: 'Outcome',
      type: 'blockContent'
    },
    {
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
    },
    {
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
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show on homepage'
    }
  ]
}
