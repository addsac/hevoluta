import { HIDDEN_PRODUCT_TAG, SHOPIFY_GRAPHQL_API_ENDPOINT, TAGS } from 'lib/constants';
import { isShopifyError } from 'lib/type-guards';
import { ensureStartsWith } from 'lib/utils';
import { revalidateTag } from 'next/cache';
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import {
  addToCartMutation,
  createCartMutation,
  editCartItemsMutation,
  removeFromCartMutation
} from './mutations/cart';
import { createCustomerQuery, customerAccessTokenDeleteQuery, loginCustomerQuery, sendEmailPasswordRecoveryQuery } from './mutations/customer';
import { getArticleQuery, getArticlesQuery } from './queries/articles';
import { getBlogQuery } from './queries/blog';
import { getCartQuery } from './queries/cart';
import {
  getCollectionProductsQuery,
  getCollectionQuery,
  getCollectionsQuery
} from './queries/collection';
import { getMenuQuery } from './queries/menu';
import { getPageQuery, getPagesQuery } from './queries/page';
import {
  getProductQuery,
  getProductRecommendationsQuery,
  getProductsQuery
} from './queries/product';
import {
  Cart,
  Collection,
  Connection,
  Customer,
  CustomerAccessTokenDeletePayload,
  CustomerUserErrors,
  Image,
  Menu,
  Page,
  // Post,
  Product,
  ShopifyAddToCartOperation,
  ShopifyArticle,
  ShopifyArticleOperation,
  ShopifyArticles,
  ShopifyArticlesOperation,
  ShopifyBlog,
  ShopifyBlogOperation,
  ShopifyCart,
  ShopifyCartOperation,
  ShopifyCollection,
  ShopifyCollectionOperation,
  ShopifyCollectionProductsOperation,
  ShopifyCollectionsOperation,
  ShopifyCreateCartOperation,
  ShopifyCustomerCreateOperation,
  ShopifyCustomerLoginOperation,
  ShopifyCustomerLogoutOperation,
  ShopifyCustomerSendEmailPasswordRecoveryOperation,
  ShopifyMenuOperation,
  ShopifyPageOperation,
  ShopifyPagesOperation,
  ShopifyProduct,
  ShopifyProductOperation,
  ShopifyProductRecommendationsOperation,
  ShopifyProductsOperation,
  ShopifyRemoveFromCartOperation,
  ShopifyUpdateCartOperation
} from './types';

const domain = process.env.SHOPIFY_STORE_DOMAIN
  ? ensureStartsWith(process.env.SHOPIFY_STORE_DOMAIN, 'https://')
  : '';
const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

type ExtractVariables<T> = T extends { variables: object } ? T['variables'] : never;

export async function shopifyFetch<T>({
  cache = 'force-cache',
  headers,
  query,
  tags,
  variables
}: {
  cache?: RequestCache;
  headers?: HeadersInit;
  query: string;
  tags?: string[];
  variables?: ExtractVariables<T>;
}): Promise<{ status: number; body: T } | never> {
  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key,
        ...headers
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables })
      }),
      cache,
      ...(tags && { next: { tags } })
    });

    const body = await result.json();

    if (body.errors) {
      throw body.errors[0];
    }

    return {
      status: result.status,
      body
    };
  } catch (e) {
    if (isShopifyError(e)) {
      throw {
        cause: e.cause?.toString() || 'unknown',
        status: e.status || 500,
        message: e.message,
        query
      };
    }

    throw {
      error: e,
      query
    };
  }
}

const removeEdgesAndNodes = (array: Connection<any>) => {
  return array.edges.map((edge) => edge?.node);
};

const removeEdgesAndNodesWithPagination = (array: Connection<any>) => {
  return {
    pageInfo: array.pageInfo,
    edges: array.edges.map((edge) => edge?.node)
  };
}

/**
 * Reshapes
 */
const reshapeCustomer = (customer: any): any => {
  if (!customer) {
    return undefined;
  }

  return customer;
}

const reshapeBlogs = (blogs: any): any => {
  if (!blogs) {
    return undefined;
  }

  return removeEdgesAndNodes(blogs);
}

const reshapeArticles = (articles: any): any => {
  if (!articles) {
    return undefined;
  }

  return removeEdgesAndNodesWithPagination(articles);
}

const reshapeArticle = (article: any): any => {
  if (!article) {
    return undefined;
  }

  return article;
}

const reshapeCart = (cart: ShopifyCart): Cart => {
  if (!cart.cost?.totalTaxAmount) {
    cart.cost.totalTaxAmount = {
      amount: '0.0',
      currencyCode: 'USD'
    };
  }

  return {
    ...cart,
    lines: removeEdgesAndNodes(cart.lines)
  };
};

const reshapeCollection = (collection: ShopifyCollection): Collection | undefined => {
  if (!collection) {
    return undefined;
  }

  return {
    ...collection,
    path: `/search/${collection.handle}`
  };
};

const reshapeCollections = (collections: ShopifyCollection[]) => {
  const reshapedCollections = [];

  for (const collection of collections) {
    if (collection) {
      const reshapedCollection = reshapeCollection(collection);

      if (reshapedCollection) {
        reshapedCollections.push(reshapedCollection);
      }
    }
  }

  return reshapedCollections;
};

const reshapeImages = (images: Connection<Image>, productTitle: string) => {
  const flattened = removeEdgesAndNodes(images);

  return flattened.map((image) => {
    const filename = image.url.match(/.*\/(.*)\..*/)[1];
    return {
      ...image,
      altText: image.altText || `${productTitle} - ${filename}`
    };
  });
};

const reshapeProduct = (product: ShopifyProduct, filterHiddenProducts: boolean = true) => {
  if (!product || (filterHiddenProducts && product.tags.includes(HIDDEN_PRODUCT_TAG))) {
    return undefined;
  }

  const { images, variants, ...rest } = product;

  return {
    ...rest,
    images: reshapeImages(images, product.title),
    variants: removeEdgesAndNodes(variants)
  };
};

const reshapeProducts = (products: ShopifyProduct[]) => {
  const reshapedProducts = [];

  for (const product of products) {
    if (product) {
      const reshapedProduct = reshapeProduct(product);

      if (reshapedProduct) {
        reshapedProducts.push(reshapedProduct);
      }
    }
  }

  return reshapedProducts;
};

/**
  * Cart API
  */
export async function createCart(): Promise<Cart> {
  const res = await shopifyFetch<ShopifyCreateCartOperation>({
    query: createCartMutation,
    cache: 'no-store'
  });

  return reshapeCart(res.body.data.cartCreate.cart);
}

export async function addToCart(
  cartId: string,
  lines: { merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const res = await shopifyFetch<ShopifyAddToCartOperation>({
    query: addToCartMutation,
    variables: {
      cartId,
      lines
    },
    cache: 'no-store'
  });
  return reshapeCart(res.body.data.cartLinesAdd.cart);
}

export async function removeFromCart(cartId: string, lineIds: string[]): Promise<Cart> {
  const res = await shopifyFetch<ShopifyRemoveFromCartOperation>({
    query: removeFromCartMutation,
    variables: {
      cartId,
      lineIds
    },
    cache: 'no-store'
  });

  return reshapeCart(res.body.data.cartLinesRemove.cart);
}

export async function updateCart(
  cartId: string,
  lines: { id: string; merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const res = await shopifyFetch<ShopifyUpdateCartOperation>({
    query: editCartItemsMutation,
    variables: {
      cartId,
      lines
    },
    cache: 'no-store'
  });

  return reshapeCart(res.body.data.cartLinesUpdate.cart);
}

export async function getCart(cartId: string): Promise<Cart | undefined> {
  const res = await shopifyFetch<ShopifyCartOperation>({
    query: getCartQuery,
    variables: { cartId },
    tags: [TAGS.cart],
    cache: 'no-store'
  });

  // Old carts becomes `null` when you checkout.
  if (!res.body.data.cart) {
    return undefined;
  }

  return reshapeCart(res.body.data.cart);
}

/**
 * Products API
 */
export async function getCollection(handle: string): Promise<Collection | undefined> {
  const res = await shopifyFetch<ShopifyCollectionOperation>({
    query: getCollectionQuery,
    tags: [TAGS.collections],
    variables: {
      handle
    }
  });

  return reshapeCollection(res.body.data.collection);
}

export async function getCollectionProducts({
  collection,
  reverse,
  sortKey
}: {
  collection: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  const res = await shopifyFetch<ShopifyCollectionProductsOperation>({
    query: getCollectionProductsQuery,
    tags: [TAGS.collections, TAGS.products],
    variables: {
      handle: collection,
      reverse,
      sortKey: sortKey === 'CREATED_AT' ? 'CREATED' : sortKey
    }
  });

  if (!res.body.data.collection) {
    console.log(`No collection found for \`${collection}\``);
    return [];
  }

  return reshapeProducts(removeEdgesAndNodes(res.body.data.collection.products));
}

export async function getCollections(): Promise<Collection[]> {
  const res = await shopifyFetch<ShopifyCollectionsOperation>({
    query: getCollectionsQuery,
    tags: [TAGS.collections]
  });
  const shopifyCollections = removeEdgesAndNodes(res.body?.data?.collections);
  const collections = [
    {
      handle: '',
      title: 'All',
      description: 'All products',
      seo: {
        title: 'All',
        description: 'All products'
      },
      path: '/search',
      updatedAt: new Date().toISOString()
    },
    // Filter out the `hidden` collections.
    // Collections that start with `hidden-*` need to be hidden on the search page.
    ...reshapeCollections(shopifyCollections).filter(
      (collection) => !collection.handle.startsWith('hidden')
    )
  ];

  return collections;
}

/**
 * Page API
 */
export async function getMenu(handle: string): Promise<Menu[]> {
  const res = await shopifyFetch<ShopifyMenuOperation>({
    query: getMenuQuery,
    tags: [TAGS.collections],
    variables: {
      handle
    }
  });

  return (
    res.body?.data?.menu?.items.map((item: { title: string; url: string }) => ({
      title: item.title,
      path: item.url.replace(domain, '').replace('/collections', '/search').replace('/pages', '')
    })) || []
  );
}

export async function getPage(handle: string): Promise<Page> {
  const res = await shopifyFetch<ShopifyPageOperation>({
    query: getPageQuery,
    variables: { handle }
  });

  return res.body.data.pageByHandle;
}

export async function getPages(): Promise<Page[]> {
  const res = await shopifyFetch<ShopifyPagesOperation>({
    query: getPagesQuery
  });

  return removeEdgesAndNodes(res.body.data.pages);
}

/**
 * Product API
 */
export async function getProduct(handle: string): Promise<Product | undefined> {
  const res = await shopifyFetch<ShopifyProductOperation>({
    query: getProductQuery,
    tags: [TAGS.products],
    variables: {
      handle
    }
  });

  return reshapeProduct(res.body.data.product, false);
}

export async function getProductRecommendations(productId: string): Promise<Product[]> {
  const res = await shopifyFetch<ShopifyProductRecommendationsOperation>({
    query: getProductRecommendationsQuery,
    tags: [TAGS.products],
    variables: {
      productId
    }
  });

  return reshapeProducts(res.body.data.productRecommendations);
}

export async function getProducts({
  query,
  reverse,
  sortKey
}: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  const res = await shopifyFetch<ShopifyProductsOperation>({
    query: getProductsQuery,
    tags: [TAGS.products],
    variables: {
      query,
      reverse,
      sortKey
    }
  });

  return reshapeProducts(removeEdgesAndNodes(res.body.data.products));
}

// This is called from `app/api/revalidate.ts` so providers can control revalidation logic.
export async function revalidate(req: NextRequest): Promise<NextResponse> {
  // We always need to respond with a 200 status code to Shopify,
  // otherwise it will continue to retry the request.
  const collectionWebhooks = ['collections/create', 'collections/delete', 'collections/update'];
  const productWebhooks = ['products/create', 'products/delete', 'products/update'];
  const blogWebhooks = ['blogs/create', 'blogs/delete', 'blogs/update'];
  const topic = headers().get('x-shopify-topic') || 'unknown';
  const secret = req.nextUrl.searchParams.get('secret');
  const isCollectionUpdate = collectionWebhooks.includes(topic);
  const isProductUpdate = productWebhooks.includes(topic);
  const isArticleUpdate = blogWebhooks.includes(topic);

  if (!secret || secret !== process.env.SHOPIFY_REVALIDATION_SECRET) {
    console.error('Invalid revalidation secret.');
    return NextResponse.json({ status: 200 });
  }

  if (!isCollectionUpdate && !isProductUpdate && !isArticleUpdate) {
    // We don't need to revalidate anything for any other topics.
    return NextResponse.json({ status: 200 });
  }

  if (isCollectionUpdate) {
    revalidateTag(TAGS.collections);
  }

  if (isProductUpdate) {
    revalidateTag(TAGS.products);
  }

  if (isArticleUpdate) {
    revalidateTag(TAGS.blog);
  }

  return NextResponse.json({ status: 200, revalidated: true, now: Date.now() });
}

/**
 * Customer API
 */
/* export async function getCustomer({
  customerAccessToken
} : {
  customerAccessToken: string
}): Promise<Customer> {
  const res = await shopifyFetch<ShopifyCustomerOperation>({
    query: getCustomerQuery,
    variables: { 
      customerAccessToken: customerAccessToken
    }
  });

  return reshapeCustomer(res.body.data.customerCreate)
} */

export async function registerCustomer({
  email,
  password,
  firstName,
  lastName,
  phone,
  acceptsMarketing
} : {
  email: string,
  password: string,
  firstName?: string,
  lastName?: string,
  phone?: string,
  acceptsMarketing?: boolean,
}): Promise<Customer> {
  const res = await shopifyFetch<ShopifyCustomerCreateOperation>({
    query: createCustomerQuery,
    variables: { 
      input: {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        acceptsMarketing: acceptsMarketing
      }
    }
  });

  return reshapeCustomer(res.body.data.customerCreate)
}

export async function loginCustomer({
  email,
  password
} : {
  email: string;
  password: string;
}): Promise<Customer>{
  const res = await shopifyFetch<ShopifyCustomerLoginOperation>({
    query: loginCustomerQuery,
    variables: { 
      input: {
        email: email,
        password: password
      }
    }
  });

  return reshapeCustomer(res.body.data.customerAccessTokenCreate)
}

export async function logoutCustomer({
  customerAccessToken
} : {
  customerAccessToken: string;
}): Promise<CustomerAccessTokenDeletePayload>{
  const res = await shopifyFetch<ShopifyCustomerLogoutOperation>({
    query: customerAccessTokenDeleteQuery,
    variables: { 
      customerAccessToken: customerAccessToken
    }
  });

  return res.body.data
}

export async function resetPassword({
  email
} : {
  email: string;
}): Promise<CustomerUserErrors>{
  const res = await shopifyFetch<ShopifyCustomerSendEmailPasswordRecoveryOperation>({
    query: sendEmailPasswordRecoveryQuery,
    variables: { 
      email: email
    }
  });

  return res.body.data.customerUserErrors
}

/**
 * Blog API
 */
export async function getBlogs(): Promise<ShopifyBlog[]> {
  const res = await shopifyFetch<ShopifyBlogOperation>({
    query: getBlogQuery
  });

  return reshapeBlogs(res.body.data.blogs);
}

export async function getArticles({
  first,
  title,
  sortKey,
  reverse,
  after,
} : {
  first: number,
  title: string,
  sortKey: string,
  reverse: boolean,
  after?: string,
}): Promise<ShopifyArticles> {
  const res = await shopifyFetch<ShopifyArticlesOperation>({
    query: getArticlesQuery,
    variables: {
      first: first,
      query: title,
      reverse: reverse,
      sortKey: sortKey === 'CREATED_AT' ? 'CREATED' : sortKey,
      after: after
    }
  });

  return reshapeArticles(res.body.data.articles);
}

export async function getArticle(id : string): Promise<ShopifyArticle | undefined> {
  const res = await shopifyFetch<ShopifyArticleOperation>({
    query: getArticleQuery,
    variables: {
      id
    }
  });

  return reshapeArticle(res.body.data.node);
}
