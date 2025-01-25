// import { getBlogPosts } from "../blogs/utils";
// import { imprima } from "../lib/fonts";
// import BlogPost from "./@ui/blog-post";

// export function LatestBlogPost() {
//   let allBlogs = getBlogPosts();

//   // Sort the blogs and get the latest one
//   const latestBlog = allBlogs.sort((a, b) => {
//     if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
//       return -1;
//     }
//     return 1;
//   })[0];

//   // {slug, metadata: {title, publishedAt, summary}}

//   return (
//     <div className={`flex flex-col gap-4 w-[400px] ${imprima.className}`}>
//       <BlogPost
//         slug={latestBlog.slug}
//         title={latestBlog.metadata.title}
//         publishedAt={latestBlog.metadata.publishedAt}
//         summary={latestBlog.metadata.summary}
//       />
//     </div>
//   );
// }

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
    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto lg:grid-cols-3 gap-6">
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
  );
}
