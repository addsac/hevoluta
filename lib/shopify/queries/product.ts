import productFragment from '../fragments/product';

export const getProductQuery = /* GraphQL */ `
  query getProduct($handle: String!) {
    product(handle: $handle) {
      ...product
      metafields(identifiers: [
        {namespace: "custom", key: "mantenimento"},
        {namespace: "custom", key: "indicazioni"},
        {namespace: "custom", key: "storia"},
        {namespace: "custom", key: "modalita_uso"},
        {namespace: "custom", key: "ingredienti"},
        {namespace: "custom", key: "benefici_del_prodotto"},
      ]) {
        description
        id
        key
        namespace
        value
      }      
    }
  }
  ${productFragment}
`;

export const getProductsQuery = /* GraphQL */ `
  query getProducts($sortKey: ProductSortKeys, $reverse: Boolean, $query: String) {
    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {
      edges {
        node {
          ...product
        }
      }
    }
  }
  ${productFragment}
`;

export const getProductRecommendationsQuery = /* GraphQL */ `
  query getProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
      ...product
    }
  }
  ${productFragment}
`;
