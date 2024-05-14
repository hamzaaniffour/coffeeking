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
      <div className="flex justify-start items-center">
        <h4 className="text-[13.6em] font-bold text-[#cecece]">404</h4>
      </div>
      <div className="flex justify-center items-start flex-col">
        <h1 className="text-3xl text-black mb-3 font-bold text-left">Whoops! That Page Is Gone.</h1>
        <p className="text-md text-slate-500 text-left mb-5">You can navigate through our list or use this search bar:</p>
        <div className="h-[5px] w-[100px] bg-gray-200 mb-7"></div>
        <div className="mb-5">
            <Search />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
