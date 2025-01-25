// import Footer from "@/components/footer"
// import Header from "@/components/header"
// import { BlogPosts } from "@/components/posts"
// import { Metadata } from "next"

// export const metadata: Metadata = {
// 	title: 'Blogs'
// }

// const Page = () => {
// 	return (
// 		<>
// 			<Header/>
// 			{/* article */}
// 			<article className={'prose-lg prose-p:text-xl max-w-5xl mx-auto max-md:pt-8 pt-12 ink-300'}>
// 				<div className={'text-left px-2 sm:px-4 md:px-8 lg:px-14'}>
// 					<BlogPosts/>
// 				</div>
// 			</article>
// 			<div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-8 lg:px-14">
// 				<Footer/>
// 			</div>
// 		</>
// 	)
// }

// export default Page

import Footer from "@/components/footer";
import Header from "@/components/header";
import { BlogPosts } from "@/components/posts";
import { canela_sub } from "@/lib/fonts";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16">
          <p
            className={`${canela_sub.className} mt-4 text-xl text-gray-600 max-w-sm mx-auto`}
          >
            Discover stories, thinking, and expertise.
          </p>
        </header>
        <BlogPosts />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
