'use client';

import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function BlackStripe() {
  const goToNewsletterForm = () => {
    const input = document.getElementById('email-newsletter')
    setTimeout(() => input?.focus(), 100)
  }

  return (
    <>
      {/* black stripe - mobile */}
      <div className="w-full max-w-full flex-nowrap items-center justify-between gap-10 overflow-x-auto bg-black px-5 py-1.5 text-white lg:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          modules={[Autoplay]}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false
          }}
          className="mySwiper text-center"
          style={{
            width: '100%',
            height: '100%',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <SwiperSlide>
            <button className="whitespace-nowrap font-mono text-12 font-medium">
              Spedizione gratuita da 65€
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button 
              className='whitespace-nowrap font-mono text-12 font-medium hover:underline'
              onClick={() => goToNewsletterForm()}
            >
              Iscriviti per avere il 10% di sconto primo ordine
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <Link 
              href="/chat"
              className="whitespace-nowrap font-mono text-12 font-medium hover:underline"
            >
              Dubbi? Chatta con noi gratis
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* black stripe - desktop */}
      <div className="hidden w-full max-w-full flex-nowrap items-center justify-between gap-10 overflow-x-auto bg-black px-5 py-1.5 text-white lg:flex">
        <p className="whitespace-nowrap font-mono text-12 font-medium">
          Spedizione gratuita da 65€
        </p>
        <button 
          className="whitespace-nowrap font-mono text-12 font-medium hover:underline"
          onClick={() => goToNewsletterForm()}
        >
          Iscriviti per avere il 10% di sconto primo ordine
        </button>
        <Link
          href="/chat"
          className="whitespace-nowrap font-mono text-12 font-medium hover:underline"
        >
          Dubbi? Chatta con noi gratis
        </Link>
      </div>
    </>
  );
}
