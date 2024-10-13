import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:{
    template:'%s Api | Api Master',
    default:'Api Master'
  },
  description: "Explore comprehensive API documentation for developers. Find RESTful endpoints, examples, and integration guides on Apis Master. Enhance your web projects with our easy-to-use APIs.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION} />
      <meta name="google-adsense-account" content={process.env.NEXT_PUBLIC_ADS_GOOGLE}></meta>
      <body className={inter.className}>
        <Header />
        <main className="flex flex-col  h-[100vh] relative">
          <div className="flex flex-col">
          {children}
          </div>
          <Footer />
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
