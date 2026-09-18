import {createClient} from 'next-sanity'

import {apiVersion, dataset, isSanityConfigured, projectId} from './env'

/**
 * Sanity client. When env vars are missing we still construct a client using
 * placeholder values so that module import never throws. Callers must gate
 * real network calls with `isSanityConfigured` (or wrap `client.fetch` in a
 * try/catch — which we do at every call site).
 */
export const client = createClient({
  projectId: projectId || 'placeholder',
  dataset: dataset || 'placeholder',
  apiVersion,
  useCdn: true,
})

export {isSanityConfigured}
