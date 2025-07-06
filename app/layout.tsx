import React from "react";
import "./global.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Sumit So - Developer Advocate & Content Creator",
  description:
    "Developer Advocate at VideoSDK.live & Content Creator sharing journey in tech through blogs, videos, and tutorials. Connecting AI, Tech & society",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Sumit So - Developer Advocate & Content Creator",
    description:
      "Developer Advocate at VideoSDK.live & Content Creator sharing journey in tech through blogs, videos, and tutorials. Connecting AI, Tech & society",
    siteName: "Sumit So",
    images: [
      {
        url: "https://sumitso.in/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Sumit So - Developer Advocate & Content Creator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumit So - Developer Advocate & Content Creator",
    description:
      "Developer Advocate at VideoSDK.live & Content Creator sharing journey in tech through blogs, videos, and tutorials. Connecting AI, Tech & society",
    images: ["https://sumitso.in/opengraph-image.png"],
  },
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["900"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#f6f5f1] w-full lg:mx-auto">
        <main className="flex-auto min-w-0 flex flex-col md:px-0">
          <div className="min-w-full text-center">{children}</div>
        </main>
      </body>
    </html>
  );
}
