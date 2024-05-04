import React from "react";
import Image from "next/image";
import { getBlurData } from "@/libs/blur-data-generator";
import Link from "next/link";

async function getBlogs() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URLS}/wp-json/wp/v2/posts?_embed`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const HomeBlogs = async () => {

  const data = await getBlogs();
  const imageUrl = data[0]._embedded["wp:featuredmedia"][0]?.source_url;
  const { base64 } = await getBlurData(imageUrl);

  return (
    <div className="mt-16">
      <h2 className="text-3xl text-black font-bold mb-2">
        Which coffee machine is right for you?
      </h2>
      <p className="text-base text-black font-medium mb-5">With countless options on the market, choosing the right commercial coffee machine can be a daunting task. At CoffeeKing we&#39;ve categorized and simplified the selection process to help you find the perfect machine for your needs.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {data.map((blog: any) => (
          <div key={blog.slug} className="w-full lg:w-full">
            {blog.featured_media && blog._embedded["wp:featuredmedia"] && (
              <Image
                src={blog._embedded["wp:featuredmedia"][0]?.source_url}
                alt={blog.title.rendered}
                width={400}
                height={300}
                className="rounded-lg"
                layout="responsive"
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={80}
                placeholder="blur"
                blurDataURL={base64}
              />
            )}
            <h1>
              <Link href={`/blog/${blog.slug}`}>
                <h3 className="text-base text-black font-semibold mt-3 leading-5">
                  {blog.title.rendered}
                </h3>
              </Link>
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBlogs;
