import Link from "next/link"
import { lato } from "@/lib/fonts"
type TMenuLink = {
	href: string
	value: string
	postText?: string
}

const MenuLink = ( {href, value, postText}: TMenuLink ) => {
	return (
		<Link className={`${lato.className} text-[1.1rem] hover:text-tealBright hover:pb-1 text-black relative text-center after:absolute after:left-[10%] after:top-[100%] hover:after:h-[2px] after:h-0 after:w-[80%] after:bg-black`} href={ href }> 
			<span> {value} {postText && <b className="text-tealBright  px-1">{postText}</b>} </span>
		</Link>
	)
}

export default MenuLink