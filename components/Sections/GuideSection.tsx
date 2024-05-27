import { GET_HOME_PAGE, GRAPHQL_URL } from "@/graphql/home_blogs";
import React from "react";

const GuideSection = async () => {
  const { data } = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GET_HOME_PAGE,
    }),
    next: { revalidate: 10 },
  }).then((res) => res.json());

  const page = data?.pageBy; // Assuming your query returns 'pageBy'

  if (!page) {
    return null; // Handle case where no data is returned
  }

  return (
    <div className="mt-16">
      <div
        key={page.id}
        className="pages-content text-lg text-slate-800"
        dangerouslySetInnerHTML={{ __html: page.content }}
      ></div>
    </div>
  );
};

export default GuideSection;
