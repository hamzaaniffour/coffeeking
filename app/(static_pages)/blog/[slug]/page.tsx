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
import Toggle from "@/components/Toggle";
import { FaFacebookF, FaLinkedinIn, FaPinterest, FaWhatsapp } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";

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
    keywords: post.tags.nodes
      .map((tag: { name: string }) => tag.name)
      .join(", "),
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
    if ("value" in node) {
      return node.value;
    }
    if ("children" in node && node.children) {
      return node.children
        .map((child) => getTextContent(child as Element | Text))
        .join("");
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
          <div className="sticky top-[80px] mb-14">
            <div className="lg:w-1/12 order-first lg:order-last xl:order-last">
              <div className="text-[#e40046] text-xs tracking-wide uppercase font-semibold mb-2 lg:hidden xl:hidden ml-3">
                Share this on:
              </div>
              <div className="flex justify-start lg:justify-center xl:justify-center items-start sticky top-[50px]">
                <div className="bg-slate-100 flex justify-center items-center flex-row lg:flex-col xl:flex-col py-2 lg:py-6 xl:py-6 px-4 rounded-full mb-5">
                  <ul className="">
                    <li className="mb-0 lg:mb-3 xl:mb-3 inline-block md:inline lg:block xl:block mr-3 lg:mr-0 xl:mr-0">
                      <Link
                        href={`https://www.facebook.com/sharer/sharer.php?u=${post.slug}&quote=${post.title}`}
                        target="_blank"
                        className="tooltip"
                        data-tip="Share on facebook"
                      >
                        <FaFacebookF className="h-6 w-6 text-slate-600 hover:text-[#1877F2]" />
                      </Link>
                    </li>
                    <li className="mb-0 lg:mb-3 xl:mb-3 inline-block md:inline lg:block xl:block mr-3 lg:mr-0 xl:mr-0">
                      <Link
                        href={`https://www.linkedin.com/shareArticle?url=${post.slug}&title=${post.title}`}
                        target="_blank"
                        className="tooltip"
                        data-tip="Share on LinkedIn"
                      >
                        <FaLinkedinIn className="h-6 w-6 text-slate-600 hover:text-[#0A66C2]" />
                      </Link>
                    </li>
                    <li className="mb-0 lg:mb-3 xl:mb-3 inline-block md:inline lg:block xl:block mr-3 lg:mr-0 xl:mr-0">
                      <Link
                        href={`https://pinterest.com/pin/create/bookmarklet/?media=${post.featuredImage.node.sourceUrl}&url=${post.slug}&description=${post.title}`}
                        target="_blank"
                        className="tooltip"
                        data-tip="Share on Pinterest"
                      >
                        <FaPinterest className="h-6 w-6 text-slate-600 hover:text-[#C8232C]" />
                      </Link>
                    </li>
                    <li className="mb-0 lg:mb-3 xl:mb-3 inline-block md:inline lg:block xl:block mr-3 lg:mr-0 xl:mr-0">
                      <Link
                        href={`https://twitter.com/share?url=${post.slug}&text=${post.title}`}
                        target="_blank"
                        className="tooltip"
                        data-tip="Share on X"
                      >
                        <RiTwitterXLine className="h-6 w-6 text-slate-600 hover:text-[#000000]" />
                      </Link>
                    </li>
                    <li className="inline-block md:inline lg:block xl:block">
                      <Link
                        href={`https://api.whatsapp.com/send?text=${post.title} ${post.slug}`}
                        target="_blank"
                        className="tooltip"
                        data-tip="Share on WhatsApp"
                      >
                        <FaWhatsapp className="h-6 w-6 text-slate-600 hover:text-[#25D366]" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-7/12">
          <article key={post.slug}>
            <header>
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
            </header>
            <section>
              <Toggle>
                <ul>
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
              </Toggle>

              <div
                className="single-content text-slate-800 font-light text-lg"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>
            </section>
          </article>
        </div>
        <div className="lg:w-3/12 order-last lg:order-first xl:order-first">
          <HomeSidebar />
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
