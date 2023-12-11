import Footer from 'components/layout/footer';
import Divider from 'components/ui/divider';
import LastLink from 'components/ui/last-link';
import { getArticle } from 'lib/shopify';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const article = await getArticle(params.handle);

  if (!article) return notFound();

  /* const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG); */

  return {
    /* title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null */
  };
}

export default async function ArticlePage({ params }: { params: { handle: string } }) {
  const article = await getArticle(params.handle);

  if (!article) return notFound();

  const articleJsonLd = {
    /* '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    } */
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd)
        }}
      />
      

      
      {/* divider */}
      <Divider />

      {/* Last links */}
      <Suspense>
        <LastLink />
      </Suspense>

      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
