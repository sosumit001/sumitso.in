import React from "react";
import { Metadata } from "next";
import { canela_th } from "../lib/fonts";
import Article from "@/components/article";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Contact",
};

const Page = () => {
  return (
    <>
      <Header />
      <Article heroHeaderText="Contact" postText="">
        <div className="max-w-7xl">
          <p className="py-6">
            The best way to reach me is through email, as I always keep a
            browser tab open dedicated to my email workspace at{" "}
            <strong className="font-bold">contact@sumitso.in</strong>. If that
            doesn't work for you, feel free to send me a direct message on
            either{" "}
            <a
              className={"underline"}
              target="_blank"
              href="https://www.linkedin.com/in/sumit-so-1415881a1"
            >
              LinkedIn
            </a>{" "}
            or{" "}
            <a
              className={"underline"}
              target="_blank"
              href="https://instagram.com/_qumit"
            >
              Instagram
            </a>
            .
          </p>
          <p className="mt-4">
            If I had an OnlyFans account, I would definitely consider giving out
            free access as a unique way to connect. Alas, that's not a venture
            I've explored, so we'll have to stick to more traditional means of
            communication for now.
          </p>
        </div>
      </Article>
    </>
  );
};

export default Page;
