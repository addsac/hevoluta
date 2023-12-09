export const getBlogQuery = /* GraphQL */ `
  query blogs {
    blogs(first: 5) {
      edges {
        node {
          id
          title
          handle
          seo {
            title
            description
          }
          authors {
            name
            firstName
            lastName
            email
          }
        }
      }
    }
  }
`;
