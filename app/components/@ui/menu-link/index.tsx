import Link from "next/link"
import { lato } from "@/lib/fonts"
type TMenuLink = {
	href: string
	value: string
	postText?: string
	target?: string
}

const MenuLink = ({ href, value, postText, target }: TMenuLink) => {
	return (
		<Link
			className={`${lato.className} text-[1.1rem] hover:text-tealBright hover:pb-1 text-black relative inline-flex items-center gap-1 group after:absolute after:left-[10%] after:top-[100%] hover:after:h-[2px] after:h-0 after:w-[80%] after:bg-black`}
			href={href}
			target={target}
		>
			{value}
			{postText && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					className="w-3.5 h-3.5 text-tealBright transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
				>
					<path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
				</svg>
			)}
		</Link>
	)
}

export default MenuLink