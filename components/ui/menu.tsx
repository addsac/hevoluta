'use client';

import Accedi from 'components/ui/accedi';
import Modal from 'components/ui/modal';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import Balancer from 'react-wrap-balancer';

export default function Menu(): any {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <Modal 
              position="left" 
              closeModal={closeMenu}
          >
            {/* titles */}
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-2.5">
                <p className="text-title-4"> Menu </p>
              </div>

              <button   
                className="button-close-modal"
                aria-label="Close"
                onClick={() => closeMenu()}
              >
                <img 
                  src="/img/icon/close.svg"
                  alt=""
                  className="w-6 h-6"
                />
              </button>
            </div>

            {/* links */}
            <div className="flex flex-col items-start gap-16">
              {/* pagine */}
              <div className="flex flex-col items-start gap-5">
                <p className="opacity-50"> Pagine </p>
                <Link href="/" onClick={() => closeMenu()} className="button-text"> Home </Link>
                <Link href="/search" onClick={() => closeMenu()} className="button-text"> Prodotti </Link>
                <Link href="/blog" onClick={() => closeMenu()} className="button-text"> Blog </Link>
                <Link href="/chat" onClick={() => closeMenu()} className="button-text"> Chatta con noi </Link>
                <Link href="/about" onClick={() => closeMenu()} className="button-text"> Chi siamo </Link>
                <Link href="?modal=login" onClick={() => closeMenu()} className="button-text"> Accedi </Link>
              </div>

              {/* contatti */}
              <div className="flex flex-col items-start gap-5 mr-5">
                <p className="opacity-50"> Contatti </p>
                <Link href="mailto:support@hevoluta.com" onClick={() => closeMenu()} className="button-text"> support@hevoluta.com </Link>
                <p> 
                  <Balancer>
                    Siamo a tua disposizione in chat dal lunedì al venerdi (CET), dalle 9:00 alle 12:00 e dalle 15:00 alle 18:00.
                  </Balancer>
                </p>
              </div>

              {/* social */}
              <div className="flex flex-col items-start gap-5">
                <p className="opacity-50"> Social </p>
                <div className="flex gap-5">
                  <Link 
                    href="https://instagram.com/hevoluta"
                    onClick={() => closeMenu()}
                    target='_blank'
                    rel='noreferrer noopener'
                    className="bg-black w-8 h-8 flex items-center justify-center"
                  >
                    <img src="/img/social/social-tiktok.png" alt="" className="w-auto h-5" />
                  </Link>
                  <Link 
                    href="https://instagram.com/hevoluta"
                    onClick={() => closeMenu()}
                    target='_blank'
                    rel='noreferrer noopener'
                    className="bg-black w-8 h-8 flex items-center justify-center"
                  >
                    <img src="/img/social/social-instagram.png" alt="" className="w-auto h-6" />
                  </Link>
                  <Link 
                    href="https://instagram.com/hevoluta"
                    onClick={() => closeMenu()}
                    target='_blank'
                    rel='noreferrer noopener'
                    className="bg-black w-8 h-8 flex items-center justify-center"
                  >
                    <img src="/img/social/social-facebook.png" alt="" className="w-auto h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>

      <button 
        className="button-menu"
        onClick={() => openMenu()}
      > 
        Menu 
      </button>
    </>
  );
}
