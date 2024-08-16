import React from "react"
import { Metadata } from "next"
import { amstelvar400, amstelvar } from "../lib/fonts"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: 'Sumit So | Contact'
}

const Page = () => {
  return (
    <div className="min-w-full px-2 text-center">
      <Header />
      
      {/* header */}
      <header className={`${amstelvar400.className} leading-4 lg:text-7xl md:text-6xl text-5xl w-[100%] px-6 sm:px-16 md:px-32 lg:px-40 mx-auto bg-white py-16`}>
        Contact
      </header>

      {/* article */}
      <article className={'prose-lg lg:text-xl text-[16px] max-w-5xl mx-auto'}>
        <div className={'text-left py-1 pt-16'}>
          <div className={`text-left ${amstelvar.className}`}>
            <p>
              The best way to reach me is through email, as I always keep a browser tab open dedicated to my email workspace at <strong className="font-bold">contact@sumitso.in</strong>. If that doesn't work for you, feel free to send me a direct message on either <a className={'underline'} target="_blank" href="https://www.linkedin.com/in/sumit-so-1415881a1">LinkedIn</a> or <a className={'underline'} target="_blank" href="https://instagram.com/_qumit">Instagram</a>.
            </p>
            <p>
              If I had an OnlyFans account, I would definitely consider giving out free access as a unique way to connect. Alas, that's not a venture I've explored, so we'll have to stick to more traditional means of communication for now.
            </p>
          </div>
        </div>
      </article>
        <Footer />
    </div>
  )
}

export default Page
