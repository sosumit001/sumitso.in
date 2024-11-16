import React from "react";

// Define the possible directions for the sliding effect
type Direction = "left" | "right";

interface SlidingLinkProps {
  href: string;
  direction: Direction;
  children: React.ReactNode;
}

const SlidingLink: React.FC<SlidingLinkProps> = ({
  href,
  direction,
  children,
}) => {
  const isLeft = direction === "left";

  return (
    <a
      href={href}
      className={`relative inline-flex items-center text-teal-500 text-2xl hover:text-black transition-all duration-200 ${
        isLeft ? "hover:pl-6" : "hover:pr-6"
      }`}
    >
      {/* Text */}
      <span className="relative z-10">{children}</span>

      {/* Arrow Icon */}
      <span
        className={`absolute transition-all duration-200 opacity-0 hover:opacity-100 ${
          isLeft ? "right-full translate-x-full" : "left-full -translate-x-full"
        }`}
        style={{
          width: "16px",
          height: "16px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundImage: isLeft
            ? 'url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20fill%3D%27none%27%20viewBox%3D%270%200%2024%2024%27%20stroke%3D%27teal%27%3E%3Cpath%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%20stroke-width%3D%272%27%20d%3D%27M19%2012H5m7-7l-7%207%207%207%27/%3E%3C/svg%3E")'
            : 'url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20fill%3D%27none%27%20viewBox%3D%270%200%2024%2024%27%20stroke%3D%27teal%27%3E%3Cpath%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%20stroke-width%3D%272%27%20d%3D%27M5%2012h14m-7%207l7-7-7-7%27/%3E%3C/svg%3E")',
        }}
      />
    </a>
  );
};

export default SlidingLink;
