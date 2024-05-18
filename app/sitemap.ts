import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URLS}/wp-json/wp/v2/posts?_embed`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }

    const posts = await response.json();

    const postsSitemap = posts.map((post: any) => ({
      url: `https://www.cyclewaycoffee.net/blog/${post.slug}`,
      lastModified: new Date(post.modified),
    }));

    return [
      {
        url: process.env.NEXT_PUBLIC_BASE_URLS,
        lastModified: new Date(),
      },
      ...postsSitemap,
    ];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return [];
  }
}
