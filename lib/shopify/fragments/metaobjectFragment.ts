const metaobjectFragment = /* GraphQL */ `
  fragment metaobject on Metaobject {
    id
    type 
    fields {
      key 
      value
      reference
    }
  }
`;

export default metaobjectFragment;
