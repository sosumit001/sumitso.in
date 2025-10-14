import { notFound } from "next/navigation";
import { getStoriesPosts } from "../utils";
import { CustomMDX } from "@/components/mdx";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { canela_regu } from "@/lib/fonts";
import { formatDate } from "../utils";

export async function generateStaticParams() {
  let posts = getStoriesPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  let post = getStoriesPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;

  let ogImage = image
    ? `https://sumitso.in${image}`
    : `https://sumitso.in/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://sumitso.in/stories/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function StoriesPost({ params }) {
  let posts = getStoriesPosts();
  let post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1
              className={`${canela_regu.className} text-4xl font-bold text-gray-900 mb-4`}
            >
              {post.metadata.title}
            </h1>
            {post.metadata.publishedAt && (
              <time className="text-gray-500 text-sm">
                {formatDate(post.metadata.publishedAt)}
              </time>
            )}
          </header>
          
          {post.metadata.image && (
            <div className="mb-8">
              <img
                src={post.metadata.image}
                alt={post.metadata.title}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            <CustomMDX source={post.content} />
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
}
