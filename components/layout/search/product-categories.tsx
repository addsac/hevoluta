'use client'

import { ShopifyCollection } from 'lib/shopify/types';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default async function ProductCategories({ collections }: { collections: ShopifyCollection[]} ) {
  const searchParams = useSearchParams();
  const activeCollection = searchParams.get('collection');
  const isAllActive = !activeCollection;
  const goToProductsContainer = () => {
    const productsContainer = document.getElementById('products-container');
    if (productsContainer) {
      productsContainer.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="mt-5 grid w-full grid-cols-10 gap-5 px-5">
      <Link
        className={`col-span-5 border p-8 text-center lg:col-span-2 flex flex-col items-center gap-3 ${
          isAllActive
            ? 'border-black bg-white text-black'
            : 'border-gray-100 bg-gray-100 text-black hover:border-gray-200'
        }`}
        href="/search"
        onClick={() => goToProductsContainer()}
      >
        {getCategoryIcon('all')}
        <p className="text-body-1">Tutte le categorie</p>
      </Link>
      {collections.slice(1, collections.length).map((item) => {
        const isActive = activeCollection === item?.handle;
        const icon = getCategoryIcon(item?.handle);
        return (
          <Link 
            key={item?.id}
            className={`col-span-5 border p-8 text-center lg:col-span-2 flex flex-col items-center gap-3 ${
              isActive
                ? 'border-black bg-white text-black'
                : 'border-gray-100 bg-gray-100 text-black hover:border-gray-200'
            }`}
            href={`${item?.path}?collection=${item?.handle}`}
            onClick={() => goToProductsContainer()}
          >
            {icon}
            <p className="text-body-1">{item?.title}</p>
          </Link>
        );
      })}
    </div>
  );
}

const getCategoryIcon = (handle?: string) => {
  const icons = [
    (
      <svg
        key="drop"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2C9 6 6 9.5 6 13a6 6 0 0 0 12 0c0-3.5-3-7-6-11Z" />
      </svg>
    ),
    (
      <svg
        key="leaf"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 4c-8 0-12 4-12 12" />
        <path d="M20 4c0 8-4 12-12 12" />
        <path d="M8 16l-4 4" />
      </svg>
    ),
    (
      <svg
        key="spark"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z" />
        <path d="M4 16l.8 2L7 19l-2.2.8L4 22l-.8-2L1 19l2.2-.8L4 16Z" />
      </svg>
    ),
    (
      <svg
        key="bottle"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M10 2h4" />
        <path d="M11 2v4l-2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8l-2-2V2" />
        <path d="M9 12h6" />
      </svg>
    ),
    (
      <svg
        key="sun"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.5 4.5l1.4 1.4M18.1 18.1l1.4 1.4M4.5 19.5l1.4-1.4M18.1 5.9l1.4-1.4" />
      </svg>
    ),
    (
      <svg
        key="shield"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3Z" />
        <path d="M9.5 12.5l2 2 3.5-3.5" />
      </svg>
    )
  ];

  const handleHash = hashHandle(handle);
  return icons[handleHash % icons.length];
};

const hashHandle = (handle?: string) => {
  if (!handle) return 0;
  let hash = 0;
  for (let i = 0; i < handle.length; i += 1) {
    hash = (hash << 5) - hash + handle.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};
