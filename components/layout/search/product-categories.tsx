'use client'

import { ShopifyCollection } from 'lib/shopify/types';
import Link from 'next/link';

export default async function ProductCategories({ collections }: { collections: ShopifyCollection[]} ) {
  const goToProductsContainer = () => {
    const productsContainer = document.getElementById('products-container');
    if (productsContainer) {
      productsContainer.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="mt-5 grid w-full grid-cols-10 gap-5 px-5">
        {collections.slice(1, collections.length).map((item) => (
            <Link 
                className="col-span-5 border border-gray-100 bg-gray-100 p-8 text-center hover:border-gray-200 lg:col-span-2"
                href={`${item?.path}?collection=${item?.handle}`}
                onClick={() => goToProductsContainer()}
            >
                <p className="text-body-1">
                    {item?.title}
                </p>
            </Link>
        ))}
    </div>
  );
}
