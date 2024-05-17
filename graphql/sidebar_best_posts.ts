export const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL!;

export const GET_SIDEBAR_BEST_POST = `
  query getPosts {
    posts(first: 6) {
      edges {
        node {
          title
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;
