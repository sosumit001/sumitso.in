import { getExplorations } from "./utils";
import Link from "next/link";
import { Metadata } from "next";
import { canela_regu, canela_sub, canela_th } from "@/lib/fonts";
import Article from "@/components/article";
import { formatDate } from "@/lib/utils";
import Header from "@/components/header";
export const metadata: Metadata = {
  title: "Explora +",
};

const Page = () => {
  const explorations = getExplorations();

  return (
    <>
      <Header />

      <Article heroHeaderText="Explora" postText="">
        <div className="max-w-7xl">
          <header>
            <p
              className={`${canela_sub.className} text-4xl leading-[1] mt-8 text-grey`}
            >
              Honest takes on tech I’m still figuring out, one step at a time.
            </p>
            <p className={`${canela_th.className} py-6 text-grey`}>
              This page is a reflection of the time and effort I’ve invested in
              understanding tech more deeply. I’ve poured countless hours into
              learning these topics, and I’m committed to preserving and sharing
              that knowledge.
            </p>
          </header>

          <section className="py-6">
            <ul className="flex justify-center px-0 flex-wrap">
              {explorations.map((exploration) => (
                <li
                  key={exploration.exploration}
                  className="p-4 flex text-grey flex-col border border-titledCream hover:shadowMd gap-2 hover:bg-white hover:scale-105 hover:text-tealBright transition duration-200 rounded-[4px] w-full max-w-[100%]"
                >
                  <Link href={`/explora/${exploration.exploration}`}>
                    <div>
                      <h3
                        className={`${canela_regu.className} max-w-fit my-0 font-bold leading-8 text-[24px]`}
                      >
                        {exploration.metadata.title}
                      </h3>
                      <div
                        className={`flex gap-4 flex-wrap ${canela_th.className} pt-1 text-[16px] uppercase`}
                      >
                        <p className="my-0 text-gray-500">
                          {formatDate(exploration.metadata.publishedAt)}
                        </p>
                        <p className="my-0 text-gray-500">
                          Chapters: {exploration.chapters.length}
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Article>
    </>
  );
};

export default Page;
