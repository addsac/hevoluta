'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function ProductAccordion({ product = null } : { product: any }) {
  const [isOpenChev1, setIsOpenChev1] = useState(false);
  const [isOpenChev2, setIsOpenChev2] = useState(false);
  const [isOpenChev3, setIsOpenChev3] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        className="flex items-start gap-4 border-y border-gray-200 py-6 cursor-pointer group"
        onClick={() => setIsOpenChev1(!isOpenChev1)}
      >
        <div className="flex w-full flex-col items-start gap-5 selection:bg-transparent">
          <p className="border-b border-transparent group-hover:border-black"> Benefici </p>

          <AnimatePresence>
            {isOpenChev1 && (
                <motion.p 
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 0.5, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    transition={{ ease: 'easeOut', duration: 0.1 }}
                    className="text-13 leading-[170%]"
                >
                    {product?.metafields.find((metafield: any) => metafield?.key == 'benefici')?.value}
                </motion.p>
            )}
          </AnimatePresence>
        </div>

        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          className={`${isOpenChev1 ? 'rotate-180' : '0'} transorm duration-200 ease-out opacity-40`}
        >
          <path
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M15.25 10.75L12 14.25L8.75 10.75"
          ></path>
        </svg>
      </div>

      <div
        className="flex items-start gap-4 border-b border-gray-200 py-6 cursor-pointer group"
        onClick={() => setIsOpenChev2(!isOpenChev2)}
      >
        <div className="flex w-full flex-col items-start gap-5 selection:bg-transparent">
          <p className="border-b border-transparent group-hover:border-black"> Ingredienti </p>

          <AnimatePresence>
            {isOpenChev2 && (
                <motion.p 
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 0.5, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    transition={{ ease: 'easeOut', duration: 0.1 }}
                    className="text-13 leading-[170%]"
                >
                    {product?.metafields.find((metafield: any) => metafield?.key == 'ingredienti')?.value}
                </motion.p>
            )}
          </AnimatePresence>
        </div>

        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          className={`${isOpenChev2 ? 'rotate-180' : '0'} transorm duration-200 ease-out opacity-40`}
        >
          <path
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M15.25 10.75L12 14.25L8.75 10.75"
          ></path>
        </svg>
      </div>

      <div
        className="flex items-start gap-4 border-b border-gray-200 py-6 cursor-pointer group"
        onClick={() => setIsOpenChev3(!isOpenChev3)}
      >
        <div className="flex w-full flex-col items-start gap-5 selection:bg-transparent">
          <p className="border-b border-transparent group-hover:border-black"> Modalità d'uso </p>

          <AnimatePresence>
            {isOpenChev3 && (
                <motion.p 
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 0.5, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    transition={{ ease: 'easeOut', duration: 0.1 }}
                    className="text-13 leading-[170%]"
                >
                    {product?.metafields.find((metafield: any) => metafield?.key == 'modalita_uso')?.value}
                </motion.p>
            )}
          </AnimatePresence>
        </div>

        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          className={`${isOpenChev3 ? 'rotate-180' : '0'} transorm duration-200 ease-out opacity-40`}
        >
          <path
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M15.25 10.75L12 14.25L8.75 10.75"
          ></path>
        </svg>
      </div>
    </div>
  );
}
