
import { getBlogPosts } from '@/blogs/utils'

export const baseUrl = 'http://localhost:3000'

export default async function sitemap() {
	let blogs = getBlogPosts().map((post) => ({
		url: `${baseUrl}/blogs/${post.slug}`,
		lastModified: post.metadata.publishedAt,
	}))

	let routes = ['', '/blogs'].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}))

	return [...routes, ...blogs]
}
