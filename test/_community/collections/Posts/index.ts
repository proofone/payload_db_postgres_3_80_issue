import type { CollectionConfig } from 'payload'

import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  admin: {
    useAsTitle: 'title',
    enableListViewSelectAPI: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures],
      }),
    },
    {
      name: 'coverImage',
      label: {
        hu: 'Borítókép',
      },
      type: 'relationship',
      relationTo: 'media',
      filterOptions: {
        mimeType: { contains: 'image' },
      },
      // admin: {
      //   allowEdit: false,
      //   components: {
      //     afterInput: ['/components/admin-image-preview#ImagePreviewField']
      //   }
      // },
      required: true,
    },
  ],
}
