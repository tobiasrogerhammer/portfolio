import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tobias Hammer - Full-Stack Developer",
  description: "Portfolio of Tobias Hammer, a passionate full-stack developer specializing in React, Next.js, and modern web technologies. Explore my projects and get in touch!",
  keywords: ["developer", "portfolio", "react", "nextjs", "typescript", "web development", "tobias hammer"],
  authors: [{ name: "Tobias Hammer" }],
  creator: "Tobias Hammer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tobiasrogerhammer.github.io",
    title: "Tobias Hammer - Full-Stack Developer",
    description: "Portfolio of Tobias Hammer, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.",
    siteName: "Tobias Hammer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tobias Hammer - Full-Stack Developer",
    description: "Portfolio of Tobias Hammer, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.",
    creator: "@tobiasrogerhammer",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
