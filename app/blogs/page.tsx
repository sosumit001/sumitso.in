import Footer from "@/components/footer"
import Header from "@/components/header"
import { BlogPosts } from "@/components/posts"
import { Metadata } from "next"


export const metadata: Metadata = {
	title: 'Blogs'
}

const Page = () => {
	return (
		<>
			<Header/>
			{/* article */}
			<article className={'prose-lg prose-p:text-xl max-w-5xl mx-auto max-md:pt-8 pt-12 ink-300'}>
				<div className={'text-left px-2 sm:px-4 md:px-8 lg:px-14'}>	
					<BlogPosts/>
				</div>
			</article>
			<div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-8 lg:px-14">
				<Footer/>
			</div>
		</>
	)
}

export default Page