import Footer from "@/components/footer"
import Header from "@/components/header"
import { BlogPosts } from "@/components/posts"
const Page = () => {
	return (
		<div className="bg-white min-w-full px-2 text-center w-[95%] md:w-[90%] lg:w-[80%]  text-3xl md:text-4xl lg:text-5xl">
			<Header/>
			{/* article */}
			<article className={'prose-lg prose-p:text-xl max-w-5xl mx-auto py-1'}>
				<div className={'text-left px-2 sm:px-4 md:px-8 lg:px-14'}>	
					<BlogPosts/>
					<Footer/>
				</div>
			</article>
		</div>
	)
}

export default Page