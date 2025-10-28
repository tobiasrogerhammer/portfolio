import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tobias Hammer - Developer & Tech Enthusiast",
  description: "Tobias Hammer is a passionate developer and tech enthusiast with expertise in full-stack development, Java programming, and user-centered design. Currently pursuing Applied Computer Technology at OsloMet, co-founder of Renow AS, and experienced in creating innovative digital solutions. Explore my projects, and professional journey.",
  keywords: [
    "Tobias Hammer", 
    "developer", 
    "portfolio", 
    "full-stack developer", 
    "Java developer", 
    "React", 
    "Next.js", 
    "TypeScript", 
    "web development", 
    "applied computer technology", 
    "OsloMet", 
    "Renow AS", 
    "entrepreneur", 
    "tech enthusiast", 
    "user-centered design", 
    "universal design", 
    "Norway developer"
  ],
  authors: [{ name: "Tobias Hammer" }],
  creator: "Tobias Hammer",
  icons: {
    icon: [
      { url: "/th-logo.png", sizes: "any" },
      { url: "/th-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/th-logo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/th-logo.png",
    apple: [
      { url: "/th-logo.png", sizes: "180x180" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tobiasrogerhammer.github.io",
    title: "Tobias Hammer - Developer & Tech Enthusiast",
    description: "Passionate developer and tech enthusiast specializing in full-stack development, Java programming, and user-centered design. Currently studying Applied Computer Technology at OsloMet and co-founder of Renow AS.",
    siteName: "Tobias Hammer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tobias Hammer - Developer & Tech Enthusiast",
    description: "Passionate developer and tech enthusiast specializing in full-stack development, Java programming, and user-centered design. Currently studying Applied Computer Technology at OsloMet and co-founder of Renow AS.",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          defaultTheme="system"
          storageKey="portfolio-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
