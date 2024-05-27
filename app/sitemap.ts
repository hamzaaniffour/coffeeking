import { MetadataRoute } from "next";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client"; // Import necessary modules from Apollo Client

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const client = new ApolloClient({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
      cache: new InMemoryCache(),
    });

    const { data } = await client.query({
      query: gql`
        query getSitemapPosts {
          posts {
            nodes {
              slug
              modified
            }
          }
        }
      `,
    });

    const posts = data.posts.nodes;

    const postsSitemap = posts.map((post: any) => ({
      url: `https://www.cyclewaycoffee.net/blog/${post.slug}`,
      lastModified: new Date(post.modified),
    }));

    return [
      {
        url: process.env.NEXT_PUBLIC_SITE_URL,
        lastModified: new Date(),
      },
      ...postsSitemap,
    ];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return [];
  }
}
