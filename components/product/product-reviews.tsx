'use client';

import CreateReview from 'components/ui/product/create-review';
import { Product } from 'lib/shopify/types';
import { useState } from 'react';
import Balancer from 'react-wrap-balancer';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ProductReviews({ product }: { product: Product }) {
  const [openModalCrateReview, setOpenModalCreateReview] = useState(false)
  const closeModalCreateReviw = () => setOpenModalCreateReview(false)

  return (
    <>
      {/* modals */}
      <CreateReview 
        isOpen={openModalCrateReview}
        closeModal={closeModalCreateReviw}
        product={product}
      />
      
      <div id="reviews-wrapper" className="flex w-screen flex-col items-center justify-center gap-20 bg-gray-100 px-5 py-20">
        {/* title */}
        <div className="flex flex-col gap-6 text-center">
          <p className="text-title-4">Recensioni del prodotto</p>
          <p className="opacity-70">Leggi le testimonianze per questo prodotto</p>
        </div>

        {/* desktop */}
        <div className="hidden w-full lg:block cursor-grab">
          <Swiper
            slidesPerView={3}
            grid={{
              rows: 1
            }}
            spaceBetween={10}
            modules={[Grid]}
            className="mySwiper"
            style={{
              width: '100%',
              height: '100%',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            {[1, 2, 3, 4, 5].map((value, index) => (
              <SwiperSlide key={'review-card-desktop-' + index}>
                <div className="flex flex-col items-center justify-center gap-6 bg-white p-10">
                  {/* author */}
                  <p className="text-title-6 opacity-60">Claudia M.</p>
                  {/* description */}
                  <p className="text-body-1 text-center">
                    <Balancer>
                      Crema dall’ottima consistenza, che si assorbe bene e protegge sia dal sole che
                      dai raggi nocivi del computer.Da quando la uso il colorito della mia pelle è
                      molto più uniforme.Il profumo non mi fa impazzire, ma è una caratteristica
                      comune a molte creme solari.
                    </Balancer>
                  </p>
                  {/* date */}
                  <p className="text-title-7 opacity-60">Settembre 28, 2021</p>
                  {/* rating */}
                  <div className="flex">
                    <img src="/img/icon/star.svg" alt="" className="h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* mobile */}
        <div className="w-full lg:hidden cursor-grab">
          <Swiper
            slidesPerView={1}
            grid={{
              rows: 1
            }}
            spaceBetween={10}
            modules={[Grid]}
            className="mySwiper"
            style={{
              width: '100%',
              height: '100%',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            {[1, 2, 3, 4, 5].map((value, index) => (
              <SwiperSlide key={'review-card-mobile-' + index}>
                <div className="flex flex-col items-center justify-center gap-6 bg-white p-10">
                  {/* author */}
                  <p className="text-title-6 opacity-60">Claudia M.</p>
                  {/* description */}
                  <p className="text-body-1 text-center">
                    <Balancer>
                      Crema dall’ottima consistenza, che si assorbe bene e protegge sia dal sole che
                      dai raggi nocivi del computer.Da quando la uso il colorito della mia pelle è
                      molto più uniforme.Il profumo non mi fa impazzire, ma è una caratteristica
                      comune a molte creme solari.
                    </Balancer>
                  </p>
                  {/* date */}
                  <p className="text-title-7 opacity-60">Settembre 28, 2021</p>
                  {/* rating */}
                  <div className="flex">
                    <img src="/img/icon/star.svg" alt="" className="h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button
          className="button-primary-base"
          onClick={() => setOpenModalCreateReview(true)}
        >
            Scrivi una recensione
        </button>
      </div>
      </>
  );
}
