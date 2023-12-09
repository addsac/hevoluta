export const getPostsQuery = /* GraphQL */ `
  query getPosts($handle: String!) {
    posts(handle: $handle) {
      items {
        title
        url
      }
    }
  }
`;
