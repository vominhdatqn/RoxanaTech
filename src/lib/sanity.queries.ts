import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  type,
  date,
  _updatedAt,
  excerpt,
  coverImage,
  "slug": slug.current,
  content
`

export const indexQuery = groq`
*[_type == "post"] | order(_updatedAt desc) {
  ${postFields}
}`

export const blogQuery = groq`
*[_type == "post" && type == "Blog"] | order(_updatedAt desc) {
  ${postFields}
}`

export const beautyQuery = groq`
*[_type == "post" && type == "Beauty"] | order(_updatedAt desc) {
  ${postFields}
}`

export const weddingDressQuery = groq`
*[_type == "post" && type == "Vay-cuoi"] | order(_updatedAt desc) {
  ${postFields}
}`

export const photographyQuery = groq`
*[_type == "post" && type == "Photography"] | order(_updatedAt desc) {
  ${postFields}
}`


export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`
export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`
