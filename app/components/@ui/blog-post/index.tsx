"use client";

import { canela_regu, canela_th } from "@/lib/fonts";
import { formatDate } from "@/lib/utils";

interface BlogPostProps {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
}

const BlogPost = ({ slug, title, publishedAt, summary }: BlogPostProps) => {
  return (
    <div
      className={`${canela_th.className} group cursor-pointer relative bg-white rounded-xl shadow-shadowSm hover:shadow-shadowLg transition-all duration-300 overflow-hidden border border-gray-100`}
      onClick={() => (window.location.href = `/blogs/${slug}`)}
    >
      <div className="aspect-w-16 aspect-h-9 bg-gray-100">
        <img
          src={`/blogs/thumbnails/${slug}.png`}
          alt={title}
          className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3
          className={`${canela_regu.className} text-xl font-semibold text-gray-700 mb-2 group-hover:text-tealBright transition-colors duration-200`}
        >
          {title}
        </h3>
        <div className="flex items-center mb-2">
          <time className="text-sm mx-auto text-gray-500">
            {formatDate(publishedAt)}
          </time>
        </div>
        <p className="text-gray-600 line-clamp-2">{summary}</p>
        <div className="mt-4">
          <span className="inline-flex items-center text-sm font-medium text-tealBright group-hover:text-tealBright">
            Read article
            <svg
              className="ml-2 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
