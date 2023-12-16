'use client';

import { removeItem } from 'components/cart/actions';
import Price from 'components/price';
import Modal from 'components/ui/modal';
import { AnimatePresence } from 'framer-motion';
import { DEFAULT_OPTION } from 'lib/constants';
import type { Cart } from 'lib/shopify/types';
import { createUrl } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { EditItemQuantityButton } from './edit-item-quantity-button';

type MerchandiseSearchParams = {
  [key: string]: string;
};

export default function CartModal({ cart }: { cart: Cart | undefined }) {
  const [isOpen, setIsOpen] = useState(false);
  const quantityRef = useRef(cart?.totalQuantity);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  useEffect(() => {
    // Open cart modal when quantity changes.
    if (cart?.totalQuantity !== quantityRef.current) {
      // But only if it's not already open (quantity also changes when editing items in cart).
      if (!isOpen) {
        setIsOpen(true);
      }
  
      // Always update the quantity reference
      quantityRef.current = cart?.totalQuantity;
    }
  }, [isOpen, cart?.totalQuantity, quantityRef]);
  
  return (
    <div>
      <button 
        onClick={openCart}
        className="button-menu-cart"
        aria-label="Open cart" 
      > 
        <img 
          src="/img/icon/cart.svg"
          alt=""
          className="w-5 h-auto"
        />
        <p>
          {cart?.totalQuantity || 0}
        </p>
      </button>

      <AnimatePresence>
        {isOpen && (
          <Modal
            position='right'
            closeModal={closeCart}
          >
            {/* titles */}
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-2.5">
                <p className="text-title-4"> Carrello </p>
                <p className="opacity-50"> {cart?.totalQuantity} prodotti aggiunti </p>
              </div>

              <button   
                className="button-close-modal"
                aria-label="Close"
                onClick={() => closeCart()}
              >
                <img 
                  src="/img/icon/close.svg"
                  alt=""
                  className="w-6 h-6"
                />
              </button>
            </div>

            {/* products */}
            {!cart || cart.lines.length === 0 ? (
              <div className="py-8 w-full flex flex-col gap-4 items-center justify-center border border-gray-200">
                <img 
                  src="/img/icon/cart.svg"
                  alt=""
                  className="w-5 h-auto opacity-50"
                />
                <p className="text-center opacity-50">
                  Il tuo carrelo è vuoto.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-2.5">
                {/* product */}
                {cart.lines.map((item, i) => {
                  const merchandiseSearchParams = {} as MerchandiseSearchParams;

                  item.merchandise.selectedOptions.forEach(({ name, value }) => {
                    if (value !== DEFAULT_OPTION) {
                      merchandiseSearchParams[name.toLowerCase()] = value;
                    }
                  });

                  const merchandiseUrl = createUrl(
                    `/product/${item.merchandise.product.handle}`,
                    new URLSearchParams(merchandiseSearchParams)
                  );

                  return (
                    <div 
                      key={i}
                      className="w-full flex gap-4 p-2.5 border border-gray-200"
                    >
                      {/* img */}
                      <Link 
                        href={merchandiseUrl}
                        onClick={closeCart}
                        className="w-20 h-20 bg-gradient-gray"
                      >
                        {item.merchandise.product.featuredImage && (
                          <Image
                            className="h-full w-full object-cover"
                            width={64}
                            height={64}
                            alt={
                              item.merchandise.product.featuredImage.altText ||
                              item.merchandise.product.title
                            }
                            src={item.merchandise.product.featuredImage.url}
                          />
                        )}
                      </Link>
      
                      {/* texts */}
                      <div className="w-full flex flex-col items-start gap-5">
                        <div className="flex flex-col gap-2.5">
                          <p className="line-clamp-1">
                            {item.merchandise.product.title}
                          </p>
                          {item.merchandise.title !== DEFAULT_OPTION ? (
                            <p className="opacity-50 line-clamp-1">
                              {item.merchandise.title}
                            </p>
                          ) : null}
                        </div>
      
                        {/* ctas and price */}
                        <div className="flex justify-between items-center gap-4">
                          {/* ctas */}
                          <div className="w-full flex justify-start items-center gap-2.5">
                            <EditItemQuantityButton item={item} type="minus" />
                            <p> {item.quantity} </p>
                            <EditItemQuantityButton item={item} type="plus" />
                          </div>

                          <Price
                            amount={item.cost.totalAmount.amount}
                            currencyCode={item.cost.totalAmount.currencyCode}
                          />
                        </div>

                        {/* remove product */}
                        <button
                          className="button-text opacity-50"
                          onClick={() => removeItem(null, item.id)}
                        >
                          Rimuovi
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between gap-2.5">
                  <p className="opacity-50">Tempo di spedizione:</p>
                  <p className="opacity-50">3 giorni</p>
                </div>
                {/* divider */}
                <div className="w-full h-px bg-gray-100"></div> 
                <div className="flex items-center justify-between gap-2.5">
                  <p> Subtotale: </p>
                  <p> 
                    {Number(cart?.cost?.totalAmount?.amount || 0).toFixed(2)}€
                  </p>
                </div>
            </div>
            
            {/* cta */}
            <div className="flex flex-col gap-4">
              <button
                onClick={() => location.href=cart.checkoutUrl}
                className="button-primary-lg text-center"
                disabled={cart?.totalQuantity <= 0}
              > 
                Procedi all'ordine 
              </button>
              <p className="text-13 opacity-50">
                I costi di spedizione sarrano calcolati alla cassa. La spedizione è gratuita sopra i 65€. Iva inclusa. Il reso è gratuito e valido entro 15 giorni.
              </p>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}
