import articleFragment from "../fragments/article";

export const getArticlesQuery = /* GraphQL */ `
  query getArticles(
    $first: Int!
    $query: String!
    $sortKey: ArticleSortKeys
    $reverse: Boolean
    $after: String
  ) {
    articles(first: $first, sortKey: $sortKey, reverse: $reverse, query: $query, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        node {
          ...article
        }
      }
    }
  }
  ${articleFragment}
`;

export const getArticleQuery = /* GraphQL */ `
  query GetArticle(
    $id: ID!
  ) { 
    node(id: $id) {
      ... on Article {
        ...article
      }
    }
  }
  ${articleFragment}
`;