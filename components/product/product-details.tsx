'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Balancer from 'react-wrap-balancer';

export default function ProductDetails({ product = null }: { product: any }) {
  const [openText, setOpenText] = useState(0);

  return (
    <div className="w-screen flex flex-col lg:flex-row gap-16 bg-black px-5 py-[120px] lg:gap-2.5">
      <div className="w-full flex flex-col gap-16">
        <div className="flex flex-wrap gap-8">
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
              className="text-body-1_170 lg:text-body-2 text-white lg:pr-20"
            >
              <Balancer>
                {product?.metafields.find((metafield: any) => metafield?.key == 'storia')?.value}
              </Balancer>
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
              className="text-body-1_170 lg:text-body-2 text-white lg:pr-20"
            >
              <Balancer>
                {product?.metafields.find((metafield: any) => metafield?.key == 'indicazioni')?.value}
              </Balancer>
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
              className="text-body-1_170 lg:text-body-2 text-white lg:pr-20"
            >
              <Balancer>
                {product?.metafields.find((metafield: any) => metafield?.key == 'mantenimento')?.value}
              </Balancer>
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <div className="w-full aspect-square bg-white"></div>
    </div>
  );
}
