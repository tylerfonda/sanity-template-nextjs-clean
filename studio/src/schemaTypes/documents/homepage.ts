export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'heroQuote',
      title: 'Hero Quote',
      type: 'text',
      rows: 4
    },
    {
      name: 'heroSubheading',
      title: 'Hero Subheading',
      type: 'text',
      rows: 6
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string'
    },
    {
      name: 'missionStatement',
      title: 'Mission Statement',
      type: 'text'
    },
    {
      name: 'visionStatement',
      title: 'Vision Statement',
      type: 'text'
    }
  ]
}
