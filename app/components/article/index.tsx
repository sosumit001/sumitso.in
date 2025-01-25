import React from "react";
import Footer from "@/components/footer";
import HeroHeader from "@/components/@ui/page/hero/header";
import { canela_th } from "@/lib/fonts";

type TMetaData = {
  children: React.ReactNode;
  heroHeaderText?: string;
  postText?: string;
};

const Article = ({ children, heroHeaderText, postText }: TMetaData) => {
  return (
    <div className="flex flex-col justify-between mx-auto min-h-screen bg-gradient-to-b max-w-7xl">
      <article
        className={" lg:text-xl text-left text-[16px] px-4 xs:px-16 mx-auto"}
      >
        {/* Here goes rest of content */}
        <div
          className={`${canela_th.className} flex flex-col justify-between px-4 md:px-8 lg:px-12`}
        >
          <div>
            {heroHeaderText && (
              <HeroHeader text={heroHeaderText} postText={postText} />
            )}
            {children}
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default Article;
