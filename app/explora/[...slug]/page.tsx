import React from "react";
import Head from "next/head";
import Link from "next/link";
import { getExplorations } from "../utils";
import { canela_regu, canela, canela_th } from "@/lib/fonts";
import Header from "@/components/header";
// import SidebarIcon from "@/components/@ui/sidebar-icon";
import { CustomMDX } from "@/components/mdx";
import Sidebar from "@/components/explora-sidebar";

export default function Page({ params }) {
  const { slug } = params; // 'slug' is an array

  const explorations = getExplorations();
  const exploration = explorations.find((ex) => ex.exploration === slug[0]);

  if (!exploration) {
    return <div>Exploration not found</div>;
  }

  const isOverview = slug.length === 1; // Check if we're on the overview page
  const chapterSlug = slug[1];
  const chapter = exploration.chapters.find((ch) => ch.slug === chapterSlug);

  // Find the current chapter index
  const currentChapterIndex = exploration.chapters.findIndex((ch) => ch.slug === chapterSlug);

  // Determine the previous and next chapters
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
      <Head>
        <title>
          {isOverview
            ? exploration.metadata.title || "Overview"
            : chapter?.metadata.title || `Chapter ${chapter?.slug}`}
        </title>
        <meta
          name="description"
          content={
            isOverview
              ? exploration.metadata.summary || "Overview summary"
              : chapter?.metadata.summary || "Chapter description"
          }
        />
      </Head>
      <Header />
      <div className="flex relative">
        
        <Sidebar exploration={exploration} chapterSlug={chapterSlug} />

        <main className="sm:p-2 w-[100%] sm:w-[80%] h-full mx-auto text-left">
          <div className="flex flex-col min-h-full">
            <div className="flex-grow px-8 py-6">
              {isOverview ? (
                <>
                  <h2 className={`${canela.className} text-5xl mb-10 text-grey leading-[54px]`}>
                    {exploration.metadata.title || "Overview Title"}
                  </h2>
                  <div className="flex flex-col text-black">
                    {/* <p className={`${canela_regu.className} text-grey text-xl leading-[38px]`}>
                      {exploration.overviewContent || "Overview Content"}
                    </p> */}
                    <article className={`${canela_th.className}`}>
                      <CustomMDX 
                      source = {exploration.overviewContent} 
                      />
                    </article>
                  </div>
                </>
              ) : chapter ? (
                <>
                  <h2 className={`${canela.className} text-5xl mb-10 text-grey leading-[54px]`}>
                    {chapter.metadata.title || `Chapter ${chapter.slug}`}
                  </h2>
                  <CustomMDX
                    source={chapter.content || "Chapter Content"}
                  />
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
                  <Link href={`/explora/${exploration.exploration}/${prevChapter.slug}`}>
                    <button className="text-tealBright">Previous</button>
                  </Link>
                )}
                {nextChapter ? (
                  <Link href={`/explora/${exploration.exploration}/${nextChapter.slug}`}>
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
