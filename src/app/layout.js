import ThmeModeSwither from "@/components/shared/others/ThmeModeSwither";
import { Suspense } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./css/animate.min.css";
import "./css/backToTop.css";
import "./css/flaticon_gerold.css";
import "./css/font-awesome-pro.min.css";
import "./css/glightbox.min.css";
import "./css/nice-select2.css";
import "./css/odometer-theme-default.css";
import "./globals.css";

export const metadata = {
  title: "Adithya Sriramoju | Full Stack Developer & AI Engineer",
  description:
    "Portfolio of Adithya Sriramoju – Full Stack Developer skilled in React, Node.js, Python, and AI-powered solutions. Explore my projects, blogs, and achievements.",
  metadataBase: new URL("https://adithyasriramoju.netlify.app"),
  openGraph: {
    title: "Adithya Sriramoju | Full Stack Developer Portfolio",
    description:
      "Explore the full-stack and AI projects of Adithya Sriramoju. Built with React, Node.js, and cutting-edge technologies.",
    url: "https://adithyasriramoju.netlify.app",
    siteName: "Adithya Sriramoju Portfolio",
    images: [
      {
        url: "/img/adithya.jpg", // Upload this to /public folder
        width: 1200,
        height: 630,
        alt: "Adithya Sriramoju Portfolio Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adithya Sriramoju Portfolio",
    description:
      "Full Stack Developer & AI Enthusiast. Explore React, Node.js, and AI-powered projects.",
    images: ["/img/adithya.jpg"],
    creator: "@your_twitter_handle", // optional
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Adithya Sriramoju",
              url: "https://adithyasriramoju.netlify.app",
              jobTitle: "Full Stack Developer",
              sameAs: [
                "https://github.com/adithya-crypto",
                "https://linkedin.com/in/adithyasriramoju",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sora dark:bg-dark-color overflow-x-hidden relative">
        <Suspense fallback={<></>}>{children}</Suspense>
        <ThmeModeSwither />
      </body>
    </html>
  );
}
