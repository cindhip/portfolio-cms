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
    {
      name: 'cloudinary_id',
      type: 'text',
      admin: {
        description: 'Cloudinary ID for the image',
      },
    },
  ],
  timestamps: true,
}
