import { IPost } from '@/model/BlogPost'
import { apiVersion, dataset, projectId, useCdn } from './sanity.api'
// import {
//   indexQuery,
//   type Post,
//   postAndMoreStoriesQuery,
//   postBySlugQuery,
//   postSlugsQuery,
//   type Settings,
//   settingsQuery,
// } from './sanity.queries'
import { createClient, type SanityClient } from 'next-sanity'
import { indexQuery, postBySlugQuery, postSlugsQuery, beautyQuery, weddingDressQuery, photographyQuery, blogQuery } from './sanity.queries'

export function getClient(preview?: { token: string }): SanityClient {
	const client = createClient({
		projectId,
		dataset,
		apiVersion,
		useCdn,
		perspective: 'published',
	})
	if (preview) {
		if (!preview.token) {
			throw new Error('You must provide a token to preview drafts')
		}
		return client.withConfig({
			token: preview.token,
			useCdn: false,
			ignoreBrowserTokenWarning: true,
			perspective: 'previewDrafts',
		})
	}
	return client
}

export const getSanityImageConfig = () => getClient()


// export async function getSettings(client: SanityClient): Promise<Settings> {
//   return (await client.fetch(settingsQuery)) || {}
// }

export async function getAllPosts(): Promise<IPost[]> {
	const client = getClient()
	return (await client.fetch(indexQuery)) || []
}

export async function getAllBeautyPosts(): Promise<IPost[]> {
	const client = getClient()
	return (await client.fetch(beautyQuery)) || []
}
export async function getAllBlogPosts(): Promise<IPost[]> {
	const client = getClient()
	return (await client.fetch(blogQuery)) || []
}

export async function getAllWeddingDressPosts(): Promise<IPost[]> {
	const client = getClient()
	return (await client.fetch(weddingDressQuery)) || []
}

export async function getAllPhotographyPosts(): Promise<IPost[]> {
	const client = getClient()
	return (await client.fetch(photographyQuery)) || []
}

export async function getAllPostsSlug(): Promise<Pick<IPost, 'slug'>[]> {
	const client = getClient()
	const slugs = (await client.fetch<string[]>(postSlugsQuery)) || []
	return slugs.map((slug) => ({ slug }))
}

export async function getPostBySlug(
	slug: string,
): Promise<IPost> {
	const client = getClient()
	return (await client.fetch(postBySlugQuery, { slug })) || ({} as any)
}

// export async function getPostAndMoreStories(
//   client: SanityClient,
//   slug: string,
// ): Promise<{ post: Post; morePosts: Post[] }> {
//   return await client.fetch(postAndMoreStoriesQuery, { slug })
// }