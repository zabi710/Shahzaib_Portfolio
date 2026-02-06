import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shahzaib - Full Stack Developer | MERN Stack & Next.js",
  description: "Full Stack Developer specializing in MERN Stack and Next.js. Explore my projects, skills, and experience in building modern web applications.",
  keywords: "Full Stack Developer, MERN Stack, Next.js, React, Node.js, MongoDB, Web Developer, Frontend Developer, Backend Developer, mianshahzaib",
  author: "Shahzaib",
  robots: "index, follow",
  openGraph: {
    title: "Shahzaib - Full Stack Developer",
    description: "Full Stack Developer specializing in MERN Stack and Next.js. Building modern, scalable web applications.",
    url: "https://mianshahzaib.vercel.app",
    siteName: "Shahzaib Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahzaib - Full Stack Developer",
    description: "Full Stack Developer specializing in MERN Stack and Next.js",
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
