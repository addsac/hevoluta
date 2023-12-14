import { Gallery } from 'components/product/gallery';
import { ProductDescription } from 'components/product/product-description';
import ProductDetails from 'components/product/product-details';
import ProductReviews from 'components/product/product-reviews';
import Divider from 'components/ui/divider';
import LastLink from 'components/ui/last-link';
import ProductRows from 'components/ui/product/product-rows';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getProduct, getProductRecommendations } from 'lib/shopify';
import { Image } from 'lib/shopify/types';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
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
      : null
  };
}

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  // Fetch the reviews for the current product - https://judge.me/api/v1/reviews
  const apiUrl = `https://judge.me/api/v1/reviews?api_token=${'7xyLFlu31C1Wj8Z8wyp5mMkO7E0'}&shop_domain=${'879c32-2.myshopify.com'}&per_page=15&page=1&product_id=${product.id}`;
  const reviews = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(res => res.json())
    .then(res => res.reviews)

  const productJsonLd = {
    '@context': 'https://schema.org',
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
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />

      <div className="w-screen flex flex-col lg:flex-row items-start gap-16 lg:gap-2.5 px-5 pt-20 pb-[120px]">
        {/* photos */}
        <Suspense>
          <Gallery
            images={product.images.map((image: Image) => ({
              src: image.url,
              altText: image.altText
            }))}
          />
        </Suspense>

        <Suspense>
          <ProductDescription product={product} reviews={reviews} />
        </Suspense>
      </div>

      <Suspense>
        <ProductDetails product={product} />
      </Suspense>

      <Suspense>
        <ProductReviews product={product} reviews={reviews} />
      </Suspense>

      {/* Products */}
      <RelatedProducts 
        id={product.id}
      />
      
      {/* divider */}
      <Divider />

      {/* Last links */}
      <Suspense>
        <LastLink />
      </Suspense>
    </>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="flex flex-col gap-20 px-5 py-[120px]">
        <div className="w-full flex flex-col items-center justify-center gap-20">
          {/* title */}
          <div className="flex flex-col gap-6 text-center">
            <p className="text-title-4">
              Scopri altri prodotti:
            </p>
            <p className="opacity-70">
              Acquista i nostri prodotti più amati
            </p>
          </div>

          {/* rows prodcucts */}
          <Suspense>
            <ProductRows items={relatedProducts} />
          </Suspense>
        </div>
      </div>
  );
}
