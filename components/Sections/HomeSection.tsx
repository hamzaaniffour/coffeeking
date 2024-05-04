import React from "react";
import HomeProducts from "@/components/Products/HomeProducts";
import GuideSection from "@/components/Sections/GuideSection";
import HomeBlogs from "@/components/Blogs/HomeBlogs";
import HomeSidebar from "@/components/Sidebars/HomeSidebar";

const HomeSection = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-xl md:text-3xl lg:text-3xl xl:text-3xl text-black font-bold mb-2 text-center">
          Unlock the Secrets of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-amber-600">Commercial Coffee Machines</span>: Expert Insights and Reviews</h1>
        <p className="text-base md:text-lg lg:text-lg xl:text-lg text-black font-semibold text-center max-w-[900px] mx-auto">
          Dive deep into the world of commercial coffee machines. Find unbiased
          reviews, brewing tips, and expert buying guides to elevate your coffee
          game.
        </p>
      </div>
      <div className="mt-20">
        <div className="lg:flex gap-10">
          <div className="lg:w-9/12">
            <HomeProducts />
            <GuideSection />
            <HomeBlogs />
          </div>
          <div className="border-0 lg:border-r-[1px] lg:border-gray-200 xl:border-r-[2px] xl:border-gray-200"></div>
          <div className="lg:w-3/12">
            <HomeSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
