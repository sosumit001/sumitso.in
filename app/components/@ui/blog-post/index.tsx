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
      className={`${canela_th.className} border-titledCream group cursor-pointer relative bg-white rounded-xl shadow-shadowSm hover:shadow-shadowLg transition-all duration-300 overflow-hidden border border-gray-100`}
      onClick={() => (window.location.href = `/blogs/${slug}`)}
    >
      <div className="aspect-w-16 aspect-h-9 bg-gray-100"></div>
      <div className="p-6">
        <h3
          className={`${canela_regu.className} text-left text-xl font-semibold text-gray-700 mb-2 group-hover:text-tealBright transition-colors duration-200`}
        >
          {title}
        </h3>
        <div className="flex items-center mb-2">
          <time className="text-sm text-gray-500">
            {formatDate(publishedAt)}
          </time>
        </div>
        <p className="text-left text-gray-600 line-clamp-2 m-0">{summary}</p>
      </div>
    </div>
  );
};

export default BlogPost;
