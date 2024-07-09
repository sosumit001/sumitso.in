import Link from "next/link";

const Footer = () => {
  return (
    <div className={'flex justify-between max-w-5xl mx-auto items-center max-md:h-20 h-32 max-md:px-8 px-6'}>
      {/* left */}
      <div className={'flex gap-2'}>
        <span>©</span>
        <span>2024</span>
        <Link className={'underline'} href={'/'}>SUMITSO</Link>
      </div>
      {/* right */}
      <div>
        <Link href={'#site-header'}>
          <span className="max-md:hidden flex">To the top</span>
          <span className="max-md:flex hidden">Up</span>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
