import React from "react";
import "../global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sumit Mor | Stories",
  description:
    "Stories, experiences, and reflections from Sumit Mor. Tales from conferences, life experiences, and the human side of being a developer.",
  openGraph: {
    title: "Sumit Mor | Stories",
    description:
      "Stories, experiences, and reflections from Sumit Mor. Tales from conferences, life experiences, and the human side of being a developer.",
    type: "website",
    locale: "en_US",
    siteName: "Sumit Mor",
    url: "/stories",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumit Mor | Stories",
    description:
      "Stories, experiences, and reflections from Sumit Mor. Tales from conferences, life experiences, and the human side of being a developer.",
  },
  keywords: [
    "Sumit Mor",
    "Stories",
    "Experiences",
    "Conferences",
    "Life Stories",
    "Developer Life",
    "Reflections",
    "Thoughts",
  ],
  authors: [{ name: "Sumit Mor", url: "https://sumitso.in" }],
  creator: "Sumit Mor",
  publisher: "Sumit Mor",
  alternates: {
    canonical: "/stories",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
