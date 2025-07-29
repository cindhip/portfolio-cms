import type { CollectionConfig } from 'payload'

export const Design: CollectionConfig = {
  slug: 'designs',
  admin: {
    useAsTitle: 'title',
    group: 'Portfolio',
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
    {
      name: 'cloudinary_id',
      type: 'text',
      admin: {
        description: 'Cloudinary ID for the thumbnail',
      },
    },
  ],
  timestamps: true,
}
