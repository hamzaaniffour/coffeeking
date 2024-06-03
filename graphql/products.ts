export const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL!;

export const GET_PRODUCTS = `
  query getProducts {
    products {
      nodes {
        affiliateLink
        title
        discount
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;

export const GET_5_PRODUCTS = `
  query get5Products {
    products {
      nodes {
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        affiliateLink
        discount
      }
    }
  }
`;