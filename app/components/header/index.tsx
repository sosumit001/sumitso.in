import Link from "next/link";
import { Abel } from 'next/font/google';

const acme = Abel({
	subsets: ['latin'],
	weight: ['400']
  })


const Header = () => {

	return (
		<header id="site-header" className={`text-lg uppercase py-6 ${acme.className} flex justify-center text-xl items-center gap-[18px] `}>
			<Link className={` px-3 text-center`} href={'/'}> Home </Link>
			<Link className={` px-3 text-center`} href={'/blogs'}> blogs </Link>
			<Link className={` px-3 text-center`} href={'/contact'}> Contact </Link>
		</header>
	);
}
 
export default Header;
