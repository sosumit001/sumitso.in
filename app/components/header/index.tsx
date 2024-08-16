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
				<div className={`${amstelvar.className}`}>
					<Link className={` px-3 text-center`} href={'/'}> Home </Link>
					<Link className={` px-3 text-center`} href={'/blogs'}> Blogs </Link>
					<Link className={` px-3 text-center`} href={'/contact'}> Contact </Link>
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
				</div>
			)}
		</header>
	);
}
 
export default Header;
