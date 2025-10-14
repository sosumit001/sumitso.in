import React from "react";
import "../global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sumit So | Stories",
  description:
    "Stories, experiences, and reflections from Sumit So. Tales from conferences, life experiences, and the human side of being a developer.",
  openGraph: {
    title: "Sumit So | Stories",
    description:
      "Stories, experiences, and reflections from Sumit So. Tales from conferences, life experiences, and the human side of being a developer.",
    type: "website",
    locale: "en_US",
    siteName: "Sumit So",
    url: "/stories",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumit So | Stories",
    description:
      "Stories, experiences, and reflections from Sumit So. Tales from conferences, life experiences, and the human side of being a developer.",
  },
  keywords: [
    "Sumit So",
    "Stories",
    "Experiences",
    "Conferences",
    "Life Stories",
    "Developer Life",
    "Reflections",
    "Thoughts",
  ],
  authors: [{ name: "Sumit So", url: "https://sumitso.in" }],
  creator: "Sumit So",
  publisher: "Sumit So",
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
