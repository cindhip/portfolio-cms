import type { CollectionConfig } from 'payload'

export const Design: CollectionConfig = {
  slug: 'designs',
  admin: {
    useAsTitle: 'title',
    group: 'Portfolio',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
  timestamps: true,
}
