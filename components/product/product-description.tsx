import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import { Suspense } from 'react';
import ProductAccrodion from './product-accordion';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="col-span-6 flex flex-col gap-20 px-10">
        {/* title and ctas */}
        <div className="flex flex-col gap-8">
          <h1 className="text-title-3 !leading-[140%]">{product.title}</h1>

          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
          
          {product.descriptionHtml ? (
            <Prose
            className="text-body-1 opacity-50"
              html={product.descriptionHtml}
            />
          ) : null}

          <VariantSelector 
            options={product.options} 
            variants={product.variants} 
          />

          {/* cta and reviews */}
          <div className="mt-3 flex flex-col gap-3">
            <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
            <div className="flex items-center gap-2.5 p-2">
              <div className="flex">
                <img src="/img/icon/star.svg" alt="" className="h-6 w-6" />
                <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
              </div>
              <button className="button-text">Leggi 16 recensioni</button>
            </div>
          </div>
        </div>

        {/* accordion - decirptions of the product */}
        <Suspense>
          <ProductAccrodion />
        </Suspense>
      </div>
    </>
  );
}
