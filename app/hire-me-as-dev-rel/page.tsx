import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Sumit Mor",
  description: "Sumit Mor's work experience and resume.",
};

export default function HireMePage() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white">
      <iframe
        src="/sumit-mor.pdf#view=FitH"
        className="w-full h-full border-none"
        title="Sumit Mor Resume"
      >
        <p>
          Your browser does not support iframes.
          <a href="/sumit-mor.pdf">Download the PDF instead.</a>
        </p>
      </iframe>
    </div>
  );
}
