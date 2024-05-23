import React from "react";
import Image from "next/image";
import { getBlurData } from "@/libs/blur-data-generator";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import Ratings from "@/components/Blogs/Ratings";

async function getBlogs() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URLS}/wp-json/wp/v2/products?_embed`,
    {
      method: "GET",
      next: { revalidate: 120 },
    }
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
  let data;
  try {
    data = await getBlogs();
  } catch (error) {
    console.error(error);
    return <div>There are no products available.</div>;
  }

  if (!data || data.length === 0) {
    return <div>There are no products available.</div>;
  }

  const imageUrl = data[0].image;
  const { base64 } = await getBlurData(imageUrl);

  return (
    <div>
      <h2 className="text-3xl text-black font-bold mb-8">
        Best Commercial Coffee Machines in 2024
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-10">
        {data.map((blog: any) => (
          <Link key={blog.id} href={`${blog.affiliate_link}`} target="_blank">
            <div>
              <div className="relative w-full">
                <span className="mask mask-hexagon z-20 flex justify-center items-center absolute -top-3 -left-3 bg-red-600 text-white text-base h-14 w-14 font-bold">
                  {blog.discount}
                </span>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="responsive"
                  width={700}
                  height={475}
                  placeholder="blur"
                  blurDataURL={base64}
                />
              </div>
              <div className="flex justify-center items-center">
                <Ratings />
              </div>
              <h3 className="text-[13px] text-center lg:text-[13px] xl:text-[13px] text-black font-semibold mb-2 mt-1">
                {limitWords(blog.title, 10)}
              </h3>
              <button className="calltoaction font-bold py-[5px] px-2 bg-[#ffe000] hover:bg-[#ffe000] w-full transition-all text-black rounded text-[13px] md:text-md lg:text-md xl:text-md">
                See Amazon Pricing
              </button>
            </div>
          </Link>
        ))}
      </div>
      <div className="max-w-[400px] mx-auto flex justify-center items-center mt-8">
        <Link href="https://amzn.to/3wKoHdk" target="_blank">
          <button className="py-2 px-6 rounded-full font-bold w-full bg-black text-white">
            See more products on Amazon{" "}
            <GoArrowUpRight className="inline-block h-4 w-4 -mt-0.5" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeProducts;
