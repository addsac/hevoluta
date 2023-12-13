import Footer from 'components/layout/footer';
import Divider from 'components/ui/divider';
import LastLink from 'components/ui/last-link';
import ProductRows from 'components/ui/product/product-rows';
import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function ProductPage() {
  const collections = await getCollectionProducts({
    'collection': "homepage-featured-items",
  });

  return (
    <>
      {/* Hero */}
      <div className="w-screen px-5 mt-5">
        <div className="relative w-full h-[400px] bg-black text-center flex flex-col items-center justify-center gap-6 overflow-clip">
            <h1 className="text-title-1 text-white z-[1]">
                I Prodotti
            </h1>
            <p className="text-17 text-white z-[1]">
                Progettati con standard superiori di formulazion ed efficacia
            </p>

            {/* background img */}
            <Image 
                src="/img/background/background-5.jpg"
                alt=""
                width={1440}
                height={400}
                className="absolute h-full w-full object-cover opacity-[0.35] select-none z-[0]"
                draggable="false"
                style={{ userSelect: 'none' }}
            />
        </div>
      </div>

      {/* Products */}
      <div className="flex flex-col gap-20 px-5 py-[120px]">
        <div className="w-full flex flex-col items-center justify-center gap-20">
          {/* title */}
          <div className="flex flex-col gap-6 text-center">
            <p className="text-title-4">
              Tutti i prodotti:
            </p>
            <p className="opacity-70">
              Acquista i nostri prodotti più amati
            </p>
          </div>

          {/* rows prodcucts */}
          <ProductRows items={collections} />
        </div>
      </div>

      {/* divider */}
      <Divider />

      {/* Last links */}
      <Suspense>
        <LastLink />
      </Suspense>
    </>
  );
}
