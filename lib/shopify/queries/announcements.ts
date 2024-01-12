import metaobjectFragment from "../fragments/metaobjectFragment";

export const getAnnouncementsQuery = /* GraphQL */ `
  query getMetaobjects($type: String!) {
    metaobjects(type: $type, first: 100) {
      edges {
        node {
          ...metaobject
        }
      }
    }
  }
  ${metaobjectFragment}
`;