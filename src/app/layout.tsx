import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Optimize font loading
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Optimize font loading
  preload: false, // Only preload primary font
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
      { url: "/logo/icon.svg", type: "image/svg+xml" },
      { url: "/logo/favicon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/logo/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/logo/icon.svg",
    apple: [
      { url: "/logo/apple-touch-icon-180.png", sizes: "180x180" },
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
