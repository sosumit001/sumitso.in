"use client"
import Link from "next/link";
import { Abel } from 'next/font/google';
import Image from "next/image";
import { amstelvar } from "@/lib/fonts";
import { useState } from "react";

	const acme = Abel({
		subsets: ['latin'],
		weight: ['400']
	})


const Header = () => {

	const [isMenuClicked, setMenuClicked] = useState(false)

	const toggleMenuButton = () => {
		setMenuClicked(!isMenuClicked)
	}

	return (
		<header id="site-header" className={`text-lg max-md:py-[1.5px] py-3 ${acme.className} bg-white flex flex-col justify-center text-xl items-center gap-[18px] `}>
			{/* for large image */}
			<div className=" w-full max-md:hidden flex items-center justify-between px-4 bg-white">
				{/* icon */}
				<div className="flex gap-2 items-center">
					<Image
						src={'/icon/icon.png'}
						alt="home png"
						height={67}
						width={55}
						style={{width: 'auto'}}
					/>
					<div className={`text-gray-600 ${amstelvar.className}`}>welcome to my internet home</div>
				</div>
				{/* links */}
				<div className={`${amstelvar.className} flex items-center`}>
					<Link className={` px-3 text-center`} href={'/'}> Home </Link>
					<Link className={` px-3 text-center`} href={'/blogs'}> Blogs </Link>
					<Link className={` px-3 text-center`} href={'/contact'}> Contact </Link>
					<Link className={` px-3 text-center`} href={'https://youtube.com/@howdevyou'} target="_blank">
						<div className="bg-[#f6f5f1] flex items-center justify-center rounded-lg px-2 py-1 border-2 border-gray-100">
							<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="whitesmoke" viewBox="0 0 16 16">
								<path fill="grey" d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
							</svg>
						</div>
					</Link>
				</div>
			</div>
			<div className="hidden max-md:flex justify-between relative w-[100%] px-4 bg-white">
				{/* icon */}

				<div className="flex gap-2 items-center">
					<Image
						src={'/icon/icon.png'}
						alt="home png"
						height={64}
						width={48}
						style={{width: 'auto'}}
					/>
				</div>

				{/* menu */}
				<div onClick={toggleMenuButton} className="flex flex-col p-4 items-center justify-center cursor-pointer">
					<div className="flex gap-1 items-center justify-center">
						<div className="w-[5px] h-[5px] rounded-full bg-slate-500"></div>
						<div className="w-[5px] h-[5px] rounded-full bg-slate-500"></div>
						<div className="w-[5px] h-[5px] rounded-full bg-slate-500"></div>
					</div>
					<div className="text-sm select-none">menu</div>
				</div>

			</div>
			{isMenuClicked && (
				<div className="md:hidden w-full flex flex-col">
					<Link className={` px-3 text-center py-2`} href={'/'}> Home </Link>
					<Link className={` px-3 text-center py-2`} href={'/blogs'}> Blogs </Link>
					<Link className={` px-3 text-center py-2`} href={'/contact'}> Contact </Link>
					<Link className={` px-3 text-center py-2`} href={'https://youtube.com/@howdevyou'} target="_blank"> Youtube </Link>
				</div>
			)}
		</header>
	);
}
 
export default Header;
