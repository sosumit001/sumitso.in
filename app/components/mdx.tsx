import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import langHttp from "highlight.js/lib/languages/javascript";
import langNginx from "highlight.js/lib/languages/nginx";
import "highlight.js/styles/github.css";
import { canela, canela_regu } from "@/lib/fonts";

import SomeT from "./@ui/some-text";

const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [
      [rehypeHighlight],
      { languages: { http: langHttp, nginx: langNginx } },
    ],
  },
};

function Para(props) {
  return (
    <p
      className={`${canela_regu.className} text-grey text-lg sm:text-xl leading-relaxed my-4`}
      {...props}
    />
  );
}

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table className="min-w-full border-collapse my-6">
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function YouTube({ id }) {
  return (
    <div className="my-8">
      <iframe
        className="aspect-video w-full rounded-lg shadow-md"
        src={"https://www.youtube.com/embed/" + id}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
}

function CustomLink(props) {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} className="text-tealBright hover:underline" {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a className="text-tealBright hover:underline" {...props} />;
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="text-tealBright hover:underline"
      {...props}
    />
  );
}

function RoundedImage(props) {
  return (
    <div className="my-8">
      <Image
        alt={props.alt}
        className="rounded-lg mx-auto shadow-md"
        {...props}
      />
    </div>
  );
}

function StrongText(props) {
  return <strong className="font-semibold text-black" {...props} />;
}

// function Code({ children, ...props }) {
//   let codeHTML = highlight(children)
//   return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
// }

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level, font_fam) {
  const Heading = ({ children }) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      {
        id: slug,
        className: `${font_fam} text-black mt-8 mb-4 ${
          level === 3 ? "text-2xl sm:text-3xl" : "text-" + (5 - level) + "xl"
        } font-semibold`,
      },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor hover:text-tealBright",
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

function CustomUL(props) {
  return <ul className="list-disc pl-6 my-4 space-y-2" {...props} />;
}

function CustomLI(props) {
  return (
    <li
      className={`${canela_regu.className} leading-relaxed text-grey pl-2`}
      {...props}
    />
  );
}

function CustomOL(props) {
  return <ol className="list-decimal pl-6 my-4 space-y-2" {...props} />;
}

function CustomBlockquote(props) {
  return (
    <blockquote
      className="border-l-4 border-teal pl-4 italic my-6 text-grey"
      {...props}
    />
  );
}

function CodeBlock(props) {
  return (
    <pre className="bg-[#1e293b] text-[#f8fafc] p-4 rounded-lg overflow-auto my-6 text-sm sm:text-base">
      {props.children}
    </pre>
  );
}

function InlineCode(props) {
  return (
    <code
      className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono"
      {...props}
    />
  );
}

let components = {
  h1: createHeading(1, canela.className),
  h2: createHeading(2, canela.className),
  h3: createHeading(3, canela.className),
  h4: createHeading(4, canela.className),
  h5: createHeading(5, canela.className),
  h6: createHeading(6, canela.className),
  p: Para,
  strong: StrongText,
  Image: RoundedImage,
  a: CustomLink,
  ul: CustomUL,
  ol: CustomOL,
  li: CustomLI,
  blockquote: CustomBlockquote,
  pre: CodeBlock,
  code: InlineCode,
  Table,
  YouTube,
  SomeT,
};

export function CustomMDX(props) {
  return (
    <MDXRemote
      options={options}
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
