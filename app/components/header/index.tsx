"use client";
import Link from "next/link";
import { Abel } from "next/font/google";
// import Image from "next/image";
import { amstelvar, canela } from "@/lib/fonts";
import { useState } from "react";
import MenuLink from "../@ui/menu-link";

const acme = Abel({
  subsets: ["latin"],
  weight: ["400"],
});

const Header = () => {
  const [isMenuClicked, setMenuClicked] = useState(false);

  const toggleMenuButton = () => {
    setMenuClicked(!isMenuClicked);
  };

  return (
    <header
      id="site-header"
      className={`text-lg max-md:py-[1.5px] py-3 ${acme.className} flex flex-col justify-center text-xl items-center gap-[18px] `}
    >
      {/* for large image */}
      <div className=" w-full max-md:hidden flex items-center justify-between px-4">
        {/* icon */}
        <div className="flex gap-2 items-center">
          <Link
            href="/"
            className="inline-block transition-transform duration-800 hover:text-tealBright text-grey hover:animate-shrinkAndExpand"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-12 h-12"
            >
              <text
                x="10"
                y="70"
                fontSize="70"
                fill="currentColor"
                fontWeight={800}
                fontFamily={canela.className}
              >
                S
              </text>
            </svg>
          </Link>
        </div>
        {/* links */}
        <div className={`${amstelvar.className} flex items-center gap-4`}>
          <MenuLink href="/" value="Home" />
          <MenuLink href="/explora" value="Explora" postText="+" />
          <MenuLink href="/blogs" value="Blogs" />
        </div>
      </div>
      <div className="hidden max-md:flex justify-between relative w-[100%] px-4">
        {/* icon */}

        <div className="flex gap-2 items-center">
          <Link
            href="/"
            className="inline-block transition-transform duration-800 hover:text-tealBright text-teal hover:animate-shrinkAndExpand"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-12 h-12"
            >
              <text
                x="10"
                y="70"
                fontSize="70"
                fill="currentColor"
                fontWeight={800}
                fontFamily={canela.className}
              >
                S
              </text>
            </svg>
          </Link>
        </div>

        {/* menu */}
        <div
          onClick={toggleMenuButton}
          className="flex flex-col p-4 items-center justify-center cursor-pointer"
        >
          <div className="flex gap-1 items-center justify-center">
            <div className="w-[5px] h-[5px] rounded-full bg-slate-500"></div>
            <div className="w-[5px] h-[5px] rounded-full bg-slate-500"></div>
            <div className="w-[5px] h-[5px] rounded-full bg-slate-500"></div>
          </div>
          <div className="text-sm select-none">menu</div>
        </div>
      </div>
      {isMenuClicked && (
        <div className="fixed hidden max-md:flex inset-0 bg-white z-50 flex-col items-center overflow-y-hidden">
          <div
            className={`cursor-pointer top-3 py-2 w-full text-right px-4`}
            onClick={toggleMenuButton}
          >
            x <b>close</b>
          </div>
          <ul className="w-[100%] border-solid border-[0.1rem] border-t-0 border-b-0">
            <li className="border-t border-b-0 border-[0.1rem] py-1 flex leading-1">
              <Link
                className="px-3 w-full text-left text-grey py-2"
                href="/"
                onClick={toggleMenuButton}
              >
                Home
              </Link>
            </li>
            <li className="border-t border-b-0 border-[0.1rem] flex leading-1">
              <Link
                className="px-3 w-full text-left text-grey py-2"
                href="/explora"
                onClick={toggleMenuButton}
              >
                Explorations
              </Link>
            </li>
            <li className="border-t border-b-0 border-[0.1rem] flex leading-1">
              <Link
                className="px-3 w-full text-left text-grey py-2"
                href="/blogs"
                onClick={toggleMenuButton}
              >
                Blogs
              </Link>
            </li>
            <li className="border-t border-b border-[0.1rem] flex leading-1">
              <Link
                className="px-3 w-full text-left text-grey py-2"
                href="https://youtube.com/@howdevyou"
                target="_blank"
                onClick={toggleMenuButton}
              >
                Youtube
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
