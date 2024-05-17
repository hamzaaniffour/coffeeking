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
      cache: 'no-store',
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
    title: post.title.rendered,
    description: stripHtml(post.excerpt.rendered),
  };
}

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  const data = await getSinglePost(params.slug);

  return (
    <div className="flex justify-center items-center mt-24">
      <div className="max-w-[800px]">
        {data.map((page: any) => (
          <div key={page.slug}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold xl:text-7xl mb-10 text-center text-black decoration-amber-500 underline">
              {page.title.rendered}
            </h1>
            <div className="text-sm breadcrumbs mb-3">
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
    </div>
  );
};

export default SinglePage;
