export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'string',
      options: {
        list: [
          { title: "'A' Studio", value: 'studio' },
          { title: 'Collaboration', value: 'collaboration' },
          { title: 'Taste', value: 'taste' }
        ]
      }
    },
    {
      name: 'promise',
      title: 'One-line Promise',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent'
    }
  ]
}
