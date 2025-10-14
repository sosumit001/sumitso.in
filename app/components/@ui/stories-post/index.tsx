"use client";

import { canela_regu, canela_th } from "@/lib/fonts";
import { formatDate } from "@/lib/utils";

interface StoriesPostProps {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
}

const StoriesPost = ({ slug, title, publishedAt, summary, image }: StoriesPostProps) => {
  return (
    <div
      className={`${canela_th.className} border-titledCream group cursor-pointer relative bg-white rounded-xl shadow-shadowSm hover:shadow-shadowLg transition-all duration-300 overflow-hidden border border-gray-100`}
      onClick={() => (window.location.href = `/stories/${slug}`)}
    >
      <div className="aspect-w-16 aspect-h-9 bg-gray-100 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-sm">No image</span>
          </div>
        )}
      </div>
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

export default StoriesPost;
