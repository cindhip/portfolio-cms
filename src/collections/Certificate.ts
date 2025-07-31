import type { CollectionConfig } from 'payload'

export const Certificate: CollectionConfig = {
  slug: 'certificates',
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
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
  timestamps: true,
}
