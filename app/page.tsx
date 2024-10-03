import React from "react";
import { Metadata } from "next";
import { canela, canela_m, canela_th } from "./lib/fonts";
import Article from "./components/article";
import Header from "./components/header";
import { LatestBlogPost } from "./components/post";
import Footer from "./components/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Sumit So.'
};

const Page = () => {
  return (
    <>
      <Article heroHeaderText={`Sumit shares thoughts, ideas, and reflections on technology.`}>
          <p className="text-lg md:text-xl leading-relaxed">
            Hello and welcome! This is Sumit So, I'm glad you're here. This site is my little corner of the internet where I share my journey as a 
            <a className="underline hover:text-tealBright" target="_blank" href="https://youtube.com/@howdevyou">YouTuber</a> and blogger.
          </p>
          <p className="mt-4 text-lg md:text-xl leading-relaxed">
            I don't know a lot of people, but I think this is a good start to make videos and post articles. Feel free to connect with me if you think I can help in some way or if you'd like to collaborate. I’m excited about the possibilities of what we can create together.
          </p>

          <h2 className={`${canela_th.className} mt-0 mb-0 text-2xl md:text-3xl font-semibold`}>About Me</h2>
          <div className="text-left flex flex-col md:flex-row items-start justify-start gap-4 mt-4">
            <p className="text-lg md:text-xl leading-relaxed">
              About me? Well, it's April 19th, 2024, and I’m 23 years old. I’ve just completed my engineering degree—four years of intense college life. Currently, I’m interning as a Full Stack Developer at a startup. While it may seem like a basic role, I’m learning and growing through the experience.
            </p>
            <img className="w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-md" src="/sumit-home.png" alt="sumit so" />
          </div>

          <div className="mt-6">
            <p className="text-lg md:text-xl leading-relaxed">
              But the good part? I took a 1 BHK apartment with one big-ass room and a really nice kitchen. I can drink beer, play loud music, and sleep without clothes. I can literally do anything. Like, here’s an image of me watching images of the Dalai Lama, which has nothing to do with this 'about' section. That’s cool, isn’t it?
            </p>
          </div>

          <div className="mt-8">
            <Link href="/blogs">
              <h3 className="flex items-center gap-2 hover:gap-4 text-lg md:text-xl hover:text-tealBright hover:fill-tealBright">
                Blogs 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true" width="18" height="18">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                </svg>
              </h3>
            </Link>
            <LatestBlogPost />
          </div>

          <div className="mt-8">
            <h2 className={`${canela_th.className} text-2xl mt-0 mb-0 md:text-3xl font-semibold`}>Future Plans</h2>
            <div className="mt-4 rounded-lg">
              <p className="text-lg md:text-xl leading-relaxed">
                Well, I’ve got a lot of things on the fire right now, like revamping this website! It’s a work in progress, but I’m excited to make it a place where all my crazy ideas and late-night thoughts find a home. Maybe I'll start my weekly newsletter—who knows?
              </p>
            </div>
          </div>
      </Article>
    </>
  );
};

export default Page;

