import React from "react"
import './global.css'
import { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import Footer from "./components/footer"
import Cursor from "./components/cursor/Cursor"

export const metadata : Metadata = {
	title: 'Sumit So',
	description: 'This is home page',
}

const inter = Inter({
	subsets: ['latin'],
	weight: ['900'],
	display: 'swap',
	variable: '--font-inter',
  })
  
export default function RootLayout({
	children,
  }: {
	children: React.ReactNode
  }) {
		return (
			<html lang="en">
			  <body className="antialiased w-full lg:mx-auto">
				<Cursor></Cursor>
				<main className="flex-auto min-w-0 mt-6 flex flex-col md:px-0">
				  {children}
				</main>
				<Footer/>
			  </body>
			</html>
	)
  }