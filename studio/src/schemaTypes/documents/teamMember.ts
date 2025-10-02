export default {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string'
    },
    {
      name: 'bio',
      title: 'Bio (12 words max)',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.max(100)
    },
    {
      name: 'headshot',
      title: 'Headshot',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number'
    }
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ]
}
