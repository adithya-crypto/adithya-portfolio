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
  title: {
    default: "Adithya Sriramoju | AI/ML Software Engineer | Portfolio",
    template: "%s | Adithya Sriramoju",
  },
  description:
    "Adithya Sriramoju – AI/ML Software Engineer at Mastercard with 3+ years of experience building production-grade ML systems, GenAI applications, and scalable LLM-based solutions. MS in Computer Science from Northern Arizona University.",
  metadataBase: new URL("https://adithyasriramoju.netlify.app"),
  keywords: [
    "Adithya Sriramoju",
    "Adithya Sriramoju portfolio",
    "Adithya Sriramoju software engineer",
    "AI Software Engineer",
    "ML Engineer",
    "Mastercard software engineer",
    "Full Stack Developer",
    "AI Engineer portfolio",
    "machine learning engineer",
    "LLM developer",
    "GenAI developer",
    "React developer",
    "Python developer",
    "Northern Arizona University",
    "Vardhaman College of Engineering",
  ],
  authors: [{ name: "Adithya Sriramoju", url: "https://adithyasriramoju.netlify.app" }],
  creator: "Adithya Sriramoju",
  publisher: "Adithya Sriramoju",
  alternates: {
    canonical: "https://adithyasriramoju.netlify.app",
  },
  openGraph: {
    title: "Adithya Sriramoju | AI/ML Software Engineer | Portfolio",
    description:
      "AI/ML Software Engineer at Mastercard. Building production-grade ML systems, GenAI applications, and scalable LLM-based solutions. Explore projects, experience, and achievements.",
    url: "https://adithyasriramoju.netlify.app",
    siteName: "Adithya Sriramoju Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/img/adithya.jpg",
        width: 1200,
        height: 630,
        alt: "Adithya Sriramoju - AI/ML Software Engineer Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adithya Sriramoju | AI/ML Software Engineer",
    description:
      "AI/ML Software Engineer at Mastercard. Building production-grade ML systems and GenAI applications.",
    images: ["/img/adithya.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "googlefc0e3f7b2a66cd5e",
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
              image: "https://adithyasriramoju.netlify.app/img/adithya.jpg",
              jobTitle: "AI/ML Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Mastercard",
                url: "https://www.mastercard.com",
              },
              alumniOf: [
                {
                  "@type": "CollegeOrUniversity",
                  name: "Northern Arizona University",
                  url: "https://www.nau.edu",
                },
                {
                  "@type": "CollegeOrUniversity",
                  name: "Vardhaman College of Engineering",
                },
              ],
              knowsAbout: [
                "Machine Learning",
                "Artificial Intelligence",
                "LLM Systems",
                "GenAI Applications",
                "Full Stack Development",
                "Python",
                "React",
                "Node.js",
                "AWS",
                "Kubernetes",
                "MLOps",
              ],
              sameAs: [
                "https://github.com/adithya-crypto",
                "https://www.linkedin.com/in/adithya-sriramoju/",
                "https://www.instagram.com/adithya.sriramoju/",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "2323 E Apache Blvd",
                addressLocality: "Tempe",
                addressRegion: "AZ",
                postalCode: "85288",
                addressCountry: "US",
              },
              email: "adithyas042@gmail.com",
              telephone: "+19283107976",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Adithya Sriramoju Portfolio",
              url: "https://adithyasriramoju.netlify.app",
              description:
                "Portfolio of Adithya Sriramoju - AI/ML Software Engineer at Mastercard",
              author: {
                "@type": "Person",
                name: "Adithya Sriramoju",
              },
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
