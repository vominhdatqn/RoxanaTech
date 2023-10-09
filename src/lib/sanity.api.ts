export const useCdn = false
// const projectId = 'zu22jc4f'
// const dataset = 'production'
// const apiVersion = '2023-01-01'
/**
 * As this file is reused in several other files, try to keep it lean and small.
 * Importing other npm packages here could lead to needlessly increasing the client bundle size, or end up in a server-only function that don't need it.
 */

export const dataset = assertValue(
    //   process.env.NEXT_PUBLIC_SANITY_DATASET,
    'production',
    'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET',
)

export const projectId = assertValue(
    //   process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    'zu22jc4f',
    'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID',
)

// export const readToken = process.env.SANITY_API_READ_TOKEN || ''
export const readToken = 'skAOFXJl1emV2KRIcVRAVi7VtkmFL35ObBhgobNcxacuEuVJ81iyAY4F3w4ytRMQ6A41ZGVZNbqqgfcLSKnP3rgIFx2rz7fU1NnWkBhCVafGzigqA1HH9wzbbcEruI0V8xpVCqzHN3LT3OiXih9VZw966LfnJGUZzfBLT47HN9tF5sCPsaDd' || ''

// see https://www.sanity.io/docs/api-versioning for how versioning works
export const apiVersion = '2023-01-01'
// export const apiVersion =
//   process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-06-21'

// This is the document id used for the preview secret that's stored in your dataset.
// The secret protects against unauthorized access to your draft content and have a lifetime of 60 minutes, to protect against bruteforcing.
export const previewSecretId: `${string}.${string}` = 'preview.secret'

// Used to generate URLs for previewing your content
export const DRAFT_MODE_ROUTE = '/api/draft'

function assertValue<T>(v: T | undefined, errorMessage: string): T {
    if (v === undefined) {
        throw new Error(errorMessage)
    }

    return v
}