import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import langHttp from "highlight.js/lib/languages/javascript";
import langNginx from "highlight.js/lib/languages/nginx";
import "highlight.js/styles/github-dark.css";
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
      className={`${canela_regu.className} text-grey text-xl leading-[38px]`}
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
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function YouTube({ id }) {
  return (
    <div>
      <iframe
        className="aspect-video w-full"
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
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
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
        className: `${font_fam} text-black ${
          level === 3 ? "text-3xl" : "text-" + (6 - level) + "xl"
        }`,
      },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

function CustomUL(props) {
  return <ul className="list-disc pl-6 mb-4 text-lg" {...props} />;
}

function CustomLI(props) {
  return (
    <li
      className={`${canela_regu.className} leading-relaxed text-grey`}
      {...props}
    />
  );
}

function StrongText({ children }) {
  return <strong className="font-semibold text-tealBright">{children}</strong>;
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
  li: CustomLI,
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
