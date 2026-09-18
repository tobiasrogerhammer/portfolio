export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-05-05'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? ''

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? ''

/**
 * True when Sanity environment variables are configured. Use this to gate
 * data fetching so builds don't fail when env vars are missing (e.g. on a
 * preview branch without the CMS wired up).
 */
export const isSanityConfigured = Boolean(dataset && projectId)

if (!isSanityConfigured && typeof window === 'undefined') {
  // Log a build-time warning so misconfigurations are obvious in Vercel logs.
  console.warn(
    '[sanity] NEXT_PUBLIC_SANITY_DATASET or NEXT_PUBLIC_SANITY_PROJECT_ID is missing. ' +
      'Sanity-backed pages will render empty fallbacks until these are configured.'
  )
}
