import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { visionTool } from '@sanity/vision'

import { schemaTypes } from './schemaTypes'
import { structure } from './src/deskStructure'

export default defineConfig({
  name: 'default',
  title: 'tk-creative',

  projectId: 'l3z81xl1',
  dataset: 'production',

  plugins: [structureTool({ structure }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
