import HomeSidebar from "@/components/Sidebars/HomeSidebar";
import Link from "next/link";
import React from "react";

const getSinglePost = async (postSlug: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URLS}/wp-json/wp/v2/pages?slug=${postSlug}&_embed`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // This ensures the data is always fresh
      cache: 'no-store',
    }
  );
  const data = await response.json();
  return data;
};

function stripHtml(html: string) {
  return html.replace(/<[^>]*>?/gm, "");
}

export async function generateStaticParams() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URLS}/wp-json/wp/v2/pages`);
  const pages = await response.json();

  return pages.map((page: any) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const posts = await getSinglePost(params.slug);
  if (posts.length === 0) {
    throw new Error("No post found for the given slug.");
  }
  const post = posts[0];
  return {
    title: post.title.rendered,
    description: stripHtml(post.excerpt.rendered),
  };
}

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  const data = await getSinglePost(params.slug);

  return (
    <div className="mt-20">
      <div className="lg:flex gap-10">
        <div className="lg:w-9/12">
          {data.map((page: any) => (
            <div key={page.slug}>
              <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold xl:text-4xl uppercase mb-4 text-black">
                {page.title.rendered}
              </h1>
              <div className="text-sm breadcrumbs mb-8">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>Page</li>
                  <li className="font-semibold">{page.title.rendered}</li>
                </ul>
              </div>
              <div
                className="single-content text-slate-800 font-light text-lg"
                dangerouslySetInnerHTML={{ __html: page.content.rendered }}
              ></div>
            </div>
          ))}
        </div>
        <div className="border-0 lg:border-r-[1px] lg:border-gray-100 xl:border-r-[2px] xl:border-gray-100"></div>
        <div className="lg:w-3/12 hidden md:hidden lg:block xl:block">
          <HomeSidebar />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;

export const revalidate = 120; // Revalidate this page every 120 seconds
