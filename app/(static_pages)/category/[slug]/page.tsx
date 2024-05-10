import ShareButtons from "@/components/Blogs/ShareButtons";
import HomeSidebar from "@/components/Sidebars/HomeSidebar";
import React from "react";

const getSinglePost = async (postSlug: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URLS}/wp-json/wp/v2/categories?slug=${postSlug}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
};

function stripHtml(html: string) {
  return html.replace(/<[^>]*>?/gm, "");
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const posts = await getSinglePost(params.slug);
  if (posts.length === 0) {
    throw new Error("No post found for the given slug.");
  }
  const post = posts[0];
  return {
    title: post.name,
    description: stripHtml(post.description),
  };
}

const Category = async ({ params }: { params: { slug: string } }) => {
  const data = await getSinglePost(params.slug);

  return (
    <div className="">
      {data.map((post: any) => (
        <div key={post.slug}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold xl:text-7xl mb-6 text-black text-center decoration-amber-500 underline">
            {post.name}
          </h1>
          <div className="flex justify-center items-center mb-8">
            <p className="single-content text-slate-800 max-w-[700px] font-medium text-lg text-center">{post.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
