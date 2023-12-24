'use client'

import { AnimatePresence } from 'framer-motion';
import { deleteCookie } from 'lib/cookie';
import { ShopifyCustomer } from 'lib/shopify/types';
import Link from 'next/link';
import { useState } from 'react';
import Modal from './modal';
import ForgotPassword from './nav/forgot-password';

export default function Profilo({
    customer,
    logout,
    sendEmailPasswordRecovery
} : {
    customer: ShopifyCustomer,
    logout: any,
    sendEmailPasswordRecovery: any
}){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [isOpenModalForgotPassword, setIsOpenModalForgotPassword] = useState(false);
    const openModalForgotPassword = () => setIsOpenModalForgotPassword(true);
    const closeModalForgotPassword = () => setIsOpenModalForgotPassword(false);

    const submitLogout = async () => {
        const res = await logout()
        
        if(res.customerAccessTokenDelete?.deletedAccessToken){
            // delete cookie
            deleteCookie('login-token')
            closeModal()
            window.location.reload()
        }
    }

    return (
        <>
            {/* modals */}
            <ForgotPassword 
                isOpen={isOpenModalForgotPassword}
                closeModal={closeModalForgotPassword}
                sendEmailPasswordRecovery={sendEmailPasswordRecovery}
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
                        <Link href="/profile" onClick={() => closeModal()} className="button-text"> 
                            Account &nbsp;
                            (
                                {customer.numberOfOrders} 
                                {Number(customer.numberOfOrders) > 1 ? 'ordini' : 'ordine'}
                            ) 
                        </Link>
                        <button 
                            onClick={async () => await submitLogout()}
                            className="button-text"
                        > 
                            Log out 
                        </button>
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
