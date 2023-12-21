'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function ProductCard({ item = null } : { item: any }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <Link 
            href={`/product/${item.handle}`}
            className="relative w-full lg:w-1/2 flex flex-col gap-6 cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* black description visible on hover */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div 
                        className="absolute top-5 right-5 left-5 p-5 bg-black text-white z-5 font"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                        {item?.description}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex items-center justify-center py-5 bg-gradient-to-b from-gray-100 to-gray-100/0 group-hover:ring-1 group-hover:ring-black">
                <img 
                    src={item?.images[0]?.url}
                    alt="product name 1"
                    className="h-[300px] lg:h-[400px] w-auto group-hover:opacity-0 group-hover:h-0"
                />
                <img 
                    src={item?.images[1]?.url}
                    alt="product name 2"
                    className="w-auto h-0 opacity-0 group-hover:opacity-100 group-hover:h-[300px] lg:group-hover:h-[400px]"
                />
            </div>
            <div className="flex flex-col gap-4">
                <p> {item?.title} </p>
                <div className="opacity-50 -mt-1.5"> 
                    {item?.collections.edges?.map((edge, index) => (
                        <p key={'product-collection-'+index}>
                            {edge?.node?.title}
                        </p>
                    ) )}
                </div>
                <p className="font-mono font-normal"> 
                    {Number(item?.priceRange?.minVariantPrice?.amount).toFixed(0)} 
                    {item?.priceRange?.minVariantPrice?.currencyCode == 'EUR' ? '€' : ''} 
                </p>
            </div>
        </Link>
    )
}