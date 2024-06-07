import React from "react";
import SinglePost from "@/components/SinglePost";

const Page = ({ params }: { params: { slug: string } }) => {
  return <SinglePost params={params} />;
};

export default Page;
