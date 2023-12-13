'use client';

import Modal from 'components/ui/modal';
import ModalContentLogin from 'components/ui/profile/modal-content-login';
import ModalContentRegister from 'components/ui/profile/modal-content-register';
import { AnimatePresence } from 'framer-motion';
import { RegisterLoginType } from 'lib/shopify/types';
import { Suspense, useState } from 'react';
import ForgotPassword from './nav/forgot-password';

export default function Accedi({
  flag = 'register',
  register,
  login
}: {
  flag: RegisterLoginType;
  register: any;
  login: any;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // modal
  const [isOpenModalForgotPassword, setIsOpenModalForgotPassword] = useState(false);
  const openModalForgotPassword = () => setIsOpenModalForgotPassword(true);
  const closeModalForgotPassword = () => setIsOpenModalForgotPassword(false);

  return (
    <>
      {/* modals */}
      <ForgotPassword isOpen={isOpenModalForgotPassword} closeModal={closeModalForgotPassword} />

      <AnimatePresence>
        {isModalOpen && (
          <Modal position="right" closeModal={closeModal}>
            <Suspense>
              <ModalContentRegister flag={flag} closeModal={closeModal} register={register} />
              <ModalContentLogin flag={flag} closeModal={closeModal} login={login} />
            </Suspense>
          </Modal>
        )}
      </AnimatePresence>

      <button className="button-menu" onClick={() => openModal()}>
        Accedi
      </button>
    </>
  );
}
