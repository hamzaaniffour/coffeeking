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
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_GRAPHQL_URL}`,
  cache: new InMemoryCache(),
});

const GET_SINGLE_POST = gql`
  query SinglePostQuery($slug: String!) {
    postBy(slug: $slug) {
      slug
      title
      excerpt
      content
      tags {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
      seo {
        canonical
        metaDesc
        title
        twitterDescription
        twitterTitle
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphDescription
        opengraphImage {
          mediaItemUrl
        }
      }
    }
  }
`;

const getSinglePost = async (postSlug: string) => {
  const { data } = await client.query({
    query: GET_SINGLE_POST,
    variables: { slug: postSlug },
  });

  return data.postBy;
};

function stripHtml(html: string) {
  return html.replace(/<[^>]*>?/gm, "");
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getSinglePost(params.slug);
  if (!post) {
    throw new Error("No post found for the given slug.");
  }

  return {
    title: post.seo.title,
    description: stripHtml(post.seo.metaDesc),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}blog/${post.slug}`,
    },
    keywords: post.tags.nodes.map((tag: { name: string }) => tag.name).join(", "),
    openGraph: {
      images: `${post.seo.opengraphImage.mediaItemUrl}`,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}blog/${post.slug}/`,
      siteName: "CyclewayCoffee",
      type: "article",
      title: post.title,
      description: post.seo.twitterDescription,
      modifiedTime: post.seo.opengraphModifiedTime,
      publishedTime: post.seo.opengraphPublishedTime,
    },
  };
}

const SinglePost = async ({ params }: { params: { slug: string } }) => {
  const post = await getSinglePost(params.slug);
  if (!post) {
    return <div>No post found</div>;
  }

  const getTextContent = (node: Element | Text): string => {
    if ('value' in node) {
      return node.value;
    }
    if ('children' in node && node.children) {
      return node.children.map((child) => getTextContent(child as Element | Text)).join("");
    }
    return "";
  };
  
  const toc: { id: string; title: string }[] = [];
  
  const content = unified()
    .use(rehypeParse, {
      fragment: true,
    })
    .use(() => {
      return (tree: Root) => {
        visit(tree, "element", (node: Element) => {
          if (node.tagName === "h2") {
            const textContent = getTextContent(node);
            if (textContent) {
              const id = parameterize(textContent);
              node.properties.id = id;
              toc.push({ id, title: textContent });
            }
          }
        });
      };
    })
    .use(rehypeStringify)
    .processSync(post.content)
    .toString();
  

  return (
    <div className="">
      <div className="lg:flex gap-14">
        <div className="lg:w-1/12 order-first lg:order-last xl:order-last">
          <ShareButtons />
        </div>
        <div className="lg:w-7/12">
          <>
            <div key={post.slug}>
              <div className="text-sm breadcrumbs mb-3">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li className="font-semibold">{post.title}</li>
                </ul>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl mb-7 !leading-20 text-black font-bold">
                {post.title}
              </h1>

              <ul
                className="border-b-2 border-slate-100 p-3 rounded-xl bg-slate-50"
                style={{ paddingBottom: "-0.25rem" }}
              >
                <li className="text-black font-semibold mb-4 text-2xl">
                  What&#39;s Inside?🧐
                </li>
                {toc.map(({ id, title }) => (
                  <li key={id} className="mb-1">
                    <Link
                      href={`#${id}`}
                      className="font-semibold text-base text-slate-700"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>

              <div
                className="single-content text-slate-800 font-light text-lg"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>
            </div>
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
