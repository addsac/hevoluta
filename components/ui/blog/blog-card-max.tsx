'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function BlogCardMax({ blogs = null } : { blogs: any }){
    
    useEffect(() => {
        console.log(blogs);
    }, [])

    return (
        <Link 
            className="w-full flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-2.5 cursor-pointer group"
            href="/blog/1"
        >
            {/* texts */}
            <div className="flex flex-col items-start gap-6 lg:pr-20">
                <p className="opacity-50">
                    Bellezza
                </p>
                <p className="text-title-3 group-hover:underline">
                    Occhiali a maschera, Il trend inaspettato dell’autunno/inverno 2023
                </p>
                <button className="button-primary-base">
                    Leggi l'articolo
                </button>
            </div>

            {/* image */}
            <div className="w-full h-[400px] flex flex-col items-start bg-black">
                <Image
                    src={'/img/blog/background-1.jpg'}
                    alt=""
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover opacity-80 select-none"
                    draggable={false}
                />
            </div>
        </Link>
    )
}