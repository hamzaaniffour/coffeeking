import React from "react";
import Image from "next/image";

const HomeSidebar = () => {
  return (
    <>
      <div className="mb-8">
        <>
          <h1 className="text-black mb-0 text-2xl font-semibold">
            Best Brands
          </h1>
          <div className="h-[3px] rounded-full mb-5 w-[140px] bg-gradient-to-r from-amber-800 to-amber-500"></div>
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded bg-gray-100 py-10 flex justify-center items-center"></div>
            <div className="rounded bg-gray-100 py-10 flex justify-center items-center"></div>
            <div className="rounded bg-gray-100 py-10 flex justify-center items-center"></div>
            <div className="rounded bg-gray-100 py-10 flex justify-center items-center"></div>
            <div className="rounded bg-gray-100 py-10 flex justify-center items-center"></div>
            <div className="rounded bg-gray-100 py-10 flex justify-center items-center"></div>
            <div className="rounded bg-gray-100 py-10 flex justify-center items-center"></div>
            <div className="rounded bg-gray-100 py-10 flex justify-center items-center"></div>
            <div className="rounded bg-gray-100 py-10 flex justify-center items-center"></div>
          </div>
        </>
      </div>

      <div className="sticky top-[80px] mb-14">
        <h1 className="text-black mb-0 text-2xl font-semibold">
          Advertisement
        </h1>
        <div className="h-[3px] rounded-full mb-5 w-[174px] bg-gradient-to-r from-amber-800 to-amber-500"></div>
        <div className="rounded bg-gray-100 h-80"></div>
      </div>
    </>
  );
};

export default HomeSidebar;
