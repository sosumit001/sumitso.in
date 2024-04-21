import React from "react"
import { Metadata } from "next"
import { imprima } from "../lib/fonts"

export const metadata: Metadata = {
	title: 'Sumit So | Contact'
}

const Page = () => {
	return (
		<div className="min-w-full px-2 text-center  text-3xl md:text-4xl lg:text-5xl">
			{/* header */}
			
			<header className={`${imprima.className} my-4 md:my-6 lg:my-10`}>
				Contact
			</header>

			{/* article */}
			<article className={'prose-lg prose-p:text-xl max-w-5xl mx-auto py-1 bg-[#ededed]'}>
				<div className={'text-left px-2 sm:px-4 md:px-8 lg:px-14'}>
					<div className={`text-left ${imprima.className} px-4`}>
					<p>
  						The best way to reach me is through email, as I always keep a browser tab open dedicated to my email workspace at <strong className="font-bold">contact@sumitso.in</strong>. If that doesn't work for you, feel free to send me a direct message on either <a className={'underline'} target="_blank" href="https://www.linkedin.com/in/sumit-so-1415881a1">LinkedIn</a> or <a className={'underline'} target="_blank" href="https://instagram.com/_qumit">Instagram</a>.
					</p>
					<p>
  						If I had an OnlyFans account, I would definitely consider giving out free access as a unique way to connect. Alas, that's not a venture I've explored, so we'll have to stick to more traditional means of communication for now.
					</p>

				</div>
					
				</div>
				
			</article>
	  	</div>
	)
}

export default Page