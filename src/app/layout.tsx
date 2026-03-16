import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

// Font options — swap the active pair by changing which pair is used in body className below.
// All use --font-sans and --font-mono so globals.css can reference them.

import { Outfit, Source_Code_Pro } from "next/font/google";
const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});
const sourceCode = Source_Code_Pro({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  preload: false,
});

// Option B: Inter + JetBrains Mono (readable, dev-friendly)
// import { Inter, JetBrains_Mono } from "next/font/google";
// const fontSans = Inter({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
// const fontMono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap" });

// Option C: Plus Jakarta Sans + Fira Code
// import { Plus_Jakarta_Sans, Fira_Code } from "next/font/google";
// const fontSans = Plus_Jakarta_Sans({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
// const fontMono = Fira_Code({ variable: "--font-mono", subsets: ["latin"], display: "swap" });

// Option D: DM Sans + DM Mono (rounded, approachable)
// import { DM_Sans, DM_Mono } from "next/font/google";
// const fontSans = DM_Sans({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
// const fontMono = DM_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap", weight: "400" });

// Option E: Geist (original — clean, modern)
// import { Geist, Geist_Mono } from "next/font/google";
// const fontSans = Geist({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
// const fontMono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap" });

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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z92ZGV8X2K"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z92ZGV8X2K');
          `}
        </Script>
      </head>
      <body
        className={`${outfit.variable} ${sourceCode.variable} antialiased`}
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
