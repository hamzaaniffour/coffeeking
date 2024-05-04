import Link from "next/link";
import React from "react";
import Image from "next/image";
import { getBlurData } from "@/libs/blur-data-generator";

async function getBlogs() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URLS}/wp-json/wp/v2/posts?_embed`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const BlogPage = async () => {

  const data = await getBlogs();
  const imageUrl = data[0]._embedded["wp:featuredmedia"][0]?.source_url;
  const { base64 } = await getBlurData(imageUrl);

  return (
    <div>
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
                <h3 className="text-2xl text-black font-bold mt-3">
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

export default BlogPage;
