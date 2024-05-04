import React from "react";
import Image from "next/image";
import { getBlurData } from "@/libs/blur-data-generator";
import Link from "next/link";

async function getBlogs() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URLS}/wp-json/wp/v2/products?_embed`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

function limitWords(text: string, limit: number): string {
  const words = text.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  }
  return text;
}

const HomeProducts = async () => {

  const data = await getBlogs();
  const imageUrl = data[0].image;
  const { base64 } = await getBlurData(imageUrl);

  return (
    <div>
      <h2 className="text-3xl text-black font-bold mb-8">
        Best Coffee Machines in 2024
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-7">
        {data.map((blog: any) => (
          <Link key={blog.id} href={`${blog.affiliate_link}`} target="_blank">
            <div>
              <div className="relative w-full h-64">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill={true}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={80}
                  placeholder="blur"
                blurDataURL={base64}
                />
              </div>
              <h3 className="text-sm text-black font-semibold mb-2 mt-4">
                {limitWords(blog.title, 5)}
              </h3>
              <button className="calltoaction font-bold py-[5px] px-2 bg-[#ffe000] hover:bg-[#ffe000] w-full transition-all text-black rounded text-md">
                See Amazon Pricing
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
