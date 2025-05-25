import { canela_th } from "@/lib/fonts";
import Link from "next/link";

import { getBlogPosts } from "../blogs/utils";
import BlogPost from "./@ui/blog-post";

export function LatestBlogPost() {
  let allBlogs = getBlogPosts();

  const latestBlog = allBlogs
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .slice(0, 3);

  return (
    <div className="w-full mt-12 mb-8">
      <h2
        className={`${canela_th.className} text-2xl md:text-3xl font-semibold mb-6 text-left`}
      >
        Latest blogs
      </h2>

      <Link
        href={"/blogs"}
        className={`relative mb-6 flex w-[100px] items-center text-tealBright ${canela_th.className} text-2xl hover:text-black hover:pl-6 transition-all duration-200 after:content-[''] after:absolute after:left-0 after:transform after:-translate-x-full after:opacity-0 hover:after:opacity-100 hover:after:translate-x-0 after:transition-all after:duration-200 after:w-4 after:h-4 after:bg-no-repeat after:bg-left after:bg-contain after:bg-[url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20fill%3D%27none%27%20viewBox%3D%270%200%2024%2024%27%20stroke%3D%27teal%27%20class%3D%27w-4%20h-4%27%3E%3Cpath%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%20stroke-width%3D%272%27%20d%3D%27M19%2012H5m7-7l-7%207%207%207%27/%3E%3C/svg%3E")]`}
      >
        Blogs
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-start">
        {latestBlog.map((post) => {
          return (
            <BlogPost
              key={post.metadata.title}
              slug={post.slug}
              title={post.metadata.title}
              publishedAt={post.metadata.publishedAt}
              summary={post.metadata.summary}
            />
          );
        })}
      </div>
    </div>
  );
}
