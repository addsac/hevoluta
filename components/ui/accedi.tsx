'use client';

import Modal from 'components/ui/modal';
import ModalContentLogin from 'components/ui/profile/modal-content-login';
import ModalContentRegister from 'components/ui/profile/modal-content-register';
import { AnimatePresence } from 'framer-motion';
import { RegisterLoginType } from 'lib/shopify/types';
import { Suspense, useState } from 'react';
import ForgotPassword from './nav/forgot-password';

export default function Accedi({
  flag = 'login',
  register,
  login,
  sendEmailPasswordRecovery,
  theme = 'white'
}: {
  flag: RegisterLoginType;
  register: any;
  login: any;
  sendEmailPasswordRecovery: any;
  theme?: 'white' | 'black';
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [page, setPage] = useState(flag)

  // modal
  const [isOpenModalForgotPassword, setIsOpenModalForgotPassword] = useState(false);
  const openModalForgotPassword = () => setIsOpenModalForgotPassword(true);
  const closeModalForgotPassword = () => setIsOpenModalForgotPassword(false);

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
          <Modal position="right" closeModal={closeModal}>
            <Suspense>
              <ModalContentRegister flag={page} closeModal={closeModal} register={register} login={login} setFlag={setPage} />
              <ModalContentLogin flag={page} closeModal={closeModal} login={login} openModalForgotPassword={openModalForgotPassword} setFlag={setPage} />
            </Suspense>
          </Modal>
        )}
      </AnimatePresence>

      <button 
        className={`
          ${theme === 'white' && "button-menu"}
          ${theme === 'black' && "button-menu-dark"}
        `} 
        onClick={() => openModal()}
      >
        Accedi
      </button>
    </>
  );
}
