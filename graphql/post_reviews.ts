export async function fetchPosts() {
    const url = process.env.NEXT_PUBLIC_GRAPHQL_URL!;
  
    const query = `
        query postsItems {
          posts(first: 3) {
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
  