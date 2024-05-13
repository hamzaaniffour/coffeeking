export async function blogPage(
  first: number = 3,
  after: string | null = null
): Promise<any> {
  const url = process.env.NEXT_PUBLIC_GRAPHQL_URL!;

  const query = `
    query postsItems($first: Int, $after: String) {
      posts(first: $first, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          slug
          title
          content
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const variables = {
    first,
    after,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const data = await response.json();
  return data.data.posts;
}

export async function featuredPosts() {
  const url = process.env.NEXT_PUBLIC_GRAPHQL_URL!;

  const query = `
    query postsItems {
        posts {
          nodes {
            slug
            title
            content
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
              nodes {
                name
                slug
              }
            }
          }
        }
      }
    `;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  return data.data.posts.nodes;
}

export async function latestPosts() {
  const url = process.env.NEXT_PUBLIC_GRAPHQL_URL!;

  const query = `
    query postsItems {
        posts {
          nodes {
            slug
            title
            content
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
              nodes {
                name
                slug
              }
            }
          }
        }
      }
    `;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  return data.data.posts.nodes;
}
