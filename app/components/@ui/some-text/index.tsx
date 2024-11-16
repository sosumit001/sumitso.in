import { canela_regu } from "@/lib/fonts";

const SomeT = ({ text, href }: { text: string; href: string }) => {
  return (
    <span className="relative group inline-block">
      {/* The hoverable element that reveals the link */}
      <span
        className={`relative ${canela_regu.className} text-xl text-tealBright`}
      >
        {text}
      </span>

      {/* The actual link, hidden by default and revealed on hover */}
      <span
        className="absolute text-grey font-bold invisible group-hover:visible py-2 px-4 bg-white left-1/2 transform -translate-x-1/2 -translate-y-[120%] mt-2 shadow-shadowMd"
        style={{ whiteSpace: "nowrap" }}
      >
        <a
          href={href}
          className="block text-grey text-lg"
          target="_blank"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "260px", // Adjust this as per the required width
          }}
        >
          {href}
        </a>
        {/* Triangle pointer below the popup */}
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white" />
      </span>
    </span>
  );
};

export default SomeT;
