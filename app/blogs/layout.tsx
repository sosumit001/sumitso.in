import React from "react";
import "../global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sumit So | Blogs",
  description: "Discover stories, thinking, and expertise.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
