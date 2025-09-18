import React from "react";
import { getExplorations } from "../utils";
import { canela_regu, canela, canela_th } from "@/lib/fonts";
import Header from "@/components/header";
import { CustomMDX } from "@/components/mdx";
import Sidebar from "@/components/explora-sidebar";
import Link from "next/link";
import { notFound } from "next/navigation";
import { baseUrl } from "@/sitemap";

// Generate static params for all exploration routes
export async function generateStaticParams() {
  const explorations = getExplorations();
  const params: { slug: string[] }[] = [];

  explorations.forEach((exploration) => {
    // Add overview page
    params.push({ slug: [exploration.exploration] });

    // Add all chapter pages
    exploration.chapters.forEach((chapter) => {
      params.push({ slug: [exploration.exploration, chapter.slug] });
    });
  });

  return params;
}

// Dynamically generate metadata for SEO
export function generateMetadata({ params }: { params: { slug: string[] } }) {
  const explorations = getExplorations();
  const exploration = explorations.find(
    (ex) => ex.exploration === params.slug[0]
  );

  if (!exploration) {
    notFound(); // Handle 404 if exploration is not found
    return {};
  }

  const isOverview = params.slug.length === 1;
  const chapterSlug = params.slug[1];
  const chapter = exploration.chapters.find((ch) => ch.slug === chapterSlug);

  const title = isOverview
    ? exploration.metadata.title || "Overview"
    : chapter?.metadata.title || `Chapter ${chapter?.slug}`;
  const description = isOverview
    ? exploration.metadata.summary || "Overview summary"
    : chapter?.metadata.summary || "Chapter description";

  const ogImage = exploration.metadata.image
    ? `${baseUrl}${exploration.metadata.image}`
    : `/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${baseUrl}/explora/${params.slug.join("/")}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

// Page component for individual exploration or chapter
export default function Page({ params }: { params: { slug: string[] } }) {
  const { slug } = params; // 'slug' is an array
  const explorations = getExplorations();
  const exploration = explorations.find((ex) => ex.exploration === slug[0]);

  if (!exploration) {
    return <div>Exploration not found</div>;
  }

  const isOverview = slug.length === 1;
  const chapterSlug = slug[1];
  const chapter = exploration.chapters.find((ch) => ch.slug === chapterSlug);

  const currentChapterIndex = exploration.chapters.findIndex(
    (ch) => ch.slug === chapterSlug
  );
  const prevChapter = isOverview
    ? null
    : currentChapterIndex > 0
    ? exploration.chapters[currentChapterIndex - 1]
    : null;
  const nextChapter = isOverview
    ? exploration.chapters.length > 0
      ? exploration.chapters[0]
      : null
    : currentChapterIndex < exploration.chapters.length - 1
    ? exploration.chapters[currentChapterIndex + 1]
    : null;

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex relative">
        <Sidebar exploration={exploration} chapterSlug={chapterSlug} />
        <main className="sm:p-2 w-[100%] sm:w-[80%] h-full mx-auto text-left">
          <div className="flex flex-col min-h-full">
            <div className="flex-grow px-8 py-6">
              {isOverview ? (
                <>
                  <h2
                    className={`${canela.className} text-5xl mb-10 text-grey leading-[54px]`}
                  >
                    {exploration.metadata.title || "Overview Title"}
                  </h2>
                  <article
                    className={`${canela_th.className} prose prose-lg prose-img:rounded-lg prose-headings:font-semibold prose-a:text-tealBright hover:prose-a:underline`}
                  >
                    <CustomMDX source={exploration.overviewContent} />
                  </article>
                </>
              ) : chapter ? (
                <>
                  <h2
                    className={`${canela.className} text-5xl mb-10 text-grey leading-[54px]`}
                  >
                    {chapter.metadata.title || `Chapter ${chapter.slug}`}
                  </h2>
                  <article className="prose prose-lg prose-img:rounded-lg prose-headings:font-semibold prose-a:text-tealBright hover:prose-a:underline">
                    <CustomMDX source={chapter.content} />
                  </article>
                </>
              ) : (
                <div>Chapter not found</div>
              )}
              <div className="flex gap-8 justify-start mt-8 py-2 px-8">
                {isOverview ? null : currentChapterIndex === 0 ? (
                  <Link href={`/explora/${exploration.exploration}`}>
                    <button className="text-tealBright">Previous</button>
                  </Link>
                ) : (
                  <Link
                    href={`/explora/${exploration.exploration}/${prevChapter.slug}`}
                  >
                    <button className="text-tealBright">Previous</button>
                  </Link>
                )}
                {nextChapter ? (
                  <Link
                    href={`/explora/${exploration.exploration}/${nextChapter.slug}`}
                  >
                    <button className="text-tealBright">Next</button>
                  </Link>
                ) : (
                  <button className="text-gray-300" disabled>
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
