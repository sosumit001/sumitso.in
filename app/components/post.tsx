import { getBlogPosts } from '../blogs/utils'
import { imprima } from '../lib/fonts'
import BlogPost from './@ui/blog-post'

export function LatestBlogPost() {
  let allBlogs = getBlogPosts()

  // Sort the blogs and get the latest one
  const latestBlog = allBlogs.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1
    }
    return 1
  })[0]

  return (
    <div className={`flex flex-col gap-4 ${imprima.className}`}>
        <BlogPost 
          slug={latestBlog.slug} 
          title={latestBlog.metadata.title} 
          publishedAt={latestBlog.metadata.publishedAt} 
          summary={latestBlog.metadata.summary} 
        />
    </div>
  )
}
