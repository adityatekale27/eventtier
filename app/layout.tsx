import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EventTier - Tier-Based Event Showcase Platform",
  description:
    "Discover exclusive events tailored to your membership tier. From free community gatherings to premium VIP experiences.",
  keywords: ["event", "shows", "concerts", "premium events", "event booking"],
  authors: [
    { name: "Aditya Tekale", url: "https://github.com/adityatekale27" },
  ],
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  ),

  openGraph: {
    title: "EventTier - Tier-Based Event Showcase Platform",
    description:
      "Discover exclusive events tailored to your membership tier. From free community gatherings to premium VIP experiences.",
    url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    siteName: "EventTier",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EventTier - Tier-Based Event Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "EventTier - Tier-Based Event Platform",
    description: "Discover exclusive events tailored to your membership tier.",
    images: ["/twitter-image.png"],
    creator: "@adityatekale27",
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

  category: "Entertainment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* fevicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnet to font domain */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Preconnect to clerk and supabase */}
        <link
          rel="preconnect"
          href="https://clerk.dev"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://supabase.co"
          crossOrigin="anonymous"
        />
      </head>

      <body className={`font-sans antialiased bg-[#e1eaec]`}>{children}</body>
    </html>
  );
}
