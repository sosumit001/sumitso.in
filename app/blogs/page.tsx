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
