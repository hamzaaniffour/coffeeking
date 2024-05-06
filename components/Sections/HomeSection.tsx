import React from "react";
import HomeProducts from "@/components/Products/HomeProducts";
import GuideSection from "@/components/Sections/GuideSection";
import HomeBlogs from "@/components/Blogs/HomeBlogs";
import HomeSidebar from "@/components/Sidebars/HomeSidebar";
import Marquees from "@/components/Sections/Marquees";
import Hero from "./Hero";

const HomeSection = () => {
  return (
    <div>
      <Hero />
      <div className="mt-20">
        <div className="lg:flex gap-10">
          <div className="lg:w-9/12">
            <HomeProducts />
            <GuideSection />
            <HomeBlogs />
            <Marquees />
          </div>
          <div className="border-0 lg:border-r-[1px] lg:border-gray-200 xl:border-r-[2px] xl:border-gray-200"></div>
          <div className="lg:w-3/12 hidden md:hidden lg:block xl:block">
            <HomeSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
