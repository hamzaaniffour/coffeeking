import React from "react";
import GuideSection from "@/components/Sections/GuideSection";
import HomeBlogs from "@/components/Blogs/HomeBlogs";
import HomeSidebar from "@/components/Sidebars/HomeSidebar";
import Marquees from "@/components/Sections/Marquees";
import Hero from "./Hero";
import ReviewBlogs from "@/components/Blogs/ReviewBlogs";
import GuidePosts from "@/components/Blogs/GuidePosts";
import WhyUS from "@/components/Sections/WhyUS";
import FeaturedProducts from "@/components/Products/FeaturedProducts";

const HomeSection = () => {
  return (
    <div>
      <Hero />
      <div className="mt-20">
        <div className="lg:flex gap-10">
          <div className="lg:w-9/12">
            <FeaturedProducts />
            <Marquees />
            <GuideSection />
            <HomeBlogs />
            <GuidePosts />
            <ReviewBlogs />
            <WhyUS />
          </div>
          <div className="border-0 lg:border-r-[1px] lg:border-gray-100 xl:border-r-[2px] xl:border-gray-100"></div>
          <div className="lg:w-3/12 hidden md:hidden lg:block xl:block">
            <HomeSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
