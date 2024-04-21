import Image from "next/image";
import type { StaticImageData } from "next/image";
import { CSSProperties } from "react";

interface TMenuIcon {
	src: string | StaticImageData
	link: string
	width: number
	alt: string
	br?: string
	bg?: boolean
	sm?: {w: number, h: number}
}
const iconStyle: CSSProperties = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	borderRadius: 5,
}
const MenuIcon = ({src, link, width, alt, br, bg, sm}:TMenuIcon) => {
	return (
		<a href={link} target="_blank" style={{...iconStyle, background: bg? "#2792BF" : "", width: sm? sm.w: "", height : sm? sm.h : "" }}>
		<Image
			src={src}
			width={width}
			alt={alt}
			style={{borderRadius: br?br: 0}}
			priority={true}
		/>
	</a>
	);
}
 
export default MenuIcon;