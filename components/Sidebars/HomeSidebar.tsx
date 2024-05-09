import React from "react";
import Image from "next/image";

const HomeSidebar = () => {
  return (
    <div className="sticky top-[80px]">
      <h1 className="text-black mb-0 text-xl font-semibold uppercase">
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
      {/* <div className="grid grid-cols-3 md:grid-cols-3 gap-3">
        <div className="grid gap-3">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.pinimg.com/736x/87/13/5e/87135ecd143e4867cc8674d0df172142.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.pinimg.com/originals/cc/16/26/cc1626904f0682b821c865e291359e7f.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.pinimg.com/736x/87/13/5e/87135ecd143e4867cc8674d0df172142.jpg" alt="" />
          </div>
        </div>
        <div className="grid gap-3">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.pinimg.com/736x/87/13/5e/87135ecd143e4867cc8674d0df172142.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.pinimg.com/736x/87/13/5e/87135ecd143e4867cc8674d0df172142.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.pinimg.com/736x/87/13/5e/87135ecd143e4867cc8674d0df172142.jpg" alt="" />
          </div>
        </div>
        <div className="grid gap-3">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.pinimg.com/736x/87/13/5e/87135ecd143e4867cc8674d0df172142.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.pinimg.com/736x/87/13/5e/87135ecd143e4867cc8674d0df172142.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.pinimg.com/736x/87/13/5e/87135ecd143e4867cc8674d0df172142.jpg" alt="" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HomeSidebar;
