import Link from "next/link";
import Image from "next/image";
import { getBlurData } from "@/libs/blur-data-generator";
import { GRAPHQL_URL, GET_RANDOM_POSTS } from "@/graphql/home_blogs";

export default async function AllBlogPosts() {
  function limitWords(text: string, limit: number): string {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  }

  const { data } = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GET_RANDOM_POSTS,
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
      <h2 className="text-3xl text-black font-bold mb-2">
        Which coffee machine is right for you?
      </h2>
      <p className="text-base text-black font-medium mb-5">
        With countless options on the market, choosing the right commercial
        coffee machine can be a daunting task. At CoffeeKing we&#39;ve
        categorized and simplified the selection process to help you find the
        perfect machine for your needs.
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
                <Link prefetch={false} href={`/blog/${post.node.slug}`}>
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
                    <Link prefetch={false}
                      key={category.node.slug}
                      href={`/category/${category.node.slug}`}
                      style={{
                        padding: "10px 0px",
                        margin: "5px 0px",
                        touchAction: "none",
                      }}
                    >
                      <span className="text-slate-500 text-[13px] tracking-wider font-medium uppercase">
                        {index > 0 && <span>, </span>}
                        {category.node.name}
                      </span>
                    </Link>
                  )
                )}
              </div>
              <h3 className="text-lg lg:text-base xl:text-base text-black font-bold mt-2 leading-6">
                <Link prefetch={false} href={`/blog/${post.node.slug}`}>
                  {limitWords(post.node.title, 8)}
                </Link>
              </h3>
            </div>
          )
        )}
      </div>
    </div>
  );
}
