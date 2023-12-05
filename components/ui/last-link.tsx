'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function LastLink(){
    const [emailNewsletter, setEmailNewsletter] = useState('')
    const [checkNewsletter, setCheckNewsletter] = useState(false)

    return (
        <div className="grid grid-cols-12 gap-5 px-5 py-[120px]">
            {/* newsletter */}
            <div className="relative col-span-8 h-[400px] border border-black bg-gradient-gray overflow-clip">
                <Image
                    src="/img/background/background-3.png"
                    alt=""
                    width={400}
                    height={400}
                    className="absolute right-0 top-0 bottom-0 w-auto select-none"
                    draggable={false}
                />
                <div className="absolute bottom-5 left-5 right-5 flex flex-col items-start gap-5">
                    <p className="text-title-4">
                        Ottieni il 15% di sconto sul tuo primo ordine.
                    </p>
                    <p className="opacity-70 -mt-3">
                        Iscriviti: riceverai il coupon di benvenuto, offerte riservate e novità.
                    </p>
                    <input
                        type="text"
                        name="email"
                        value={emailNewsletter}
                        onChange={(e) => setEmailNewsletter(e.target.value)}
                        placeholder="nome@esemio.com"
                        className="input-base max-w-[400px] w-full"
                    />

                    <div className="flex items-center justify-start gap-2">
                        <input
                            type="checkbox"
                            checked={checkNewsletter}
                            onChange={() => setCheckNewsletter(!checkNewsletter)}
                            id='newsletter'
                            className="checkbox-base shrink-0"
                        />
                        <label
                            htmlFor="newsletter"    
                        >
                            <p className="inline">
                                Accetto i termini e condizioni.
                            </p>
                        </label>
                    </div>
                    <button className="button-primary-base">
                    Iscriviti alla newsletter
                    </button>
                </div>
            </div>
            
            {/* social */}
            <div className="relative col-span-4 h-[400px] bg-black">
                <Image
                    src="/img/background/background-2.jpg"
                    alt=""
                    width={400}
                    height={400}
                    className="w-full h-full object-cover opacity-60 select-none"
                    draggable={false}
                />

                <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-5">
                    <p className="text-title-4 text-white">
                        Seguici sui social
                    </p>
                    <div className="flex gap-5">
                        <Link 
                            href="https://instagram.com/hevoluta"
                            target='_blank'
                            rel='noreferrer noopener'
                            className="bg-black w-8 h-8 flex items-center justify-center"
                        >
                            <img src="/img/social/social-tiktok.png" alt="" className="w-auto h-5" />
                        </Link>
                        <Link 
                            href="https://instagram.com/hevoluta"
                            target='_blank'
                            rel='noreferrer noopener'
                            className="bg-black w-8 h-8 flex items-center justify-center"
                        >
                            <img src="/img/social/social-instagram.png" alt="" className="w-auto h-6" />
                        </Link>
                        <Link 
                            href="https://instagram.com/hevoluta"
                            target='_blank'
                            rel='noreferrer noopener'
                            className="bg-black w-8 h-8 flex items-center justify-center"
                        >
                            <img src="/img/social/social-facebook.png" alt="" className="w-auto h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
