import React from "react";
import { Metadata } from "next";
import { canela_th } from "./lib/fonts";
import Article from "./components/article";
import { LatestBlogPost } from "./components/post";
import { LatestExploration } from "./components/explora-preview";
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
        {/* Hero section with responsive layout */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 mt-8 mb-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h4 className="py-2">
              <b>About</b>
            </h4>
            <p className="text-lg md:text-xl mt-2 leading-relaxed">
              I'm a developer advocate at{" "}
              {<SomeT href="https://www.videosdk.live/" text="videoSDK.live" />}
              , a platform that makes it easy for developers to integrate
              real-time video, audio, and interactive features into their apps.
            </p>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              I'm Sumit So, and I'm really happy you found your way here. This
              is where I share my journey as a{" "}
              {
                <SomeT
                  text=" Youtuber "
                  href="https://www.youtube.com/@howdevyou"
                />
              }{" "}
              and blogger.
            </p>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              Feel free to reach out to me at{" "}
              <a
                href="mailto:contact@sumitso.in"
                className="text-tealBright hover:underline font-medium"
              >
                contact@sumitso.in
              </a>
              .
            </p>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
            <img
              className="rounded-lg shadow-md max-w-full h-auto lg:max-w-md lg:ml-auto"
              src="/sumit-so-animated.gif"
              alt="sumit so"
            />
          </div>
        </div>

        <LatestExploration />
        <LatestBlogPost />

        <div className="mt-8 mb-4 text-left">
          <h2
            className={`${canela_th.className} text-2xl mt-0 mb-0 md:text-3xl font-semibold`}
          >
            Future Plans
          </h2>
          <div className="mt-4 rounded-lg">
            <p className="text-lg md:text-xl leading-relaxed">
              Well, I've got a lot of things on the fire right now, like
              revamping this website! It's a work in progress, but I'm excited
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
