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
    'fbzd8ba3',
    'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID',
)

// export const readToken = process.env.SANITY_API_READ_TOKEN || ''
export const readToken = 'skR7mUD9KlgZDawfpQf8mQSKkARQVfhL6pgdo0G9vdeJtJyr56Jrl55rrrs0SHEB8pewkqeXNirSr4TXW7xBymDFyuPe9xn5r73cVekYZ8gnXxkEECzzI97hp9f67V1uFuQxQT5LmNP0IFz0jeCCfQgemC1sUy3dvqDEp5iqzieriUG5GH6V' || ''

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