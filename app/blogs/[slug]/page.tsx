import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getBlogPosts } from "@/blogs/utils";
import { formatDate } from "@/lib/utils";
import { baseUrl } from "@/sitemap";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";
import { canela_th } from "@/lib/fonts";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
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
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
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

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <section className="mx-auto text-left py-6 px-6 sm:px-8 md:px-10 lg:px-12 lg:w-[70%] md:w-[80%] sm:w-[90%] w-[100%]">
        <Link
          href={"/blogs"}
          className={`relative mb-6 flex w-[100px] items-center text-tealBright ${canela_th.className} text-2xl hover:text-black hover:pl-6 transition-all duration-200 after:content-[''] after:absolute after:left-0 after:transform after:-translate-x-full after:opacity-0 hover:after:opacity-100 hover:after:translate-x-0 after:transition-all after:duration-200 after:w-4 after:h-4 after:bg-no-repeat after:bg-left after:bg-contain after:bg-[url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20fill%3D%27none%27%20viewBox%3D%270%200%2024%2024%27%20stroke%3D%27teal%27%20class%3D%27w-4%20h-4%27%3E%3Cpath%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%20stroke-width%3D%272%27%20d%3D%27M19%2012H5m7-7l-7%207%207%207%27/%3E%3C/svg%3E")]`}
        >
          Blogs
        </Link>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${baseUrl}${post.metadata.image}`
                : `/og?title=${encodeURIComponent(post.metadata.title)}`,
              url: `${baseUrl}/blog/${post.slug}`,
              author: {
                "@type": "Person",
                name: "My Portfolio",
              },
            }),
          }}
        />
        <h1 className="title font-semibold text-2xl tracking-tighter">
          {post.metadata.title}
        </h1>
        <div className="flex justify-between items-center mt-2 mb-8 text-sm">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </div>
        <article className="prose prose-lg prose-img:rounded-lg prose-headings:font-semibold prose-a:text-tealBright hover:prose-a:underline mx-auto max-w-none">
          <CustomMDX source={post.content} />
        </article>
        <Footer />
      </section>
    </>
  );
}
