import { getCollections, getPages, getProducts } from 'lib/shopify';
import { validateEnvironmentVariables } from 'lib/utils';
import { MetadataRoute } from 'next';

type Route = {
  url: string;
  lastModified: string;
};

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  validateEnvironmentVariables();

  // home
  const routesMap = [''].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString()
  }));

  // about
  routesMap.push({
    url: `${baseUrl}/about`,
    lastModified: new Date().toISOString()
  });

  // blog
  routesMap.push({
    url: `${baseUrl}/blog`,
    lastModified: new Date().toISOString()
  });

  // articles
  /* ... */

  // chat
  routesMap.push({
    url: `${baseUrl}/chat`,
    lastModified: new Date().toISOString()
  });

  // policy
  routesMap.push({
    url: `${baseUrl}/policy`,
    lastModified: new Date().toISOString()
  });

  // profile
  routesMap.push({
    url: `${baseUrl}/profile`,
    lastModified: new Date().toISOString()
  });

  // collections
  const collectionsPromise = getCollections().then((collections) =>
    collections.map((collection) => ({
      url: `${baseUrl}${collection.path}`,
      lastModified: collection.updatedAt
    }))
  );

  // product
  const productsPromise = getProducts({}).then((products) =>
    products.map((product) => ({
      url: `${baseUrl}/products/${product.handle}`,
      lastModified: product.updatedAt
    }))
  );

  // pages
  const pagesPromise = getPages().then((pages) =>
    pages.map((page) => ({
      url: `${baseUrl}/${page.handle}`,
      lastModified: page.updatedAt
    }))
  );

  let fetchedRoutes: Route[] = [];

  try {
    fetchedRoutes = (await Promise.all([productsPromise, pagesPromise])).flat(); // collectionsPromise
  } catch (error) {
    throw JSON.stringify(error, null, 2);
  }

  return [...routesMap, ...fetchedRoutes];
}
