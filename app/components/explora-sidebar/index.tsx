'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SidebarIcon from '@/components/@ui/sidebar-icon'; // Import the SidebarIcon
import { canela_regu, canela_th } from '@/lib/fonts';

export default function Sidebar({ exploration, chapterSlug }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Detect if the screen size is small (for mobile behavior)
  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 768; // Mobile threshold at 768px or below
      setIsMobile(isMobileView);
      // Set isOpen to true if it's a desktop view
      if (!isMobileView) {
        setIsOpen(true); // Open sidebar by default on larger screens
      } else {
        setIsOpen(false); // Close sidebar on mobile by default
      }
    };

    handleResize(); // Initial check on mount
    window.addEventListener('resize', handleResize); // Update on resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on unmount
    };
  }, []);

  return (
    <>
      {/* SidebarIcon: Render it in top-left for desktop and bottom-left for mobile */}

      <aside
        className={`${
          isMobile
            ? `fixed top-0 left-0 h-full z-40 bg-white px-4 transition-transform duration-300 ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
              }` // Slide in from left on small screens
            : `sticky top-0 h-screen p-4 transition-transform duration-300 ${
                isOpen ? 'w-1/5' : 'w-auto overflow-hidden'
              }` // Standard sidebar behavior for large screens
        }`}
      >
      <div
        className={`z-50 p-3 rounded-md bg-white cursor-pointer transition-all duration-300 fixed bottom-16 ${isMobile ? 'left-16' : 'left-4'}`}
      >
        <SidebarIcon onClick={toggleSidebar} />
      </div>

        {(isMobile && isOpen) || (!isMobile && isOpen) ? (
          <>
            <div className="py-4 text-left">
              <Link
                href={"/explora"}
                className={`relative flex items-center text-tealBright ${canela_th.className} text-2xl hover:text-black hover:pl-6 transition-all duration-200 after:content-[''] after:absolute after:left-0 after:transform after:-translate-x-full after:opacity-0 hover:after:opacity-100 hover:after:translate-x-0 after:transition-all after:duration-200 after:w-4 after:h-4 after:bg-no-repeat after:bg-left after:bg-contain after:bg-[url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20fill%3D%27none%27%20viewBox%3D%270%200%2024%2024%27%20stroke%3D%27teal%27%20class%3D%27w-4%20h-4%27%3E%3Cpath%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%20stroke-width%3D%272%27%20d%3D%27M19%2012H5m7-7l-7%207%207%207%27/%3E%3C/svg%3E")]`}
              >
                Explorations
              </Link>
            </div>
            <div>
              <ul className={`${canela_regu.className} text-black flex flex-col gap-2`}>
                <li className={`${!chapterSlug ? 'text-tealBright' : ''} mb-2 text-left hover:text-tealBright`}>
                  <Link href={`/explora/${exploration.exploration}`}>Overview</Link>
                </li>
                {exploration.chapters.map((chapter) => (
                  <li
                    key={chapter.slug}
                    className={`mb-2 text-left ${
                      chapter.slug === chapterSlug ? 'text-tealBright' : ''
                    } hover:text-tealBright`}
                  >
                    <Link href={`/explora/${exploration.exploration}/${chapter.slug}`}>
                      {chapter.metadata.title || `Chapter ${chapter.slug}`}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : null}
      </aside>

      {/* Overlay for small screens when sidebar is open */}
      {isMobile && isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30"
          onClick={toggleSidebar} // Close sidebar when clicking outside
        />
      )}
    </>
  );
}
