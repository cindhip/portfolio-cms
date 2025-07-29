import type { CollectionConfig } from 'payload'

export const Project: CollectionConfig = {
  slug: 'projects',
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
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'url',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'cloudinary_id',
          type: 'text',
          admin: {
            description: 'Cloudinary ID for this image',
          },
        },
      ],
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
