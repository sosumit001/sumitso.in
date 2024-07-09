import Footer from "@/components/footer"
import Header from "@/components/header"
import { BlogPosts } from "@/components/posts"
const Page = () => {
	return (
		<div className="min-w-full px-2 text-center w-[95%] md:w-[90%] lg:w-[80%]">
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
		</div>
	)
}

export default Page