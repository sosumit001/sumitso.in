import { getExplorations } from "@/explora/utils";
import { formatDate } from "@/lib/utils";
import { canela_regu, canela_th } from "@/lib/fonts";
import Link from "next/link";

export function LatestExploration() {
  let allExplorations = getExplorations();

  // Sort explorations by date and get the latest 3
  const latestExplorations = allExplorations
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .slice(0, 3);

  return (
    <div className="w-full mt-12 mb-8">
      <h2
        className={`${canela_th.className} text-2xl md:text-3xl font-semibold mb-6 text-left`}
      >
        Latest Explorations
      </h2>

      <Link
        href={"/explora"}
        className={`relative mb-6 flex w-[250px] items-center text-tealBright ${canela_th.className} text-2xl hover:text-black hover:pl-6 transition-all duration-200 after:content-[''] after:absolute after:left-0 after:transform after:-translate-x-full after:opacity-0 hover:after:opacity-100 hover:after:translate-x-0 after:transition-all after:duration-200 after:w-4 after:h-4 after:bg-no-repeat after:bg-left after:bg-contain after:bg-[url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20fill%3D%27none%27%20viewBox%3D%270%200%2024%2024%27%20stroke%3D%27teal%27%20class%3D%27w-4%20h-4%27%3E%3Cpath%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%20stroke-width%3D%272%27%20d%3D%27M19%2012H5m7-7l-7%207%207%207%27/%3E%3C/svg%3E")]`}
      >
        All Explorations
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-start">
        {latestExplorations.map((exploration) => (
          <Link
            key={exploration.exploration}
            href={`/explora/${exploration.exploration}`}
            className={`${canela_th.className} border-titledCream group cursor-pointer relative bg-white rounded-xl shadow-shadowSm hover:shadow-shadowLg transition-all duration-300 overflow-hidden border border-gray-100 w-full`}
          >
            <div className="p-6">
              <h3
                className={`${canela_regu.className} text-xl font-semibold text-gray-700 mb-2 group-hover:text-tealBright transition-colors duration-200`}
              >
                {exploration.metadata.title}
              </h3>
              <div className="flex flex-wrap gap-2 items-center mb-2">
                <time className="text-sm text-gray-500">
                  {formatDate(exploration.metadata.publishedAt)}
                </time>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">
                  {exploration.chapters.length} chapters
                </span>
              </div>
              <p className="text-gray-600 line-clamp-2">
                {exploration.metadata.summary}
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center text-sm font-medium text-tealBright group-hover:text-tealBright">
                  Explore more
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
          </Link>
        ))}
      </div>
    </div>
  );
}
