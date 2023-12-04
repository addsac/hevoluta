'use client'

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Modal from './modal';
import Link from 'next/link';
import ForgotPassword from './nav/forgot-password';

export default function Profilo(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [isOpenModalForgotPassword, setIsOpenModalForgotPassword] = useState(false);
    const openModalForgotPassword = () => setIsOpenModalForgotPassword(true);
    const closeModalForgotPassword = () => setIsOpenModalForgotPassword(false);

    return (
        <>
            {/* modals */}
            <ForgotPassword 
                isOpen={isOpenModalForgotPassword}
                closeModal={closeModalForgotPassword}
            />
        
            <AnimatePresence>
                {isModalOpen && (
                <Modal 
                    position="right" 
                    closeModal={closeModal}
                >
                    {/* titles */}
                    <div className="flex items-start justify-between">
                        <div className="flex flex-col gap-2.5">
                            <p className="text-title-4"> Profilo </p>
                        </div>

                        <button   
                            className="button-close-modal"
                            aria-label="Close"
                            onClick={() => closeModal()}
                        >
                            <img 
                            src="/img/icon/close.svg"
                            alt=""
                            className="w-6 h-6"
                            />
                        </button>
                    </div>

                    {/* links */}
                    <div className="flex flex-col items-start gap-5">
                        <Link href="/" className="button-text"> Ordini </Link>
                        <Link href="/" className="button-text"> Indirizzo </Link>
                        <button 
                            className="button-text"
                            onClick={() => openModalForgotPassword()}
                        > 
                            Recupero password
                        </button>
                    </div>
                </Modal>
                )}
            </AnimatePresence>
        
            <button 
                className="button-menu"
                onClick={() => openModal()}
            >
                Bentornato Leonardo
            </button>
        </>
    )
}
