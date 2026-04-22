'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

function parseFaqContent(value: string) {
  const normalized = value.replace(/\r\n/g, '\n').trim();
  if (!normalized) return [];

  const questionBlocks = normalized
    .split(/\n(?=\d+\.\s)/)
    .map((block) => block.trim())
    .filter(Boolean);

  return questionBlocks
    .map((block) => {
      const match = block.match(/^(\d+\.\s*[^\n]+)\n?([\s\S]*)$/);
      if (!match) return null;

      const question = match[1].trim();
      const answer = match[2].trim();
      return { question, answer };
    })
    .filter((item): item is { question: string; answer: string } => Boolean(item));
}

export default function ProductDetails({ product = null }: { product: any }) {
  const [openText, setOpenText] = useState(0);
  const faqValue = product?.metafields.find((metafield: any) => metafield?.key == 'storia')?.value?.trim() ?? '';
  const faqItems = parseFaqContent(faqValue);

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
            Domande frequenti
          </button>
          <button
            className={`${
              openText == 1 ? 'button-cips-product-active' : 'button-cips-product-inactive'
            }`}
            onClick={() => setOpenText(1)}
          >
            A chi è rivolto
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: 'linear', duration: 0.2 }}
              className="lg:pr-20"
            >
              {faqItems.length > 0 ? (
                <div className="flex flex-col gap-8">
                  {faqItems.map((item, index) => (
                    <div key={`${item.question}-${index}`} className="flex flex-col gap-2">
                      <p className="text-title-6 lg:text-body-2 text-white">{item.question}</p>
                      <p className="text-title-6 lg:text-body-2 text-white opacity-[0.6] whitespace-pre-line">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-title-6 lg:text-body-2 text-white whitespace-pre-line">{faqValue}</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="popLayout">
          {openText == 1 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: 'linear', duration: 0.2 }}
              className="text-title-6 lg:text-body-2 text-white lg:pr-20 whitespace-pre-line"
            >
              {product?.metafields.find((metafield: any) => metafield?.key == 'indicazioni_prodotto')?.value?.trim()}
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
              className="text-title-6 lg:text-body-2 text-white lg:pr-20 whitespace-pre-line"
            >
              {product?.metafields.find((metafield: any) => metafield?.key == 'cura_e_mantenimento')?.value?.trim()}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <div className="hidden lg:flex w-2/12 flex-col gap-16"></div>
    </div>
  );
}
