import React from "react";
import SinglePage from "@/components/Dynamics/SinglePage";

const Page = ({ params }: { params: { slug: string } }) => {
  return <SinglePage params={params} />;
};

export default Page;
