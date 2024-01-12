'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function BlackStripe({ announcements }: { announcements: any }) {
  const goToNewsletterForm = () => {
    const input = document.getElementById('email-newsletter')
    setTimeout(() => input?.focus(), 100)
  }

  const [array, setArray] = useState([])

  useEffect(() => {
    const array = []
    // mapping announcements and adding prop type to each announcement
    // can be: 'text', 'link', 'newsletter', 'delivery'
    announcements.map((announcement) => {
      let target = 'text' // default

      announcement.fields.map((field) => {
        if (field.key === 'link' && field.value !== '') {
          target = 'link'
        }
        else if (field.key === 'target' && field.value === 'Newsletter') {
          target = 'newsletter'
        }
        else if (field.key === 'target' && field.value === 'Delivery') {
          target = 'delivery'
        }
      })

      // formatting the announcement
      const text = announcement.fields.map((field) => {
        if (field.key === 'testo') {
          return field
        }
      }).filter((field) => field !== undefined)[0]?.value || ''

      const link = announcement.fields.map((field) => {
        if (field.key === 'link') {
          return field
        }
      }).filter((field) => field !== undefined)[0]?.value || ''

      const newsletter = announcement.fields.map((field) => {
        if (field.key === 'Newsletter') {
          return field
        }
      }).filter((field) => field !== undefined)[0]?.value || ''

      // adding announcement to array
      array.push({
        text,
        link,
        newsletter,
        target: target,
      })
    })

    // setting announcements to array
    setArray(array)
  }, [])


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
          {array.map((announcement, index) => (
            <SwiperSlide>
              {(announcement.target === 'text' || announcement.target === 'delivery') && (
                <button className="whitespace-nowrap font-mono text-12 font-medium">
                  {announcement.text}
                </button>
              )}
              {announcement.target === 'link' && (
                <Link 
                  href={announcement.link} 
                  className="whitespace-nowrap font-mono text-12 font-medium hover:underline"
                >
                    {announcement.text}
                </Link>
              )}
              {announcement.target === 'newsletter' && (
                <button 
                  className='whitespace-nowrap font-mono text-12 font-medium hover:underline'
                  onClick={() => goToNewsletterForm()}
                >
                  {announcement.text}
                </button>
              )}
            </SwiperSlide>
          ))}
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
