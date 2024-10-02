
// import { getBlogPosts } from '@/blogs/utils'

// export const baseUrl = 'http://localhost:3000'

// export default async function sitemap() {
// 	let blogs = getBlogPosts().map((post) => ({
// 		url: `${baseUrl}/blogs/${post.slug}`,
// 		lastModified: post.metadata.publishedAt,
// 	}))

// 	let routes = ['', '/blogs'].map((route) => ({
// 		url: `${baseUrl}${route}`,
// 		lastModified: new Date().toISOString().split('T')[0],
// 	}))

// 	return [...routes, ...blogs]
// }

import { getBlogPosts } from '@/blogs/utils'
import { getExplorations } from '@/explora/utils'

export const baseUrl = 'http://localhost:3000'

export default async function sitemap() {
	// Fetch blog posts
	let blogs = getBlogPosts().map((post) => ({
		url: `${baseUrl}/blogs/${post.slug}`,
		lastModified: post.metadata.publishedAt,
	}))

	// Fetch explorations and chapters
	let explorations = getExplorations().flatMap((explora) =>
		explora.chapters.map((chapter) => ({
			url: `${baseUrl}/explora/${explora.exploration}/${chapter.slug}`,
			lastModified: chapter.metadata.publishedAt,
		}))
	)

	// Base routes
	let routes = ['', '/blogs', '/explora'].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}))

	return [...routes, ...blogs, ...explorations]
}
