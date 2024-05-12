import Link from "next/link";
import Image from "next/image";
import { getBlurData } from "@/libs/blur-data-generator";
import { GoArrowUpRight } from "react-icons/go";

export default async function AllBlogPosts() {
  function limitWords(text: string, limit: number): string {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  }

  const { data } = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query getPosts {
          posts(first: 6, where: {categoryName: "guides"}) {
            edges {
              node {
                title
                slug
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                categories {
                  edges {
                    node {
                      slug
                      name
                    }
                  }
                }
              }
            }
          }
        }
      `,
    }),
    next: { revalidate: 10 },
  }).then((res) => res.json());

  let blogPosts = data?.posts?.edges;

  const blurDataPromises = blogPosts?.map(async (post: any) => {
    if (post.node.featuredImage) {
      const imageUrl = post.node.featuredImage.node.sourceUrl;
      const { base64 } = await getBlurData(imageUrl);
      return base64;
    }
    return null;
  });

  await Promise.all(blurDataPromises).then((blurDataArray) => {
    blogPosts?.forEach((post: any, index: number) => {
      if (post.node.featuredImage) {
        post.node.featuredImage.node.blurDataURL = blurDataArray[index];
      }
    });
  });

  return (
    <div className="mt-16">
      <h2 className="text-3xl text-black font-bold mb-5">
        Buying Guide for Commercial Coffee Machines
      </h2>
      <p className="text-base text-black font-medium mb-9">
        Looking to buy a commercial coffee machine? Our guide covers everything
        you need to know. We&#39;ll help you choose the right type, consider
        capacity and brewing methods, and provide maintenance tips. Whether
        you&#39;re a barista pro or new to commercial machines, we&#39;ve got
        you covered. Let&#39;s brew!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {blogPosts?.map(
          (post: {
            node: any;
            title: any;
            featuredImage: any;
            categories: any;
          }) => (
            <div key={post.node.slug} className="w-full lg:w-full">
              {post.node.featuredImage && (
                <Link href={`/blog/${post.node.slug}`}>
                  <Image
                    src={post.node.featuredImage.node.sourceUrl}
                    alt={post.node.title}
                    width={400}
                    height={300}
                    className="rounded-lg"
                    layout="responsive"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={100}
                    priority
                    placeholder="blur"
                    blurDataURL={
                      post.node.featuredImage.node.blurDataURL || undefined
                    }
                  />
                </Link>
              )}
              <div className="mt-3">
                {post.node.categories.edges.map(
                  (category: any, index: number) => (
                    <Link
                      key={category.node.slug}
                      href={`/category/${category.node.slug}`}
                    >
                      <span className="text-slate-500 text-[13px] tracking-wider font-medium uppercase">
                        {index > 0 && <span className="mr-1">, </span>}
                        {category.node.name}
                      </span>
                    </Link>
                  )
                )}
              </div>
              <h3 className="text-lg lg:text-base xl:text-base text-black font-semibold mt-1 leading-6">
                <Link href={`/blog/${post.node.slug}`}>
                  {limitWords(post.node.title, 8)}
                </Link>
              </h3>
            </div>
          )
        )}
      </div>
      <div className="max-w-[400px] mx-auto flex justify-center items-center mt-8">
        <Link href="/category/guides">
          <button className="py-2 px-6 rounded-full font-bold w-full bg-black text-white">
            Discover more Guides{" "}
            <GoArrowUpRight className="inline-block text-amber-400 h-4 w-4 -mt-0.5" />
          </button>
        </Link>
      </div>
    </div>
  );
}
