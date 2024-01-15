'use client'

import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Review } from 'lib/judgeme/types';
import { Product } from 'lib/shopify/types';
import { useSearchParams } from 'next/navigation';
import { Suspense, useLayoutEffect, useState } from 'react';
import Balancer from 'react-wrap-balancer';
import ProductAccrodion from './product-accordion';
import ProductStars from './product-stars';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product, showAccordion = true, reviews = [], reviewsData = null, closeModalOnAddToCart = null, modalAddToCart = false }: { product: Product, showAccordion?: boolean, reviews: Review[], reviewsData: any, closeModalOnAddToCart: any, modalAddToCart?: boolean }) {
  const averageScore = Number(reviewsData?.bottomline?.average_score).toFixed(1)

  const [rightPrice, setRightPrice] = useState({
    amount: product.priceRange.minVariantPrice.amount,
    currencyCode: product.priceRange.minVariantPrice.currencyCode
  });

  const [compareAtPrice, setCompareAtPrice] = useState({
    amount: product.variants[0].compareAtPrice?.amount,
    currencyCode: product.variants[0].compareAtPrice?.currencyCode
  });
  
  // get the product variant from the url
  const searchParams = useSearchParams()
  const size = searchParams.get('size')

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

  const setCompareAtPriceBasedOnChoosenVariant = (variant: string) => {
    // find the right comparePrice based on the variant
    product.variants.map((item) => {
      if(item.title === variant){
        setCompareAtPrice({
          amount: item.compareAtPrice?.amount,
          currencyCode: item.compareAtPrice?.currencyCode
        })
      }
    })
  }

  useLayoutEffect(() => {
    // set the right price based on the variant at start
    setRightPriceBasedOnChoosenVariant(size ? size : product.variants[0].title)
    // set the comparePrice based on the variant at start
    setCompareAtPriceBasedOnChoosenVariant(size ? size : product.variants[0].title)
  }, [product])

  return (
    <>
      <div 
        className={`w-full ${modalAddToCart ? '' : 'lg:w-1/2 lg:px-10'} flex flex-col gap-20`}
      >
        {/* title and ctas */}
        <div className="flex flex-col items-start gap-8">
          <h1 className="text-title-3 !leading-[140%]">
            <Balancer>
              {product.title}
            </Balancer>
          </h1>

          {/* price in full and cancelled, if there is a discount */}
          {product.variants[0]?.compareAtPrice?.amount != undefined ? (
            <div className="flex items-center gap-2.5">
              <Price
                amount={compareAtPrice.amount}
                currencyCode={compareAtPrice.currencyCode}
                className="-mt-2 opacity-50 line-through"
              />
              <Price
                amount={rightPrice.amount}
                currencyCode={rightPrice.currencyCode}
                className="-mt-2 text-red-500"
              />
            </div>
          ) : (
            <Price
              amount={rightPrice.amount}
              currencyCode={rightPrice.currencyCode}
              className='-mt-2'
            />
          )}

          {/* klarna */}
          <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-100">
            <img src="/img/icon/klarna.svg" alt="" className="h-8 w-auto shrink-0" />
            <div className="text-body-1_2 flex items-start flex-wrap">
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
            setCompareAtPriceBasedOnChoosenVariant={setCompareAtPriceBasedOnChoosenVariant}
          />

          {/* cta and reviews */}
          <div className="w-full mt-3 flex flex-col gap-3">
            <AddToCart variants={product.variants} availableForSale={product.availableForSale} closeModalOnAddToCart={closeModalOnAddToCart} />
            
            {reviews?.length > 0 && (
              <div className="flex items-center gap-2.5 p-2">
                <div className="flex">
                  <ProductStars averageScore={Number(averageScore)} />
                </div>
                <button 
                  className="button-text"
                  onClick={() => {
                    // scroll to reviews-wrapper id
                    const element = document.getElementById('reviews-wrapper');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >Leggi {reviews?.length || 0} recensioni</button>
              </div>
            )}
          </div>
        </div>

        {/* accordion - decirptions of the product */}
        {showAccordion && (
          <Suspense>
            <ProductAccrodion product={product} />
          </Suspense>
        )}
      </div>
    </>
  );
}
