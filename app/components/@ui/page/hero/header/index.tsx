import { canela } from "@/lib/fonts";

type HeroHeaderProps = {
  text: string;
  postText?: string | null;
};

const HeroHeader: React.FC<HeroHeaderProps> = ({ text, postText = null }) => {
  return (
    <header
      className={`${canela.className} mt-8 md:mt-16 text-left text-grey leading-tight md:text-6xl text-4xl sm:text-5xl w-full px-4 sm:px-8 lg:px-16`}
    >
      {text} {postText && <b className="text-tealBright">{postText}</b>}
    </header>
  );
};

export default HeroHeader;
