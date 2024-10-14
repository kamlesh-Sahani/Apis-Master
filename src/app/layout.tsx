import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import Head from "next/head";
import Script from 'next/script';
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: {
    template: '%s | Api Master',
    default: 'Api Master',
  },
  description: "Explore comprehensive API documentation for developers. Find RESTful endpoints, examples, and integration guides on Api Master. Enhance your web projects with our easy-to-use APIs.",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.apimaster.com',
    title: 'Api Master',
    description: 'Explore comprehensive API documentation for developers. Find RESTful endpoints, examples, and integration guides on Api Master.',
    siteName: 'Api Master',
    images: [
      {
        url: 'https://www.apimaster.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Api Master',
      },
    ],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "default-google-verification",
  },
  // Adding the google-adsense-account meta tag
  other: {
    "google-adsense-account": process.env.NEXT_PUBLIC_ADS_GOOGLE || "default-ads-google-account",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex flex-col h-[100vh] relative">
          <div className="flex flex-col">
            {children}
          </div>
          <Footer />
        </main>
        <Analytics />
        <SpeedInsights />
        <Script
          async
          defer
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2438225168202058"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
