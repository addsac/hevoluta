'use client';

import { AnimatePresence } from 'framer-motion';
import { Product } from 'lib/shopify/types';
import { useState } from 'react';
import ModalCenter from '../modal-center';

export default function CreateReview({
  isOpen = false,
  closeModal = null,
  product = null,
}: {
  isOpen: boolean;
  closeModal: () => void;
  product: Product;
}) {
  const [stars, setStars] = useState(5);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const [loading, setLoading] = useState(false);

  const createReviews = async () => {
    setLoading(true);

    const url = `https://api.yotpo.com/v1/widget/reviews`;
    const requestBody = {
      appkey: 'mKh4HnWxTbkF02FL1KB2CtTLltAYgqcJ711mzIil',
      sku: Number(product.id.replace('gid://shopify/Product/', '')),
      product_title: product.title,
      product_url: `https://hevoluta.com/products/${product.handle}`,
      display_name: name,
      email,
      review_content: text,
      review_title: '-',
      review_score: stars,
    };

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      })
        .then(res => res.json())

      console.log(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <ModalCenter closeModal={closeModal}>
            {/* titles */}
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-2.5">
                <p className="text-title-4"> Scrivi una recensione </p>
                <p className="opacity-50">Prodotto: {product.title} </p>
              </div>

              <button
                className="button-close-modal shrink-0"
                aria-label="Close"
                onClick={() => closeModal()}
              >
                <img src="/img/icon/close.svg" alt="" className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-col items-start gap-8">
              {/* stars */}
              <div className="flex w-full">
                <button onClick={() => setStars(1)} className={stars >= 1 ? '' : 'opacity-40'}>
                  <img src="/img/icon/star.svg" alt="" className="-ml-2 h-10 w-10" />
                </button>
                <button onClick={() => setStars(2)} className={stars >= 2 ? '' : 'opacity-40'}>
                  <img src="/img/icon/star.svg" alt="" className="-ml-2 h-10 w-10" />
                </button>
                <button onClick={() => setStars(3)} className={stars >= 3 ? '' : 'opacity-40'}>
                  <img src="/img/icon/star.svg" alt="" className="-ml-2 h-10 w-10" />
                </button>
                <button onClick={() => setStars(4)} className={stars >= 4 ? '' : 'opacity-40'}>
                  <img src="/img/icon/star.svg" alt="" className="-ml-2 h-10 w-10" />
                </button>
                <button onClick={() => setStars(5)} className={stars >= 5 ? '' : 'opacity-40'}>
                  <img src="/img/icon/star.svg" alt="" className="-ml-2 h-10 w-10" />
                </button>
              </div>

              <div className="flex w-full flex-col items-start gap-2.5">
                <p> Il tuo nome: </p>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-base w-full"
                />
              </div>

              <div className="flex w-full flex-col items-start gap-2.5">
                <p> La tua email: </p>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-base w-full"
                />
              </div>

              {/* text */}
              <div className="flex w-full flex-col items-start gap-2.5">
                <p> Il tuo messaggio: </p>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="textarea-base w-full"
                />
              </div>

              {/* confirm or error messages */}
              {/* ... */}

              <button 
                className="button-primary-base"
                onClick={() => createReviews()}
                disabled={loading}
              >
                {loading ? 'Invio in corso...' : 'Invia recensione'}
              </button>
            </div>
          </ModalCenter>
        )}
      </AnimatePresence>
    </>
  );
}
