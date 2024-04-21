import Link from "next/link";

const Footer = () => {
	return ( 
		<div className={'flex justify-between max-w-4xl items-center m-auto h-32 px-8'}>
			{/* left */}
			<div className={'flex gap-2'}>
				<span>©</span>
				<span>2024</span>
				<Link className={'underline'} href={'/'}>SUMITSO</Link>
			</div>
			{/* right */}
			<div>
				<Link href={'#site-header'}>To the top</Link>
			</div>
		</div>
	 );
}
 
export default Footer;