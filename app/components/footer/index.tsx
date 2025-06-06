import { canela_th } from "@/lib/fonts";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className={` ${canela_th.className}  mt-8 text-black flex justify-between relative w-[100%] px-4 max-md:h-20 h-32`}
    >
      {/* left */}
      <div className={"flex gap-2"}>
        <span>©</span>
        <span>2024</span>
        <Link className={"hover:text-tealBright"} href={"/"}>
          SUMITSO
        </Link>
      </div>
      {/* right */}
      <div>
        <Link href={"#site-header"}>
          <span className="max-md:hidden flex hover:text-tealBright">
            To the top
          </span>
          <span className="max-md:flex hidden hover:text-tealBright">Up</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
