'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function BlackStripe({ announcements }: { announcements: any }) {
  const goToNewsletterForm = () => {
    const input = document.getElementById('email-newsletter')
    setTimeout(() => input?.focus(), 100)
  }

  const [array, setArray] = useState([])
  const [deliveryAnnouncement, setDeliveryAnnouncement] = useState(null)
  const [chatAnnouncement, setChatAnnouncement] = useState(null)

  const findFirstDeliveryAndChatAnnouncements = (array) => {
    array.map((announcement) => {
      if (announcement.target === 'delivery') {
        setDeliveryAnnouncement(announcement)
        return
      }
    })

    array.map((announcement) => {
      if (announcement.target === 'link' && announcement.link === 'https://www.hevoluta.com/chat') {
        setChatAnnouncement(announcement)
        return
      }
    })
  }

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
        id: announcement.id,
        text,
        link,
        newsletter,
        target: target,
      })
    })

    // setting announcements to array
    setArray(array)
    findFirstDeliveryAndChatAnnouncements(array)
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
          {array.map((announcement) => (
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
      <div className="hidden lg:flex items-center justify-center gap-2.5 bg-black px-5 py-1.5 text-white">
        {/* slider go back button */}
        <button className="swiper-button-prev-announcement-bar text-white">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.25 8.75L9.75 12L13.25 15.25"></path>
          </svg>
        </button>

        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          navigation={{
            nextEl: '.swiper-button-next-announcement-bar',
            prevEl: '.swiper-button-prev-announcement-bar',
          }}
          className="mySwiper text-center"
        >
          {array.map((announcement) => (
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

        {/* slider go next button */}
        <button className="swiper-button-next-announcement-bar text-white">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.75 8.75L14.25 12L10.75 15.25"></path>
          </svg>
        </button>
      </div>
    </>
  );
}
