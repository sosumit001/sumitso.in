import Link from "next/link";
import { Alegreya_Sans_SC } from 'next/font/google';

const Alegreya_sc = Alegreya_Sans_SC({
	subsets: ['latin'],
	weight: ['500']
  })


const Header = () => {

	return (
		<header id="site-header" className={`text-lg uppercase py-6 ${Alegreya_sc.className} flex justify-center text-xl items-center gap-[18px] `}>
			<Link className={` px-3 text-center`} href={'/'}> Home </Link>
			<Link className={` px-3 text-center`} href={'/blogs'}> blogs </Link>
			<Link className={` px-3 text-center`} href={'/contact'}> Contact </Link>
		</header>
	);
}
 
export default Header;
