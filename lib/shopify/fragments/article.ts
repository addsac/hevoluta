import imageFragment from './image';
import seoFragment from './seo';

const articleFragment = /* GraphQL */ `
  fragment article on Article {
    id
    title
    image {
      ...image
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
      ...seo
    }
    publishedAt
  }
  ${imageFragment}
  ${seoFragment}
`;

export default articleFragment;
