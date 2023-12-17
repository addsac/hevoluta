export type Maybe<T> = T | null;

export type Connection<T> = {
  edges: Array<Edge<T>>;
  pageInfo?: PageInfo;
};

export type Edge<T> = {
  node: T;
};

export type PageInfo = {
  endCursor?: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: string;
};

export type Cart = Omit<ShopifyCart, 'lines'> & {
  lines: CartItem[];
};

export type CartItem = {
  id: string;
  quantity: number;
  cost: {
    totalAmount: Money;
  };
  merchandise: {
    id: string;
    title: string;
    selectedOptions: {
      name: string;
      value: string;
    }[];
    product: Product;
  };
};

export type Collection = ShopifyCollection & {
  path: string;
};

export type Image = {
  url: string;
  altText: string;
  width: number;
  height: number;
};

export type Menu = {
  title: string;
  path: string;
};

export type Post = {
  id: string;
  title: string;
  handle: string;
  body: string;
  bodySummary: string;
  seo?: SEO;
  createdAt: string;
  updatedAt: string;
}

export type Money = {
  amount: string;
  currencyCode: string;
};

export type Page = {
  id: string;
  title: string;
  handle: string;
  body: string;
  bodySummary: string;
  seo?: SEO;
  createdAt: string;
  updatedAt: string;
};

export type Product = Omit<ShopifyProduct, 'variants' | 'images'> & {
  variants: ProductVariant[];
  images: Image[];
};

export type ProductOption = {
  id: string;
  name: string;
  values: string[];
};

export type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  price: Money;
};

export type SEO = {
  title: string;
  description: string;
};

export type ShopifyCart = {
  id: string;
  checkoutUrl: string;
  cost: {
    subtotalAmount: Money;
    totalAmount: Money;
    totalTaxAmount: Money;
  };
  lines: Connection<CartItem>;
  totalQuantity: number;
};

export type ShopifyCollection = {
  handle: string;
  title: string;
  description: string;
  seo: SEO;
  updatedAt: string;
};

export type ShopifyProduct = {
  id: string;
  handle: string;
  availableForSale: boolean;
  title: string;
  description: string;
  descriptionHtml: string;
  options: ProductOption[];
  priceRange: {
    maxVariantPrice: Money;
    minVariantPrice: Money;
  };
  variants: Connection<ProductVariant>;
  featuredImage: Image;
  images: Connection<Image>;
  seo: SEO;
  tags: string[];
  updatedAt: string;
};

export type ShopifyCartOperation = {
  data: {
    cart: ShopifyCart;
  };
  variables: {
    cartId: string;
  };
};

export type ShopifyCreateCartOperation = {
  data: { cartCreate: { cart: ShopifyCart } };
};

export type ShopifyAddToCartOperation = {
  data: {
    cartLinesAdd: {
      cart: ShopifyCart;
    };
  };
  variables: {
    cartId: string;
    lines: {
      merchandiseId: string;
      quantity: number;
    }[];
  };
};

export type ShopifyRemoveFromCartOperation = {
  data: {
    cartLinesRemove: {
      cart: ShopifyCart;
    };
  };
  variables: {
    cartId: string;
    lineIds: string[];
  };
};

export type ShopifyUpdateCartOperation = {
  data: {
    cartLinesUpdate: {
      cart: ShopifyCart;
    };
  };
  variables: {
    cartId: string;
    lines: {
      id: string;
      merchandiseId: string;
      quantity: number;
    }[];
  };
};

export type ShopifyCollectionOperation = {
  data: {
    collection: ShopifyCollection;
  };
  variables: {
    handle: string;
  };
};

export type ShopifyCollectionProductsOperation = {
  data: {
    collection: {
      products: Connection<ShopifyProduct>;
    };
  };
  variables: {
    handle: string;
    reverse?: boolean;
    sortKey?: string;
  };
};

export type ShopifyCollectionsOperation = {
  data: {
    collections: Connection<ShopifyCollection>;
  };
};

export type ShopifyMenuOperation = {
  data: {
    menu?: {
      items: {
        title: string;
        url: string;
      }[];
    };
  };
  variables: {
    handle: string;
  };
};

/**
 * Customer
 */

export type CustomerUserErrors = {
  message: string;
  field: string[];
}[];

export type UserError = {
  message: string;
  field: string[];
};

export type CustomerAccessTokenDeletePayload = {
  deletedAccessToken: string;
  deletedCustomerAccessTokenId: string;
  userErrors: UserError[];
}

export type CustomerSendEmailPasswordRecoveryPayload = {
  customerUserErrors: UserError[];
}

export type CustomerResetByUrlPayload = {
  customer: ShopifyCustomer;
  customerAccessToken: CustomerAccessToken;
  customerUserErrors: UserError[];
}

export type CustomerAccessToken = {
  accessToken: string;
  expiresAt: Date;
};

export type Customer = {
  customer: ShopifyCustomer;
  customerUserErrors: CustomerUserErrors;
}

export type ShopifyCustomer = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type ShopifyCustomerOperation = {
  data: {
    customer
  },
  variables: {
    customerAccessToken: string
  }
}

export type ShopifyCustomerCreateOperation = {
  data: {
    customerCreate: {
      customer: ShopifyCustomer;
      customerUserErrors: CustomerUserErrors;
    }
  };
  variables: {
    input: {
      email: string;
      password: string;
      firstName?: string;
      lastName?: string;
      phone?: string;
      acceptsMarketing?: boolean;
    };
  };
};

export type ShopifyCustomerLoginOperation = {
  data: {
    customerAccessTokenCreate: {
      customerAccessToken: CustomerAccessToken;
      customerUserErrors: CustomerUserErrors;
    }
  };
  variables: {
    input: {
      email: string;
      password: string;
      firstName?: string;
      lastName?: string;
      phone?: string;
      acceptsMarketing?: boolean;
    };
  };
};

export type ShopifyCustomerLogoutOperation = {
  data: {
    deletedAccessToken: string;
    deletedCustomerAccessTokenId: string;
    userErrors: CustomerUserErrors;
  };
  variables: {
    customerAccessToken: string;
  };
};

export type ShopifyCustomerSendEmailPasswordRecoveryOperation = {
  data: {
    customerRecover: {
      customerUserErrors: CustomerUserErrors;
    }
  };
  variables: {
    email: string;
  };
};

export type ShopifyCustomerResetPasswordOperation = {
  data: {
    customerResetByUrl: {
      customer: ShopifyCustomer;
      customerAccessToken: CustomerAccessToken;
      customerUserErrors: CustomerUserErrors;
    }
  };
  variables: {
    password: string;
    resetUrl: string;
  };
};

export type ShopifyBlog = {
  id: string;
  title: string;
  handle: string;
  seo: SEO;
  authors: {
    name: string;
    firstName: string;
    lastName: string;
    email: string;
  }[];
};

export type ShopifyBlogOperation = {
  data: {
    blogs: Connection<ShopifyBlog>;
  };
}

export type ShopifyArticles = {
  data: {
    pageInfo: PageInfo;
    edges: Connection<ShopifyArticle>;
  };
}

export type ShopifyArticle = {
  id: string;
  title: string;
  image: Image;
  handle: string;
  tags: string[];
  authorV2: {
    email: string,
    name: string
  }
  content: string,
  contentHtml: HTMLElement,
  exerp: string,
  excerptHtml: HTMLElement,
  seo: SEO;
  publishedAt: Date;
}

export type ShopifyArticlesOperation = {
  data: {
    articles: Connection<ShopifyArticle>;
  };
  variables: {
    first: number;
    query: string;
    after?: string;
    reverse?: boolean;
    sortKey?: string;
  };
}

export type ShopifyArticleOperation = {
  data: { node: ShopifyArticle };
  variables: { id: string };
}

export type ShopifyPageOperation = {
  data: { pageByHandle: Page };
  variables: { handle: string };
};

export type ShopifyPagesOperation = {
  data: {
    pages: Connection<Page>;
  };
};

export type ShopifyProductOperation = {
  data: { product: ShopifyProduct };
  variables: {
    handle: string;
  };
};

export type ShopifyProductRecommendationsOperation = {
  data: {
    productRecommendations: ShopifyProduct[];
  };
  variables: {
    productId: string;
  };
};

export type ShopifyProductsOperation = {
  data: {
    products: Connection<ShopifyProduct>;
  };
  variables: {
    query?: string;
    reverse?: boolean;
    sortKey?: string;
  };
};

export type RegisterLoginType = 'login' | 'register'