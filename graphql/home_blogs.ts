export const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL!;

export const GET_REVIEW_POSTS = `
  query getPosts {
    posts(first: 3, where: {categoryName: "Reviews"}) {
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
`;

export const GET_GUIDE_POSTS = `
  query getPosts {
    posts(first: 3, where: {categoryName: "Guides"}) {
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
`;

export const GET_RANDOM_POSTS = `
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
`;

export const GET_HOME_PAGE = `
query GetPage {
  pageBy(uri: "commercial-coffee-machine") {
    id
    content
    seo {
      title
      metaDesc
      opengraphSiteName
      opengraphTitle
      opengraphType
      opengraphDescription
      opengraphImage {
        sourceUrl
      }
    }
  }
}
`;
