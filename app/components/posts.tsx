import Link from 'next/link'
import { formatDate, getBlogPosts } from '../blogs/utils'
import { imprima } from '../lib/fonts'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className={`flex flex-col gap-4 ${imprima.className}`}>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex gap-0 px-3 sm:px-4 md:px-5 lg:px-6 shadow-slate-700 bg-[#fdfff8]"
            href={`/blogs/${post.slug}`}
          >
            <div className="w-full flex gap-3 flex-col my-4 relative">
              <div className='flex gap-4 flex-wrap'>
                <div className="text-neutral-900 tracking-tight">
                 {post.metadata.title}
                </div>
                <div className="text-neutral-500 w-[150px]">
                  {formatDate(post.metadata.publishedAt, false)}
                </div>
              </div>

              <div className="text-neutral-600 tracking-tight">
                {post.metadata.summary}
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}
