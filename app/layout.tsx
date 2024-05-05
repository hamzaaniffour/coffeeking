import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Headers/Navbar";
import Footer from "@/components/Headers/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Your Perfect Commercial Coffee Machine - Top Picks & Reviews!",
    template: "%s | CoffeeKing",

  },
  description: "Unlock the Secret to Perfect Coffee Every Time! Find Your Ideal Commercial Coffee Machine Today. Expert Reviews & Top Picks. Compare Prices & Features.",
  twitter: {
    card: "summary_large_image",
  },
  robots: 'index, follow',
  openGraph: {
    images: ['https://lift-car.com/tools/wp-content/uploads/2024/04/0_3Xdd_WEaRxryzfLC.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="FR-fr" data-theme="light">
      <body className={`${inter.className}`}>
        <Navbar />
        <div className="max-w-[1200px] mx-auto mb-16 mt-16 px-5 lg:px-0 xl:px-0">
          {children}
        </div>
        <Footer />
        <SpeedInsights/>
      </body>
    </html>
  );
}
