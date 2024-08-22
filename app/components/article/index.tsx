import React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroHeader from "@/components/@ui/page/hero/header"

type TMetaData = {
	children: React.ReactNode
	heroHeaderText: string
	postText?: string
}

const Article = ( { children, heroHeaderText, postText }: TMetaData ) => {
  return (
	<>
		<Header />
		<div className="min-w-full px-2 text-center">
			<article className={'prose-lg lg:text-xl text-[16px] max-w-5xl mx-auto px-4'}>
				<HeroHeader text={ heroHeaderText } postText={postText}/>
				{/* Here goes rest of content */}
				<div className="text-left px-2 sm:px-4 md:px-8 lg:px-14 pt:10 md:pt-12 lg:pt-16">
					{ children }
				</div>
			</article>

			<Footer />
		</div>
	</>
  )
}

export default Article
