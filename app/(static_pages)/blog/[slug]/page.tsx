import ShareButtons from "@/components/Blogs/ShareButtons";
import HomeSidebar from "@/components/Sidebars/HomeSidebar";
import Link from "next/link";
import React from "react";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit";
import type { Element } from "hast";
import type { Root, Text } from "hast";
import parameterize from "parameterize";

const getSinglePost = async (postSlug: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URLS}/wp-json/wp/v2/posts?slug=${postSlug}&_embed`,
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

function stripHtml(html: string) {
  return html.replace(/<[^>]*>?/gm, "");
}

export async function generateStaticParams() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URLS}/wp-json/wp/v2/posts`
  );
  const posts = await response.json();

  return posts.map((post: any) => ({
    slug: post.slug,
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
  const tagIds = post.tags.map((tag: { id: number }) => tag.id).join(",");
  const tagsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URLS}/wp-json/wp/v2/tags?include=${tagIds}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
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

  const toc: { id: string; title: string }[] = [];

  const content = unified()
    .use(rehypeParse, {
      fragment: true,
    })
    .use(() => {
      return (tree: Root) => {
        visit(tree, "element", (node: Element) => {
          if (
            node.tagName === "h2" &&
            node.children[0] &&
            "value" in node.children[0]
          ) {
            const childNode = node.children[0];
            if ((childNode as Text).value) {
              const id = parameterize((childNode as Text).value);
              node.properties.id = id;
              toc.push({ id, title: (childNode as Text).value });
            }
          }
        });
      };
    })
    .use(rehypeStringify)
    .processSync(data[0].content.rendered)
    .toString();

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

                <ul className="border-b-2 border-slate-100 p-3 rounded-xl bg-slate-50" style={{paddingBottom: '-0.25rem'}}>
                  <li className="text-black font-semibold mb-4 text-2xl">
                    What&#39;s Inside?🧐
                  </li>
                  {toc.map(({ id, title }) => (
                    <li key={id} className="mb-1">
                      <Link href={`#${id}`} className="font-semibold text-base text-slate-700">
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>

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

export const revalidate = 120;
