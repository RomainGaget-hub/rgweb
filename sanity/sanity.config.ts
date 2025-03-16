import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'rgweb',

  projectId: '72gj895b',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  // Add preview configuration
  preview: {
    previewUrl: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },
})
