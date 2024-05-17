import { GET_RANDOM_POSTS, GRAPHQL_URL } from "@/graphql/home_blogs";
import React from "react";
import BestPosts from "@/components/Sidebars/BestPosts";
import SideMailing from "@/components/Sidebars/SideMailing";

const HomeSidebar = () => {
  return (
    <>
      <div className="mb-8">
        <SideMailing />
      </div>

      <div className="sticky top-[80px] mb-14">
        <BestPosts />
      </div>
    </>
  );
};

export default HomeSidebar;
