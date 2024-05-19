"use client";
import { blogPage } from "@/graphql/allposts";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Search from "@/components/Sections/Search";
import Loadmore from "../Loadings/Loadmore";

export interface PostItems {
  slug: string;
  title: string;
  content: string;
  date: string;
  featuredImage?: {
    node: any;
    sourceUrl: string;
  };
  categories?: {
    nodes: { name: string; slug: string }[];
  };
}

const BlogsPage = () => {
  const [posts, setPosts] = useState<PostItems[]>([]);
  const [loading, setLoading] = useState(true);
  const [after, setAfter] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const isNewPage = !after; // Check if it's a new page (no 'after' cursor)
    const result = await blogPage(3, after);

    if (isNewPage) {
      setPosts([]); // Clear existing posts for new page
    }

    const newPosts = result.nodes.filter(
      (newPost: { slug: string }) =>
        !posts.find((post) => post.slug === newPost.slug)
    );
    setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    setAfter(result.pageInfo.endCursor);
    setHasMore(result.pageInfo.hasNextPage);
    setLoading(false);
  }

  function handleLoadMore() {
    if (hasMore && !loading) {
      setLoading(true); // Set loading to true when button is clicked
      fetchData();
    }
  }

  function limitWords(text: string, limit: number): string {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  }

  return (
    <div>
      <div className="">
        <main className="">
          <section>
            <header>
              <div className="flex justify-center items-center flex-col mb-16">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold xl:text-7xl mb-10 text-center text-black decoration-amber-500 underline">
                  Blog Articles
                </h1>
              </div>
              <div className="mb-8">
                <div className="max-w-[400px] mx-auto">
                  <h3 className="text-black text-xl text-left font-bold mb-2 uppercase">
                    Where do you want to go?
                  </h3>
                </div>
                <Search />
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
              {posts.map((post, index) => (
                <div key={`${post.slug}-${index}`} className="w-full lg:w-full">
                  {post.featuredImage && (
                    <Link href={`/blog/${post.slug}`}>
                      <Image
                        src={`${post.featuredImage.node.sourceUrl}`}
                        alt={`${post.title}`}
                        layout="responsive"
                        width={700}
                        height={475}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        placeholder="blur"
                        blurDataURL={`${post.featuredImage.node.sourceUrl}`}
                        className="rounded-lg"
                      />
                    </Link>
                  )}
                  <div className="relative mb-2 mt-3">
                    {post.categories?.nodes.map((category, index) => (
                      <Link href={`/category/${category.slug}`} key={index}>
                        <span className="text-slate-500 text-[13px] tracking-wider font-medium uppercase">
                          {index > 0 && <span className="mr-1">, </span>}
                          {category.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <h3 className="text-xl text-black font-bold leading-[28px]">
                    <Link href={`/blog/${post.slug}`}>
                      {limitWords(post.title, 10)}
                    </Link>
                  </h3>
                </div>
              ))}
            </div>

            <div className="my-8 text-center">
              <button
                onClick={handleLoadMore}
                className="py-3 px-6 rounded-full font-bold bg-black text-white"
                disabled={!hasMore || loading}
              >
                {loading ? <Loadmore /> : hasMore ? "Load more posts..." : ""}
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default BlogsPage;
