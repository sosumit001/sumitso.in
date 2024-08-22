import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/blogs/utils";
import { canela_th, canela_regu } from "@/lib/fonts";

interface TBlogPost {
  slug: string;
  title: string;
  publishedAt?: string;
  summary?: string;
}

const BlogPost = ({ slug, title, publishedAt, summary }: TBlogPost) => {
  return (
    <Link
      className={`${canela_th.className} flex gap-4 px-5 py-4 text-grey hover:text-tealBright lg:py-6 flex-wrap sm:px-6 md:px-8 lg:px-10 hover:scale-105 hover:shadow-shadowSm border-titledCream border-[1px] transition-shadow duration-500 ease-in-out bg-white rounded-md`}
      href={`/blogs/${slug}`}
    >
      <div className="w-full flex items-center flex-wrap my-2 relative">
        <div className="tracking-tight w-full">
          <div className="flex items-center px-4 justify-between max-sm:flex-wrap max-md:py-4 max-sm:py-4">
            <div className="flex gap-4 flex-col max-sm:gap-2 max-sm:max-w-[100%] w-full max-w-[70%]">
              <div className={`${canela_regu.className} text-black tracking-tight text-xl font-semibold`}>
                {title}
              </div>
              <div className="text-sm text-grey">
                {formatDate(publishedAt, false)}
              </div>
              <div className="text-left mt-3 pr-16 max-sm:pr-0">
                {summary}
              </div>
            </div>

            <Image
              src={`/blogs/thumbnails/${slug}.png`}
              alt={title}
              height={80}
              width={290}
              priority
              className="rounded-md shadow-md max-sm:w-[100%] w-[30%]"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPost;
