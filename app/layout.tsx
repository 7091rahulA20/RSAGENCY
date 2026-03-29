import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RSAGENCY - Premier Influencer Marketing Agency",
  description: "Connect brands with top influencers. Expert campaign management, talent booking, and data-driven strategies for authentic marketing success.",
  keywords: ["influencer marketing", "brand partnerships", "social media campaigns", "influencer agency", "talent booking", "campaign management", "ROI optimization"],
  authors: [{ name: "RSAGENCY" }],
  creator: "RSAGENCY",
  publisher: "RSAGENCY",
  openGraph: {
    title: "RSAGENCY - Premier Influencer Marketing Agency",
    description: "Connect brands with top influencers. Expert campaign management, talent booking, and data-driven strategies for authentic marketing success.",
    url: "https://rsagency.vercel.app",
    siteName: "RSAGENCY",
    images: [
      {
        url: "https://rsagency.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RSAGENCY - Influencer Marketing Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RSAGENCY - Premier Influencer Marketing Agency",
    description: "Connect brands with top influencers. Expert campaign management, talent booking, and data-driven strategies for authentic marketing success.",
    images: ["https://rsagency.vercel.app/og-image.jpg"],
    creator: "@rsagency",
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
  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-navy text-white">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
