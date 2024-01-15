'use client'

import Price from 'components/price'
import { Gallery } from 'components/product/gallery'
import { ProductDescription } from 'components/product/product-description'
import { AnimatePresence, motion } from 'framer-motion'
import { Image } from 'lib/shopify/types'
import Link from 'next/link'
import { Suspense, useState } from 'react'
import ModalCenter from '../modal-center'

export default function ProductCard({ item = null } : { item: any }) {
    const [isHovered, setIsHovered] = useState(false)
    const [infoVisibleMobile, setInfoVisibleMobile] = useState(false)

    const rightPrice = {
        amount: item.priceRange.minVariantPrice.amount,
        currencyCode: item.priceRange.minVariantPrice.currencyCode
    }
    const compareAtPrice = {
        amount: item.variants[0].compareAtPrice?.amount,
        currencyCode: item.variants[0].compareAtPrice?.currencyCode
    }

    // modal add to cart rapid - mobile
    const [modalRapidAddToCart, setModalRapidAddToCart] = useState(false)

    return (
        <>
            {/* modal rapid add to cart - mobile */}
            <AnimatePresence>
                {modalRapidAddToCart && (
                    <ModalCenter closeModal={setModalRapidAddToCart}>
                        <div className="flex flex-col gap-20">
                            <Suspense>
                                <Gallery
                                    images={item.images.map((image: Image) => ({
                                    src: image.url,
                                    altText: image.altText
                                    }))}
                                />
                            </Suspense>

                            <Suspense>
                                <ProductDescription product={item} reviews={[]} reviewsData={null} showAccordion={false} closeModalOnAddToCart={() => setModalRapidAddToCart(false)} />
                            </Suspense>
                        </div>
                    </ModalCenter>
                )}
            </AnimatePresence>
        
            <Link 
                href={`/products/${item?.handle}`}
                className="relative w-full lg:w-1/2 flex flex-col gap-6 cursor-pointer group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* black description visible on hover */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div 
                            className="hidden lg:block absolute top-5 right-5 left-5 p-5 bg-white/50 backdrop-blur-[28px] border border-black z-10 font"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                        >
                            {item?.description.trim()}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* black description visible on click icon - mobile */}
                <AnimatePresence>
                    {infoVisibleMobile && (
                        <motion.div 
                            className="lg:hidden absolute top-5 right-5 left-5 p-5 bg-white/50 backdrop-blur-[28px] border border-black z-10 font"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                        >
                            {item?.description.trim()}
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="relative">
                    <div className="flex items-center justify-center py-5 bg-gradient-to-b from-gray-100 to-gray-100/0 group-hover:ring-1 group-hover:ring-black">
                        {item?.images[0] ? (
                            <img 
                                src={item?.images[0]?.url}
                                alt={item?.images[0]?.altText}
                                className={`
                                    "min-h-[400px] max-h-[400px] w-auto 
                                    ${item?.images[1] ? 'group-hover:opacity-0 group-hover:h-0' : ''}
                                `}
                            />
                        ) : (
                            <div className="min-h-[400px] max-h-[400px] w-auto flex items-center justify-center text-center opacity-50">
                                <p>
                                    Foto non disponibile
                                </p>
                            </div>
                        )}

                        {item?.images[1] && (
                            <img 
                                src={item?.images[1]?.url}
                                alt={item?.images[1]?.altText}
                                className="w-auto h-0 opacity-0 group-hover:opacity-100 group-hover:min-h-[400px] max-h-[400px]"
                            />
                        )}
                    </div>

                    {/* button product info mobile */}
                    <button 
                        className="absolute lg:hidden bottom-5 right-5 rounded-full hover:bg-gray-100 text-black h-10 w-10 flex items-center justify-center"
                        onClick={(e) => {
                            e.preventDefault()
                            setInfoVisibleMobile(!infoVisibleMobile)
                        }}
                    >
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13V15"></path>
                            <circle cx="12" cy="9" r="1" fill="currentColor"></circle>
                            <circle cx="12" cy="12" r="7.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle>
                        </svg>
                    </button>

                    {/* button add to cart */}
                    <button
                        className="absolute lg:hidden bottom-[60px] right-5 rounded-full hover:bg-gray-100 text-black h-10 w-10 flex items-center justify-center"
                        onClick={(e) => {
                            e.preventDefault()
                            setModalRapidAddToCart(true)
                        }}
                    >
                        <img 
                            src="/img/icon/cart.svg"
                            alt=""
                            className="w-5 h-auto"
                        />
                    </button>
                </div>

                <div className="flex flex-col gap-4">
                    <p> {item?.title} </p>
                    <div className="opacity-50 -mt-1.5"> 
                        {item?.collections.edges?.map((edge, index) => (
                            <p 
                                key={'product-collection-'+index}
                                className="inline"
                            >
                                {edge?.node?.title}
                                {index < item?.collections.edges.length - 1 && <>,&nbsp;&nbsp;</>}
                            </p>
                        ) )}
                    </div>
                    {/* <p className="font-mono font-normal"> 
                        {Number(item?.priceRange?.minVariantPrice?.amount).toFixed(0)} 
                        {item?.priceRange?.minVariantPrice?.currencyCode == 'EUR' ? '€' : ''} 
                    </p> */}
                    {item.variants[0]?.compareAtPrice?.amount != undefined ? (
                        <div className="flex items-center gap-2.5">
                        <Price
                            amount={compareAtPrice.amount}
                            currencyCode={compareAtPrice.currencyCode}
                            className="line-through"
                        />
                        <Price
                            amount={rightPrice.amount}
                            currencyCode={rightPrice.currencyCode}
                            className="text-red-500"
                        />
                        </div>
                    ) : (
                        <Price
                            amount={rightPrice.amount}
                            currencyCode={rightPrice.currencyCode}
                        />
                    )}
                </div>
            </Link>
        </>
    )
}