import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Headers/Navbar";
import Footer from "@/components/Headers/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Your Perfect Commercial Coffee Machine - Top Picks & Reviews!",
    template: "%s | Cyclewaycoffee",

  },
  description: "Unlock the Secret to Perfect Coffee Every Time! Find Your Ideal Commercial Coffee Machine Today. Expert Reviews & Top Picks. Compare Prices & Features.",
  twitter: {
    card: "summary_large_image",
  },
  robots: 'index, follow',
  openGraph: {
    images: [''],
    url: 'https://www.cyclewaycoffee.net',
  },
  authors: [{ name: 'CyclewayCoffee' }],
  icons: {
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="EN-en" data-theme="light">
      <head><meta name="google-site-verification" content="Q-YBdHRQT9UEDz9po1QmQ0jUNMpqdpLq36AxPodrGSI" /></head>
      <body className={`${inter.className}`}>
        <Navbar />
        <div className="max-w-[1250px] mx-auto mb-16 mt-16 px-5 lg:px-0 xl:px-0">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
