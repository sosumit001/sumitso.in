import { getBlogPosts } from "../blogs/utils";
import BlogPost from "./@ui/blog-post";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <BlogPost
            key={post.metadata.title}
            slug={post.slug}
            title={post.metadata.title}
            publishedAt={post.metadata.publishedAt}
            summary={post.metadata.summary}
          />
        ))}
    </div>
  );
}
