import React from "react"
import '../global.css'
import { Metadata } from "next"
import Cursor from "@/components/cursor/Cursor"
import Footer from "@/components/footer"

export const metadata : Metadata = {
	title: 'Sumit So',
	description: 'This is home page',
}

  
export default function RootLayout({
	children,
  }: {
	children: React.ReactNode
  }) {
		return (
		<div>
			{children}
		</div>
	)
  }