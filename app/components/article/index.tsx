import React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroHeader from "@/components/@ui/page/hero/header"
import { canela_th } from "@/lib/fonts";


type TMetaData = {
	children: React.ReactNode
	heroHeaderText: string
	postText?: string
}

const Article = ( { children, heroHeaderText, postText }: TMetaData ) => {
  return (
	<>
		<div className="min-w-full flex flex-col text-center min-h-screen">
				<Header />
				<article className={'prose-lg lg:text-xl text-left flex flex-1 text-[16px] max-w-5xl px-4 xs:px-16 mx-auto'}>
					{/* Here goes rest of content */}
						<div className={`${canela_th.className} flex flex-col justify-between px-4 md:px-8 lg:px-12`}>
							<div>
								<HeroHeader text={ heroHeaderText } postText={postText}/>
								{ children }
							</div>
							<Footer />
						</div>
				</article>

		</div>
	</>
  )
}

export default Article
