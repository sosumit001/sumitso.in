import React from "react"
import { Metadata } from "next"
import { lato, amstelvar400, amstelvar } from "./lib/fonts"
import Image from "next/image"
import Header from "./components/header"
import { LatestBlogPost } from "./components/post"
import Footer from "./components/footer"

export const metadata: Metadata = {
	title: 'Sumit So.'
}

const Page = () => {
	return (
		<div className="min-w-full px-2 text-center ">
			<Header/>
			{/* header */}
			
			<header className={`${amstelvar400.className} leading-tight lg:text-7xl md:text-6xl text-5xl w-[100%] px-6 sm:px-16 md:px-32 lg:px-40 mx-auto bg-white py-10 md:py-14 lg:py-16`}>
			Sumit So’s Blog: Thoughts, Ideas, and Reflections
			</header>

			{/* article */}
			<article className={'prose-lg lg:text-xl text-[16px]  max-w-5xl mx-auto px-4'}>
				{/* about me */}
				<div className={'text-left px-2 sm:px-4 md:px-8 lg:px-14 bg-[#ededed] pt:10 md:pt-12 lg:pt-16'}>
				<div className={`${amstelvar.className}`}>
					<p>
					Hello and welcome! This is Sumit So, I'm glad you're here. This site is my little corner of the internet where I share my journey as a <a className={'underline'} target="blank" href="https://youtube.com/@howdevyou">YouTuber</a> and blogger
					</p>
					<p>
					I don't know a lot of people, but I think this is a good start to make videos and post articles. Feel free to connect with me if you think I can help in some way or if you'd like to collaborate. I’m excited about the possibilities of what we can create together
					</p>

					{/* about me */}
				<div className={'text-left'}>
					<h2 className={`${lato.className} text-xlsw`}>About me</h2>
					<p>
					About me, huh? Alright, let’s see. It’s the 19th of April, 2024, and as I write this article, I’m 23. Just finished my engineering degree—four years wasted in college. 
					Right now, I’m an intern doing a dumb job as a Full Stack Developer at some freaking startup. 
					</p>
					<div className="relative py-6 bg-black">
					<Image
						src={'/sumit-home.png'}
						alt="Sumit So : Home Page"
						width={800}
						height={600}
						style={{margin:'auto'}}
						priority
					/>
					</div>
					<p>
					But the good part? I took a 1 BHK apartment with one big-ass room and a really nice kitchen. I can drink beer, play loud music, and sleep without clothes. I can literally do anything. Like, here’s an image of me watching images of the Dalai Lama, which has nothing to do with this 'about' section. That’s cool, isn’t it?
					</p>
				</div>

				<div className={'text-left'}>

					<h2 className={`${lato.className} text-xlsw`}>Recent Articles</h2>
					{/* Recent Articles */}
					<LatestBlogPost/>
				</div>

				<div className={'text-left'}>

					<h2 className={`${lato.className} text-xlsw`}>Future plans</h2>

					{/* future plans */}
					<div className="relative py-6 rounded-xl px-4 flex flex-wrap row-auto justify-between gap-4 items-center">
					<div className={'flex justify-center'}>
					<Image
						src={'/future-plans.png'}
						alt="Future Plan's"
						width={200}
						height={200}
						style={{margin:'auto'}}
						priority
					/>
					</div>
					<p className=" sm:w-[50%] md:w-[60%] lg:w-[70%] w-[100%]">
					Well I’ve got a lot of things on the fire right now, like revamping this website! It’s a work in progress, but I’m excited to make it a place where all my crazy ideas and late-night thoughts find a home, Maybe I'll start my weekly newsletter—who knows?
					</p>
					</div>
				</div>
				</div>

				</div>
				
				<Footer/>
			</article>
	  	</div>
	)
}

export default Page