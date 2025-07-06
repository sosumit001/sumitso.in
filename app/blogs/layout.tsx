import React from "react";
import "../global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sumit So | Blogs",
  description:
    "Discover stories, thinking, and expertise from Sumit So - Developer Advocate at VideoSDK.live. Explore tutorials, insights, and technical deep-dives on React, WebAssembly, and modern web development.",
  openGraph: {
    title: "Sumit So | Blogs",
    description:
      "Discover stories, thinking, and expertise from Sumit So - Developer Advocate at VideoSDK.live. Explore tutorials, insights, and technical deep-dives on React, WebAssembly, and modern web development.",
    type: "website",
    locale: "en_US",
    siteName: "Sumit So",
    url: "/blogs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumit So | Blogs",
    description:
      "Discover stories, thinking, and expertise from Sumit So - Developer Advocate at VideoSDK.live. Explore tutorials, insights, and technical deep-dives on React, WebAssembly, and modern web development.",
  },
  keywords: [
    "Sumit So",
    "Developer Advocate",
    "VideoSDK",
    "React",
    "WebAssembly",
    "JavaScript",
    "TypeScript",
    "Web Development",
    "Programming",
    "Technical Tutorials",
    "Blog",
    "Tech Articles",
  ],
  authors: [{ name: "Sumit So", url: "https://sumitso.in" }],
  creator: "Sumit So",
  publisher: "Sumit So",
  alternates: {
    canonical: "/blogs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
