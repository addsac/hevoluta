import { Gallery } from 'components/product/gallery';
import { ProductDescription } from 'components/product/product-description';
import ProductDetails from 'components/product/product-details';
import ProductReviews from 'components/product/product-reviews';
import Divider from 'components/ui/divider';
import ProductRows from 'components/ui/product/product-rows';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getProduct, getProductRecommendations } from 'lib/shopify';
import { Image } from 'lib/shopify/types';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';

export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { handle: string };
}): Promise<Metadata | JSX.Element> {
  const product = await getProduct(params.handle);

  if (!product) return ErrorPage();

  const { url, width, height, altText: alt } = product?.featuredImage || {};
  const indexable = !product?.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: `Hevoluta – ${product?.seo.title || product?.title}`,
    description: product?.seo.description || product?.description,
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

  if (!product) return ErrorPage();

  // Fetch the reviews for the current product - https://judge.me/api/v1/reviews
  const apiUrl = `https://judge.me/api/v1/reviews?api_token=${process.env.JUDGEME_SECRET_TOKEN}&shop_domain=${process.env.SHOPIFY_DOMAIN}&per_page=15&page=1&product_id=${product?.id}`;
  const reviews = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-cache',
  })
    .then(res => res.json())
    .then(res => res.reviews)

  console.log(reviews);

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product?.title,
    description: product?.description.slice(0, 200),
    image: product?.featuredImage?.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product?.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product?.priceRange.minVariantPrice.currencyCode,
      highPrice: product?.priceRange.maxVariantPrice.amount,
      lowPrice: product?.priceRange.minVariantPrice.amount
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
            <ProductRows items={relatedProducts.slice(0, 4)} />
          </Suspense>

          <Link href="/search">
            <button className="button-secondary-base">
              Vedi altri prodotti
            </button>
          </Link>
        </div>
      </div>
  );
}

const ErrorPage = () => {
  return (
    <>
      <div className="mb-10 mt-24 flex w-screen flex-col items-center justify-center gap-8 px-5 text-center">
        <p className="text-title-4">
          Questo prodotto non è più disponibile
        </p>
        <p>
          Ritorna alla lista di prodotti per vedere quelli esistenti. 
        </p>
      </div>
      <Suspense>
        <div className="flex w-screen justify-center">
          <Link href="/search">
            <button className="button-primary-base">
              Torna ai prodotti
            </button>
          </Link>
        </div>
      </Suspense>
    </>
  );
};
