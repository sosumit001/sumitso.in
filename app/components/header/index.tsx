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
		<header id="site-header" className={`text-lg py-6 ${acme.className} bg-white flex flex-col justify-center text-xl items-center gap-[18px] `}>
			{/* for large image */}
			<div className=" w-full max-md:hidden flex items-center justify-between px-4 bg-white">
				{/* icon */}
				<div className="flex gap-2 items-center">
					<Image
						src={'/icon/icon.png'}
						alt="home png"
						height={100}
						width={80}
					/>
					<div className={`text-gray-600 ${amstelvar.className}`}>welcome to my internet home</div>
				</div>
				{/* links */}
				<div className={`${amstelvar.className}`}>
					<Link className={` px-3 text-center`} href={'/'}> Home </Link>
					<Link className={` px-3 text-center`} href={'/blogs'}> blogs </Link>
					<Link className={` px-3 text-center`} href={'/contact'}> Contact </Link>
				</div>
			</div>
			<div className="hidden max-md:flex justify-between relative w-[100%] px-4 bg-white">
				{/* icon */}

				<div className="flex gap-2 items-center">
					<Image
						src={'/icon/icon.png'}
						alt="home png"
						height={75}
						width={67}
					/>
				</div>

				{/* menu */}
				<div onClick={toggleMenuButton} className="flex flex-col gap-1 p-4 items-center justify-center cursor-pointer">
					<div className="flex gap-1 items-center justify-center">
						<div className="w-2 h-2 rounded-full bg-black"></div>
						<div className="w-2 h-2 rounded-full bg-black"></div>
						<div className="w-2 h-2 rounded-full bg-black"></div>
					</div>
					<div className="text-xs select-none">menu</div>
				</div>

			</div>
			{isMenuClicked && (
				<div className="md:hidden w-full flex flex-col">
					<Link className={` px-3 text-center py-2`} href={'/'}> Home </Link>
					<Link className={` px-3 text-center py-2`} href={'/blogs'}> blogs </Link>
					<Link className={` px-3 text-center py-2`} href={'/contact'}> Contact </Link>
				</div>
			)}
		</header>
	);
}
 
export default Header;
