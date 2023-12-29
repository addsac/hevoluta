'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Balancer from 'react-wrap-balancer';

export default function ProductDetails({ product = null }: { product: any }) {
  const [openText, setOpenText] = useState(0);

  return (
    <div className="w-screen flex gap-2.5 bg-black px-5 py-[120px]">
      <div className="hidden lg:flex w-2/12 flex-col gap-16"></div>
      <div className="w-full lg:w-8/12 flex flex-col gap-16 lg:gap-20">
        <div className="flex flex-wrap gap-x-8 gap-y-6">
          <button
            className={`${
              openText == 0 ? 'button-cips-product-active' : 'button-cips-product-inactive'
            }`}
            onClick={() => setOpenText(0)}
          >
            Storia del prodotto
          </button>
          <button
            className={`${
              openText == 1 ? 'button-cips-product-active' : 'button-cips-product-inactive'
            }`}
            onClick={() => setOpenText(1)}
          >
            Indicazioni
          </button>
          <button
            className={`${
              openText == 2 ? 'button-cips-product-active' : 'button-cips-product-inactive'
            }`}
            onClick={() => setOpenText(2)}
          >
            Cura e mantenimento
          </button>
        </div>

        <AnimatePresence mode="popLayout">
          {openText == 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: 'linear', duration: 0.2 }}
              className="text-title-4_170 lg:text-body-2 text-white lg:pr-20"
            >
              {product?.metafields.find((metafield: any) => metafield?.key == 'storia')?.value}
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence mode="popLayout">
          {openText == 1 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: 'linear', duration: 0.2 }}
              className="text-title-4_170 lg:text-body-2 text-white lg:pr-20"
            >
              {product?.metafields.find((metafield: any) => metafield?.key == 'indicazioni_prodotto')?.value}
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence mode="popLayout">
          {openText == 2 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: 'linear', duration: 0.2 }}
              className="text-title-4_170 lg:text-body-2 text-white lg:pr-20"
            >
              {product?.metafields.find((metafield: any) => metafield?.key == 'cura_e_mantenimento')?.value}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <div className="hidden lg:flex w-2/12 flex-col gap-16"></div>
    </div>
  );
}
