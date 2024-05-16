import Link from 'next/link'
import { formatDate, getBlogPosts } from '../blogs/utils'
import { imprima } from '../lib/fonts'
import Image from 'next/image'

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
            className="flex gap-0 px-3 flex-wrap sm:px-4 md:px-5 lg:px-6 shadow-slate-700 bg-[#ededed]"
            href={`/blogs/${post.slug}`}
          >
            <div className="w-full flex items-center flex-wrap my-2 relative">

                <div className="text-neutral-600 tracking-tight">

                  <div className='flex items-center px-4 justify-center max-sm:flex-wrap max-md:py-4 max-sm:py-4'>

                    {/* left */}
                    <div>
                      {/* title */}
                      <div className='flex gap-2 flex-col max-sm:gap-1'>
                        <div className="text-neutral-900 max-sm:px-2 tracking-tight">
                          {post.metadata.title}
                        </div>
                        <div className="text-neutral-400 w-[150px]">
                          {formatDate(post.metadata.publishedAt, false)}
                        </div>
                      </div>
                      {/* summary */}
                      <div className='text-left mt-3 pr-16 max-sm:px-2'>
                        {post.metadata.summary}
                      </div>
                    </div>

                    {/* image */}
                    <Image
                    src={`/blogs/thumbnails/${post.slug}.png`}
                    alt={`${post.slug}`}
                    height={40}
                    width={200}
                    priority
                    className='max-sm:w-[90%]'
                    />

                  </div>
                </div>
            </div>
          </Link>
        ))}
    </div>
  )
}
