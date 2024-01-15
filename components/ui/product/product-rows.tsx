'use client'

import { useEffect, useState } from "react";
import ProductCard from "./product-card";

export default function ProductRow({ items = [] } : { items: any[] }) {
    const [array, setArray] = useState([])

    useEffect(() => {
        if (!items) return
        // divide by 2 the items in the array
        const array = []

        for (let i = 0; i < items.length; i += 2) {
            array.push(items.slice(i, i + 2))
        }

        setArray(array)
    }, [items])

    return (
        <>
            {array.map((item, index) => (
                <div 
                    key={'product-row-' + index}
                    className="w-full flex flex-col lg:flex-row gap-16 lg:gap-2.5" 
                    /* initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: 'easeOut', duration: 0.15, delay: 0.15 }}  */
                >
                    {item.map((item, index) => (
                        <ProductCard 
                            key={index}
                            item={item}
                        />
                    ))}
                </div>
            ))}
        </>
    )
}
