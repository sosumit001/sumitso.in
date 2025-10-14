import { getStoriesPosts } from "../stories/utils";
import StoriesPost from "./@ui/stories-post/index";

export function StoriesPosts() {
  let allStoriesPosts = getStoriesPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {allStoriesPosts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt || "") >
            new Date(b.metadata.publishedAt || "")
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <StoriesPost
            key={post.slug}
            slug={post.slug}
            title={post.metadata.title}
            publishedAt={post.metadata.publishedAt}
            summary={post.metadata.summary}
            image={post.metadata.image}
          />
        ))}
    </div>
  );
}
