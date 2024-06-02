import React from "react";
import { GET_SIDEBAR_BEST_POST, GRAPHQL_URL } from "@/graphql/sidebar_best_posts";
import Link from "next/link";

const BestPosts = async () => {
  function limitWords(text: string, limit: number): string {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  }

  const { data } = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GET_SIDEBAR_BEST_POST,
    }),
    next: { revalidate: 10 },
  }).then((res) => res.json());

  let blogPosts = data?.posts?.edges;

  return (
    <>
      <div className="w-full h-auto bg-slate-100 mb-6 p-5 rounded-xl">
        <h3 className="text-xl text-black font-bold mb-2">Best Articles</h3>
        <div className="h-0.5 w-[100px] bg-amber-400 mb-2"></div>
        <p className="text-slate-800 text-md mb-6 font-medium leading-6">
          Some of the best content we&#39;ve published so far.
        </p>
        <div className="">
          <ol className="sidebarlist list-decimal list-inside">
            {blogPosts?.map((post: { node: any; title: any }) => (
              <li
                className="mb-3 border-b-[1px] border-slate-200 pb-3 leading-5"
                key={post.node.slug}
              >
                <Link
                  href={`/blog/${post.node.slug}`}
                  className="font-semibold text-slate-800 text-[0.9rem] transition-all hover:underline hover:text-sky-700 capitalize"
                >
                  {limitWords(post.node.title, 7)}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default BestPosts;
