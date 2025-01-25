import React from "react";
import { Metadata } from "next";
import { canela_th } from "./lib/fonts";
import Article from "./components/article";
import { LatestBlogPost } from "./components/post";
import Link from "next/link";
import SomeT from "./components/@ui/some-text";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Sumit So.",
};

const Page = () => {
  return (
    <>
      <Header />
      <Article>
        <h4 className="mx-auto py-2">
          <b>About</b>
        </h4>
        <h2 className=" mx-auto py-1">Sumit So</h2>
        <p className="text-lg md:text-xl mt-2  mx-auto leading-relaxed">
          I’m a developer advocate at{" "}
          {<SomeT href="https://www.videosdk.live/" text="videoSDK.live" />}, a
          platform that makes it easy for developers to integrate real-time
          video, audio, and interactive features into their apps.
        </p>
        <p className="text-lg md:text-xl mb-6  mx-auto leading-relaxed">
          I’m Sumit So, and I’m really happy you found your way here. This is
          where I share my journey as a{" "}
          {
            <SomeT
              text=" Youtuber "
              href="https://www.youtube.com/@howdevyou"
            />
          }{" "}
          and blogger.
        </p>

        <img
          className=" mt-8 mx-auto rounded-lg shadow-md"
          src="/sumit-home.png"
          alt="sumit so"
        />

        <Link
          href={"/blogs"}
          className={`relative mx-auto my-8 flex w-[100px] items-center text-tealBright ${canela_th.className} text-2xl hover:text-black hover:pl-6 transition-all duration-200 after:content-[''] after:absolute after:left-0 after:transform after:-translate-x-full after:opacity-0 hover:after:opacity-100 hover:after:translate-x-0 after:transition-all after:duration-200 after:w-4 after:h-4 after:bg-no-repeat after:bg-left after:bg-contain after:bg-[url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20fill%3D%27none%27%20viewBox%3D%270%200%2024%2024%27%20stroke%3D%27teal%27%20class%3D%27w-4%20h-4%27%3E%3Cpath%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%20stroke-width%3D%272%27%20d%3D%27M19%2012H5m7-7l-7%207%207%207%27/%3E%3C/svg%3E")]`}
        >
          Blogs
        </Link>

        <LatestBlogPost />

        <div className="mt-8  mx-auto mb-4">
          <h2
            className={`${canela_th.className} text-2xl mt-0 mb-0 md:text-3xl font-semibold`}
          >
            Future Plans
          </h2>
          <div className="mt-4 rounded-lg">
            <p className="text-lg md:text-xl leading-relaxed">
              Well, I’ve got a lot of things on the fire right now, like
              revamping this website! It’s a work in progress, but I’m excited
              to make it a place where all my crazy ideas and late-night
              thoughts find a home. Maybe I'll start my weekly newsletter—who
              knows?
            </p>
          </div>
        </div>
      </Article>
    </>
  );
};

export default Page;
