import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shahzaib - Full Stack Developer | MERN Stack & Next.js Specialist",
  description: "Experienced Full Stack Developer specializing in MERN Stack and Next.js. Building modern, scalable, and performant web applications with expertise in React, Node.js, MongoDB, and cloud deployment.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "TypeScript",
    "Web Development",
    "Shahzaib",
  ],
  author: "Shahzaib",
  creator: "Shahzaib",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0",
  themeColor: "#0b0614",
  openGraph: {
    title: "Shahzaib - Full Stack Developer | MERN Stack & Next.js",
    description: "Explore my portfolio showcasing expertise in modern web development with MERN Stack and Next.js.",
    url: "https://mianshahzaib.vercel.app",
    siteName: "Shahzaib Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://mianshahzaib.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shahzaib - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahzaib - Full Stack Developer",
    description: "Specializing in MERN Stack and Next.js. Building modern web applications.",
    creator: "@shahzaib",
    images: ["https://mianshahzaib.vercel.app/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://mianshahzaib.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shahzaib",
              title: "Full Stack Developer",
              description: "Full Stack Developer specializing in MERN Stack and Next.js",
              url: "https://mianshahzaib.vercel.app",
              jobTitle: "Full Stack Developer",
              sameAs: [
                "https://github.com/mianshahzaib",
                "https://linkedin.com/in/mianshahzaib",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
