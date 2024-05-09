import ShareButtons from "@/components/Blogs/ShareButtons";
import HomeSidebar from "@/components/Sidebars/HomeSidebar";
import Link from "next/link";
import React from "react";

const getSinglePost = async (postSlug: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URLS}/wp-json/wp/v2/posts?slug=${postSlug}&_embed`,
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
  const tagIds = post.tags.map((tag: { id: number }) => tag.id).join(",");
  const tagsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URLS}/wp-json/wp/v2/tags?include=${tagIds}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const tagsData = await tagsResponse.json();
  const tagTitles = tagsData
    .map((tag: { name: string }) => tag.name)
    .join(", ");
  return {
    title: post.title.rendered,
    description: stripHtml(post.excerpt.rendered),
    keywords: tagTitles,
  };
}

const SinglePost = async ({ params }: { params: { slug: string } }) => {
  const data = await getSinglePost(params.slug);

  return (
    <div className="">
      <div className="lg:flex gap-14">
        <div className="lg:w-1/12 order-first lg:order-last xl:order-last">
          <ShareButtons />
        </div>
        <div className="lg:w-7/12">
          <>
            {data.map((post: any) => (
              <div key={post.slug}>
                <div className="text-sm breadcrumbs mb-3">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li className="font-semibold">{post.title.rendered}</li>
                  </ul>
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl mb-7 !leading-20 text-black font-bold">
                  {post.title.rendered}
                </h1>
                <div
                  className="single-content text-slate-800 font-light text-lg"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                ></div>
              </div>
            ))}
          </>
        </div>
        <div className="lg:w-3/12 order-last lg:order-first xl:order-first">
          <HomeSidebar />
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
