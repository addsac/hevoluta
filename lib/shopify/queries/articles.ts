export const getArticlesQuery = /* GraphQL */ `
  query getArticles(
    $first: Int!
    $query: String!
    $sortKey: ArticleSortKeys
    $reverse: Boolean
  ) {
    articles(first: $first, sortKey: $sortKey, reverse: $reverse, query: $query) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        node {
          id
          title
          image {
            url
            altText
          }
          handle
          tags
          authorV2 {
            email
            name
          }
          content
          contentHtml
          excerpt
          excerptHtml
          seo {
            title
            description
          }
          publishedAt
        }
      }
    }
  }
`;
