import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import structure, {getDefaultDocumentNode} from './structure'

export default defineConfig({
  name: 'default',
  title: 'rgweb',

  projectId: '72gj895b',
  dataset: 'production',

  plugins: [
    deskTool({
      structure,
      defaultDocumentNode: getDefaultDocumentNode,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  // Add preview configuration
  preview: {
    previewUrl: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },
})
