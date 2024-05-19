import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Search from "@/components/Sections/Search";

export const metadata: Metadata = {
  title: {
    default: "Page Not Found - Error 404",
    template: "%s | Cyclewaycoffee",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: "follow, noindex",
  openGraph: {
    images: [
      "https://lift-car.com/tools/wp-content/uploads/2024/04/0_3Xdd_WEaRxryzfLC.webp",
    ],
  },
};

const NotFound = () => {
  return (
    // <div className="flex justify-center items-center flex-col mt-24 mb-24">
    //   <div
    //     className="w-[200px] h-[80px] bg-cover bg-center mb-4"
    //     style={{ backgroundImage: "url(/assets/pages/404.svg)" }}
    //   ></div>
    //   <h2 className="text-4xl text-black font-semibold text-center mb-3">
    //     Whoops! That Page Is Gone.
    //   </h2>
    //   <div className="max-w-[500px] mx-auto">
    //     <p className="text-lg text-black mb-8 text-center">
    //       We couldn't find the page you were looking for. Why not try to go back
    //       to the homepage.
    //     </p>
    //   </div>
    //   <Link
    //     href="/"
    //     className="backhome py-2 text-black !transition-all px-3 rounded bg-white hover:bg-[#F0F0F0] font-semibold"
    //   >
    //     Back Home
    //   </Link>
    // </div>
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10 py-[4rem]">
      <div className="flex justify-center lg:justify-start xl:justify-start items-center">
        <div className="text-9xl lg:text-[13.6em] xl:text-[13.6em] font-bold text-[#cecece]">404</div>
      </div>
      <div className="flex justify-center items-start flex-col">
        <div className="text-3xl text-black mb-3 font-bold text-center lg:text-left xl:text-left">Whoops! But this page does not exist..</div>
        <p className="text-md text-slate-500 text-center lg:text-left xl:text-left mb-5">You can navigate through our list or use this search bar:</p>
        <div className="h-[5px] w-[100px] bg-gray-200 mb-7"></div>
        <div className="mb-5 flex justify-start items-start">
            <Search />
        </div>
        <div className="">
            <ul className="flex justify-center items-center gap-3">
                <li className="">
                    <Link href="/" className="text-slate-800 uppercase hover:text-amber-700 font-semibold text-sm">Homepage</Link>
                </li>
                <li className="">
                    <Link href="/blog" className="text-slate-800 uppercase hover:text-amber-700 font-semibold text-sm">Blog</Link>
                </li>
                <li className="">
                    <Link href="/blog" className="text-slate-800 uppercase hover:text-amber-700 font-semibold text-sm">Privacy Policy</Link>
                </li>
                <li className="">
                    <Link href="/blog" className="text-slate-800 uppercase hover:text-amber-700 font-semibold text-sm">Contact Us</Link>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
