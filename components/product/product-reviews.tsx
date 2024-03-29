'use client';

import CreateReview from 'components/ui/product/create-review';
import { Review } from 'lib/judgeme/types';
import { Product } from 'lib/shopify/types';
import { PublishedDateFormatted } from 'lib/utils';
import { useState } from 'react';
import Balancer from 'react-wrap-balancer';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ProductReviews({
  product,
  reviews = [],
}: {
  product: Product;
  reviews: Review[];
}) {
  const [openModalCrateReview, setOpenModalCreateReview] = useState(false);
  const closeModalCreateReviw = () => setOpenModalCreateReview(false);

  return (
    <>
      {/* modals */}
      <CreateReview
        isOpen={openModalCrateReview}
        closeModal={closeModalCreateReviw}
        product={product}
      />

      <div
        id="reviews-wrapper"
        className="flex w-screen flex-col items-center justify-center gap-20 bg-gray-100 px-5 py-[120px]"
      >
        {/* title */}
        <div className="flex flex-col gap-6 text-center">
          <p className="text-title-4">Recensioni del prodotto</p>
          <p className="opacity-70">Leggi le testimonianze per questo prodotto</p>
        </div>

        {/* empty state review */}
        {reviews.length == 0 && (
          <p className="text-body-1 mx-10 border border-gray-200 bg-white p-10 text-center opacity-50">
            Non ci sono ancora recensioni per questo prodotto.
          </p>
        )}

        {/* desktop */}
        {reviews.length > 0 && (
          <div className="relative hidden w-full cursor-grab lg:block">
            <Swiper
              slidesPerView={3}
              grid={{
                rows: 1
              }}
              centeredSlides={reviews.length < 3 ? true : false}
              spaceBetween={10}
              modules={[Grid, Navigation]}
              className="mySwiper"
              navigation={{
                prevEl: '#nav-button-reviews-sx',
                nextEl: '#nav-button-reviews-dx'
              }}
              style={{
                width: '100%',
                height: '100%',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={'review-card-desktop-' + index}>
                  <div className="flex flex-col items-center justify-center gap-6 bg-white p-10">
                    {/* author */}
                    <p className="text-title-6 opacity-60">{review.user.display_name}</p>
                    {/* description */}
                    <div className="text-body-1 text-center">
                      <Balancer>
                        {review.content.length > 800 ? (
                          <>
                            {review.content.slice(0, 800)}...

                            <button
                              id={'review-desktop-button-'+index}
                              className="button-text opacity-50 inline ml-2"
                              onClick={() => {
                                document.getElementById('review-desktop-' + index).classList.remove('hidden');
                                document.getElementById('review-desktop-button-' + index).classList.add('hidden');
                              }}
                            >
                              Mostra di più
                            </button>

                            <p id={'review-desktop-' + index} className='hidden'>
                              {review.content.slice(800)}
                            </p>
                          </>
                        ) : review.content}
                      </Balancer>
                    </div>
                    {/* date */}
                    <p className="text-title-7 opacity-60">
                      <PublishedDateFormatted published={review.created_at} />
                    </p>
                    {/* score */}
                    <div className="flex">
                      {Array(review.score)
                        .fill(0)
                        .map((_, index) => (
                          <img
                            key={'star-' + index}
                            src="/img/icon/star.svg"
                            alt=""
                            className="h-6 w-6"
                          />
                        ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* mobile */}
        {reviews.length > 0 && (
          <div className="w-full cursor-grab lg:hidden">
            <Swiper
              slidesPerView={1}
              grid={{
                rows: 1
              }}
              spaceBetween={10}
              modules={[Grid, Navigation]}
              className="mySwiper"
              navigation={{
                prevEl: '#nav-button-reviews-sx',
                nextEl: '#nav-button-reviews-dx'
              }}
              style={{
                width: '100%',
                height: '100%',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={'review-card-mobile-' + index}>
                  <div className="flex flex-col items-center justify-center gap-6 bg-white p-10">
                    {/* author */}
                    <p className="text-title-6 opacity-60">{review.user.display_name}</p>
                    {/* description */}
                    <div className="text-body-1 text-center">
                      <Balancer>
                        {review.content.length > 800 ? (
                          <>
                            {review.content.slice(0, 800)}...

                            <button
                              id={'review-mobile-button-'+index}
                              className="button-text opacity-50 inline ml-2"
                              onClick={() => {
                                document.getElementById('review-mobile-' + index).classList.remove('hidden');
                                document.getElementById('review-mobile-button-' + index).classList.add('hidden');
                              }}
                            >
                              Mostra di più
                            </button>

                            <p id={'review-mobile-' + index} className='hidden'>
                              {review.content.slice(800)}
                            </p>
                          </>
                        ) : review.content}
                      </Balancer>
                    </div>
                    {/* date */}
                    <p className="text-title-7 opacity-60">
                      <PublishedDateFormatted published={review.created_at} />
                    </p>
                    {/* rating */}
                    <div className="flex">
                      {Array(review.score)
                        .fill(0)
                        .map((_, index) => (
                          <img
                            key={'star-' + index}
                            src="/img/icon/star.svg"
                            alt=""
                            className="h-6 w-6"
                          />
                        ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {reviews.length > 0 && (
          <div className='flex items-center justify-center gap-4 -mb-5'>
            {/* arrows to navigate - left */}
            <button id="nav-button-reviews-sx" className='w-12 h-12 border border-gray-200 text-black/50 flex items-center justify-center bg-white/90 backdrop-blur-md rounded-full'>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.25 8.75L9.75 12L13.25 15.25"></path>
              </svg>
            </button>
            {/* arrows to navigate - left */}
            <button id="nav-button-reviews-dx" className='w-12 h-12 border border-gray-200 text-black/50 flex items-center justify-center bg-white/90 backdrop-blur-md rounded-full'>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.75 8.75L14.25 12L10.75 15.25"></path>
              </svg>
            </button>
          </div>
        )}

        <button className="button-primary-base" onClick={() => setOpenModalCreateReview(true)}>
          Scrivi una recensione
        </button>
      </div>
    </>
  );
}
