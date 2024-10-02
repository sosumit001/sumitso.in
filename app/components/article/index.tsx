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
		<div className="min-w-full text-center">
			<article className={'prose-lg lg:text-xl text-[16px] max-w-5xl px-4 xs:px-16 mx-auto'}>
				<HeroHeader text={ heroHeaderText } postText={postText}/>
				{/* Here goes rest of content */}
				<div className="text-left pt-4">
					{ children }
				</div>
			</article>

			<Footer />
		</div>
	</>
  )
}

export default Article
