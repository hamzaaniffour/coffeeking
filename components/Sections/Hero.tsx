import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-xl md:text-3xl lg:text-3xl xl:text-3xl text-black font-bold mb-2 text-center">
          Unlock the Secrets of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-amber-600">
            Commercial Coffee Machines
          </span>
          : Expert Insights and Reviews
        </h1>
        <p className="text-base md:text-lg lg:text-lg xl:text-lg text-black font-semibold text-center max-w-[900px] mx-auto">
          Dive deep into the world of commercial coffee machines. Find unbiased
          reviews, brewing tips, and expert buying guides to elevate your coffee
          game.
        </p>
      </div>
    </div>
  );
};

export default Hero;
