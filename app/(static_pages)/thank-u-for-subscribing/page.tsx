import HomeSidebar from "@/components/Sidebars/HomeSidebar";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "Thank You For Subscribing!",
    template: "%s | Cyclewaycoffee",
  },
  description: "Thank You For Subscribing!",
  twitter: {
    card: "summary_large_image",
  },
  robots: "follow, noindex",
};

const NewsletterSuccess = () => {
  return (
    <div className="mt-20">
      <div className="lg:flex gap-10">
        <div className="lg:w-9/12">
          <h1 className="text-3xl font-bold text-black mb-6">
            Thank You For Subscribing!
          </h1>
          <p className="text-md font-normal mb-5 text-slate-900">
            We&#39;re thrilled to have you join the Cyclewaycoffee community!
            Your subscription means the world to us, and we can&#39;t wait to
            share our latest tips, reviews, and insights on coffee machines
            directly with you.
          </p>
          <p className="text-md font-normal mb-5 text-slate-900">
            By subscribing, you&#39;ve taken the first step toward making
            informed decisions about your coffee machine purchases. Expect to
            receive:
          </p>
          <ul className="mt-7 mb-7">
            <li className="text-md font-normal mb-2 text-slate-900">
              <span className="font-semibold">Expert Buying Guides: </span>Detailed information to help you choose the
              perfect coffee machine for your needs.
            </li>
            <li className="text-md font-normal mb-2 text-slate-900">
              <span className="font-semibold">In-Depth Reviews: </span>Honest and comprehensive reviews of the latest
              coffee machines on the market.
            </li>
            <li className="text-md font-normal mb-2 text-slate-900">
              <span className="font-semibold">Brewing Tips & Tricks: </span>Insider tips to help you brew the perfect
              cup of coffee every time.
            </li>
          </ul>
          <p className="text-md font-normal mb-5 text-slate-900">
            Stay tuned for our next newsletter packed with valuable content just
            for you. If you have any questions or suggestions, feel free to
            reach out to us from the <Link href="/page/contact-us" className="text-amber-500 font-semibold">Contact Us.</Link>
            .
          </p>
          <p className="text-md font-normal mb-3 text-slate-900">Thank you again for subscribing, and welcome to the Cyclewaycoffee family!</p>
          <p className="text-md font-normal mb-5 text-slate-900">Warm regards,</p>
          <p className="text-md font-semibold mb-5 text-slate-900">The Cyclewaycoffee Team</p>
        </div>
        <div className="border-0 lg:border-r-[1px] lg:border-gray-100 xl:border-r-[2px] xl:border-gray-100"></div>
        <div className="lg:w-3/12 hidden md:hidden lg:block xl:block">
          <HomeSidebar />
        </div>
      </div>
    </div>
  );
};

export default NewsletterSuccess;
