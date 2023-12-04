'use client';

import Modal from 'components/ui/modal';
import { AnimatePresence } from 'framer-motion';
import type { Cart } from 'lib/shopify/types';
import { useEffect, useRef, useState } from 'react';

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
    <>
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
          {cart?.totalQuantity}
        </p>
      </button>

      <AnimatePresence>
        {isOpen && (
          <Modal
            position='right'
            closeModal={closeCart}
          >
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-2.5">
                <p> Carrello </p>
                <p className="opacity-50"> 3 prodotti aggiunti </p>
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
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
