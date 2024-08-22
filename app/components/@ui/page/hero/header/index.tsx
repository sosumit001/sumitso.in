import { canela } from "@/lib/fonts";

type HeroHeaderProps = {
  text: string;
  postText?: string | null;
};

const HeroHeader: React.FC<HeroHeaderProps> = ({ text, postText = null }) => {
  return (
    <header
      className={`${canela.className} text-left sm:px-4 md:px-8 lg:px-14 text-grey leading-tight lg:text-7xl md:text-6xl text-5xl w-[100%] mx-auto py-6 md:py-6 lg:py-8`}
    >
      {text} {postText && <b className="text-tealBright">{postText}</b>}
    </header>
  );
};

export default HeroHeader;
