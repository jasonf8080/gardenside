import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'xp4s3zig', // replace this
  dataset: 'production',
  apiVersion: '2025-07-01',     // can be today’s date
  useCdn: true,                 // true = faster but might show stale data
})
