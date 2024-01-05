'use client'

import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Review } from 'lib/judgeme/types';
import { Product } from 'lib/shopify/types';
import { Suspense, useState } from 'react';
import Balancer from 'react-wrap-balancer';
import ProductAccrodion from './product-accordion';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product, reviews }: { product: Product, reviews: Review[] }) {
  const [rightPrice, setRightPrice] = useState({
    amount: product.priceRange.minVariantPrice.amount,
    currencyCode: product.priceRange.minVariantPrice.currencyCode
  });

  const setRightPriceBasedOnChoosenVariant = (variant: string) => {
    // find the right pirce based on the variant
    product.variants.map((item) => {
      if(item.title === variant){
        setRightPrice({
          amount: item.price.amount,
          currencyCode: item.price.currencyCode
        })
      }
    })
  }

  return (
    <>
      <div className="w-full lg:w-1/2 flex flex-col gap-20 lg:px-10">
        {/* title and ctas */}
        <div className="flex flex-col items-start gap-8">
          <h1 className="text-title-3 !leading-[140%]">
            <Balancer>
              {product.title}
            </Balancer>
          </h1>

          <Price
            amount={rightPrice.amount}
            currencyCode={rightPrice.currencyCode}
            className='-mt-2'
          />

          {/* klarna */}
          <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-100">
            <img src="/img/icon/klarna.svg" alt="" className="h-8 w-auto shrink-0" />
            <div className="text-body-1_2 flex items-start">
              Paga in 3 rate da &nbsp;
              <Price
                amount={(Number(rightPrice.amount) / 3).toFixed(2)}
                currencyCode={rightPrice.currencyCode}
              /> &nbsp; senza interessi.
            </div>
          </div>
          
          {product.descriptionHtml ? (
            <Prose
              className="opacity-50"
              html={product.descriptionHtml}
            />
          ) : null}

          <VariantSelector 
            options={product.options} 
            variants={product.variants} 
            setRightPriceBasedOnChoosenVariant={setRightPriceBasedOnChoosenVariant}
          />

          {/* cta and reviews */}
          <div className="w-full mt-3 flex flex-col gap-3">
            <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
            <div className="flex items-center gap-2.5 p-2">
              <div className="flex">
                <img src="/img/icon/star.svg" alt="" className="h-6 w-6" />
                <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
              </div>
              <button 
                className="button-text"
                onClick={() => {
                  // scroll to reviews-wrapper id
                  const element = document.getElementById('reviews-wrapper');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >Leggi {reviews.length} recensioni</button>
            </div>
          </div>
        </div>

        {/* accordion - decirptions of the product */}
        <Suspense>
          <ProductAccrodion product={product} />
        </Suspense>
      </div>
    </>
  );
}
