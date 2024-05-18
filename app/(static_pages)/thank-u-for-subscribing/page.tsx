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
          <p className="text-lg font-semibold mb-5 text-slate-900">
            What to expect?
          </p>
          <p className="text-md font-normal mb-5 text-slate-900">
            You can expect a newsletter every week or so, usually about a new
            article or video from our YouTube channel about WordPress, SEO,
            affiliate marketing, or general tips for starting a blog/website.
            I&#39;ve been focused on YouTube, so subscribe to our YouTube channel if
            you want updates on my videos.
          </p>
          <p className="text-md font-normal mb-5 text-slate-900">
            You can expect a newsletter every week or so, usually about a new
            article or video from our YouTube channel about WordPress, SEO,
            affiliate marketing, or general tips for starting a blog/website.
            I&#39;ve been focused on YouTube, so subscribe to our YouTube channel if
            you want updates on my videos.
          </p>
          <p className="text-lg font-semibold mb-5 text-slate-900">
            Give me your feedback!
          </p>
          <p className="text-md font-normal mb-5 text-slate-900">
            Every now and then, I&#39;ll send you a questionnaire asking you what I
            should write about or create a video about. Your comments outline
            what I will cover in the future and are highly appreciated.
          </p>
          <p className="text-md font-normal mb-5 text-slate-900">
            If you have questions about a particular blog post, I would
            appreciate it if you comment on the actual article so everyone can
            learn.
          </p>
          <p className="text-md font-normal mb-5 text-slate-900">
            If you have any questions, you can contact us from the{" "}
            <Link
              href="/page/contact-us"
              className="text-amber-500 font-semibold"
            >
              Contact Us.
            </Link>
          </p>
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
