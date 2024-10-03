import React from "react"
import './global.css'
import { Metadata } from "next"
import { Inter } from "next/font/google"

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
			  <body className="antialiased bg-[#f6f5f1] w-full lg:mx-auto">
				<main className="flex-auto min-w-0 flex flex-col md:px-0">
					<div className="min-w-full text-center" >
				  		{children}
					</div>
				</main>
			  </body>
			</html>
	)
  }