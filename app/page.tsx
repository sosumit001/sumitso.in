import React from "react"
import { Metadata } from "next"
import { canela, canela_m, canela_th } from "./lib/fonts"
import Image from "next/image"
import Header from "./components/header"
import { LatestBlogPost } from "./components/post"
import Footer from "./components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Sumit So.'
}

const Page = () => {
  return (
    <>
      <Header />
      <header className={`${canela_m.className} text-left text-grey leading-tight lg:text-7xl md:text-6xl text-5xl w-[100%] px-6 sm:px-16 md:px-32 lg:px-40 mx-auto py-10 md:py-14 lg:py-16`}>
        <b className={`${canela.className} text-black`} >Sumit</b> shares thoughts, ideas, and reflections on technology.
      </header>

      <article className="prose-lg lg:text-xl text-[16px] max-w-5xl mx-auto px-4 text-grey">
        <div className="text-left px-2 sm:px-4 md:px-8 lg:px-14 pt:10 md:pt-12 lg:pt-16">
          <div className={`${canela_th.className}`}>
            <p>
              Hello and welcome! This is Sumit So, I'm glad you're here. This site is my little corner of the internet where I share my journey as a <a className="underline" target="blank" href="https://youtube.com/@howdevyou">YouTuber</a> and blogger
            </p>
            <p>
              I don't know a lot of people, but I think this is a good start to make videos and post articles. Feel free to connect with me if you think I can help in some way or if you'd like to collaborate. I’m excited about the possibilities of what we can create together
            </p>

            <div className="text-left">
              <h2 className={`${canela_th.className} text-xlsw`}>About me</h2>
              <p>
              About me? Well, it's April 19th, 2024, and I’m 23 years old. I’ve just completed my engineering degree—four years of intense college life. Currently, I’m interning as a Full Stack Developer at a startup. While it may seem like a basic role, I’m learning and growing through the experience.
              </p>
              <div className="relative py-6">
                <img src="/sumit-home.png" alt="sumit so" width={800}/>
              </div>
              <p>
                But the good part? I took a 1 BHK apartment with one big-ass room and a really nice kitchen. I can drink beer, play loud music, and sleep without clothes. I can literally do anything. Like, here’s an image of me watching images of the Dalai Lama, which has nothing to do with this 'about' section. That’s cool, isn’t it?
              </p>
            </div>

            <div className="text-left">
              <Link href="/blogs">
                  <h3 className="flex gap-2 items-center hover:gap-4 hover:text-teal hover:fill-tealBright w-fit"> Blogs<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true" width="18" height="18">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                    </svg>
                 </h3>
              </Link>
              <LatestBlogPost />
            </div>

            <div className="text-left">
              <h2 className={`${canela_th.className} text-xlsw`}>Future plans</h2>
              <div className="relative rounded-xl">
                <p>
                  Well I’ve got a lot of things on the fire right now, like revamping this website! It’s a work in progress, but I’m excited to make it a place where all my crazy ideas and late-night thoughts find a home, Maybe I'll start my weekly newsletter—who knows?
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
      <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-8 lg:px-14">
				<Footer/>
			</div>
    </>
  )
}

export default Page
