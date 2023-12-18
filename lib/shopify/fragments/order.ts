const orderFragment = /* GraphQL */ `
  fragment order on Order {
    id
    name
    orderNumber
    fulfillmentStatus
    totalPrice {
      amount
      currencyCode
    }
    currencyCode
    statusUrl
    processedAt
    lineItems(first: 250) {
      edges {
        node {
          title
          quantity
        }
      }
    }
  }
`;

export default orderFragment;
