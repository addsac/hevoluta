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
  theme?: 'white' | 'black' | 'text';
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [page, setPage] = useState(flag);

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
              <ModalContentRegister
                flag={page}
                closeModal={closeModal}
                register={register}
                login={login}
                setFlag={setPage}
              />
              <ModalContentLogin
                flag={page}
                closeModal={closeModal}
                login={login}
                openModalForgotPassword={openModalForgotPassword}
                setFlag={setPage}
              />
            </Suspense>
          </Modal>
        )}
      </AnimatePresence>

      <div className="hidden lg:block">
        <button
          className={`
            ${theme === 'white' && 'button-menu'}
            ${theme === 'black' && 'button-menu-dark'}
            ${theme === 'text' && 'button-text'}
          `}
          onClick={() => openModal()}
        >
          Accedi
        </button>
      </div>

      <div className="lg:hidden">
        <button onClick={() => openModal()} className="button-icon" aria-label="Login">
          <img src="/img/icon/user.svg" alt="" className="h-auto w-6" />
        </button>
      </div>
    </>
  );
}
