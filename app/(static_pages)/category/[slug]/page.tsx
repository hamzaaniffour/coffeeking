import React from "react";
import Image from "next/image";
import Link from "next/link";
import robots from "@/app/robots";

const getSinglePost = async (postSlug: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URLS}/wp-json/wp/v2/categories?slug=${postSlug}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data;
};

function stripHtml(html: string) {
  return html.replace(/<[^>]*>?/gm, "");
}

export async function generateStaticParams() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URLS}/wp-json/wp/v2/categories`);
  const categories = await response.json();

  return categories.map((category: any) => ({
    slug: category.slug,
  }));
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
    robots: "follow, index",
  };
}

const getPostsFromCategory = async (categoryId: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URLS}/wp-json/wp/v2/posts?categories=${categoryId}&_embed`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 120 },
    }
  );
  const data = await response.json();
  return data;
};

const Category = async ({ params }: { params: { slug: string } }) => {
  const categoryData = await getSinglePost(params.slug);
  const categoryId = categoryData.length > 0 ? categoryData[0].id : null;
  const posts = categoryId ? await getPostsFromCategory(categoryId) : [];
  

  return (
    <div className="">
      {categoryData.map((category: any) => (
        <div key={category.id}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold xl:text-7xl mb-6 text-black text-center decoration-amber-500 underline">
            {category.name}
          </h1>
          <div className="flex justify-center items-center mb-14">
            <p className="single-content text-slate-800 max-w-[750px] font-medium text-xl text-center">
              {category.description}
            </p>
          </div>
        </div>
      ))}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {posts.map((post: any) => (
          <div key={post.slug} className="w-full lg:w-full">
            {post._embedded && post._embedded["wp:featuredmedia"] && (
              <Link href={`/blog/${post.slug}`}>
                <Image
                  src={post._embedded["wp:featuredmedia"][0].source_url}
                  alt={post.title.rendered}
                  width={700}
                  height={475}
                  className="rounded-lg"
                  layout="responsive"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </Link>
            )}
            <h3 className="text-lg lg:text-xl xl:text-xl text-black font-semibold mt-2 leading-6">
              <Link href={`/blog/${post.slug}`}>{post.title.rendered}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

export const revalidate = 120; // Revalidate this page every 120 seconds
