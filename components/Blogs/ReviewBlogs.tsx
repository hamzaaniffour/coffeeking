import Link from "next/link";
import Image from "next/image";
import { getBlurData } from "@/libs/blur-data-generator";
import { GoArrowUpRight } from "react-icons/go";
import { GET_REVIEW_POSTS, GRAPHQL_URL } from "@/graphql/home_blogs";

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
      query: GET_REVIEW_POSTS,
    }),
    next: { revalidate: 120 },
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
        Commercial Coffee Machine Reviews
      </h2>
      <p className="text-base text-black font-medium mb-6">
        Looking to upgrade your coffee setup? Dive into our detailed reviews of
        Commercial Coffee Machine, covering everything from high-performance
        espresso machines to reliable drip coffee makers and convenient pod
        machines.
      </p>
      <p className="text-base text-black font-medium mb-6">
        We explore each machine&#39;s features, brewing capacity, methods,
        programmability, and ease of cleaning, ensuring you make an informed
        choice. Unsure which type is right for you?
      </p>
      <p className="text-base text-black font-medium mb-9">
        Our guides and comparisons clarify the differences between machines,
        helping you choose the perfect one to elevate your coffee game and
        impress your customers or employees. Start browsing our reviews today to
        find your perfect match!
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
                    layout="responsive"
                    width={700}
                    height={475}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    placeholder="blur"
                    blurDataURL={
                      post.node.featuredImage.node.blurDataURL || undefined
                    }
                    className="rounded-lg"
                  />
                </Link>
              )}
              <div className="mt-3">
                {post.node.categories.edges.map(
                  (category: any, index: number) => (
                    <Link
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
                <Link href={`/blog/${post.node.slug}`}>
                  {limitWords(post.node.title, 8)}
                </Link>
              </h3>
            </div>
          )
        )}
      </div>
      <div className="max-w-[400px] mx-auto flex justify-center items-center mt-8">
        <Link href="/category/reviews">
          <button className="py-2 px-6 rounded-full font-bold w-full bg-black text-white">
            Discover more Reviews{" "}
            <GoArrowUpRight className="inline-block text-amber-400 h-4 w-4 -mt-0.5" />
          </button>
        </Link>
      </div>
    </div>
  );
}
