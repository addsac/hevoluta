'use client';

import Modal from 'components/ui/modal';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import ForgotPassword from './nav/forgot-password';

type RegisterType = 'login' | 'register'

export default function Accedi({ flag = 'login' } : { flag: RegisterType }) {
  // register
  const [emailRegister, setEmailRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');

  // login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
            {flag == 'register' && (
              <>
                {/* titles */}
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-2.5">
                    <p className="text-title-4"> Registrati </p>
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

                {/* form */}
                <div className="flex flex-col items-start gap-8">
                  <div className="w-full flex flex-col gap-2.5">
                    <p> Email </p>
                    <input 
                      type="email"
                      placeholder="nome@esempio.com"
                      value={emailRegister}
                      onChange={(e) => setEmailRegister(e.target.value)}
                      className="w-full input-base"
                    />
                  </div>

                  <div className="w-full flex flex-col items-start gap-2.5">
                    <p> Password </p>
                    <input 
                      type="password"
                      name="password-register"
                      placeholder="••••••••"
                      value={passwordRegister}
                      onChange={(e) => setPasswordRegister(e.target.value)}
                      className="w-full input-base"
                    />
                    <p className="text-body-1_2 oapcity-50">
                      Minimo 8 carattri e una lettera maiuscola.
                    </p>
                  </div>

                  <button className="w-full button-primary-lg">
                    Registrati
                  </button>

                  <div>
                    <p className="inline">
                      Consulta la 
                    </p>
                    <Link href="/privacy" className="button-text mx-1 inline">
                        privacy policy
                    </Link>
                    <p className="inline">
                      per maggiori informazioni.
                    </p>
                  </div>
                </div>
              </>
            )}
            {flag == 'login' && (
              <>
                {/* titles */}
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-2.5">
                    <p className="text-title-4"> Accedi </p>
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

                {/* form */}
                <div className="flex flex-col items-start gap-8">
                  <div className="w-full flex flex-col gap-2.5">
                    <p> Email </p>
                    <input 
                      type="email"
                      placeholder="nome@esempio.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full input-base"
                    />
                  </div>

                  <div className="w-full flex flex-col items-start gap-2.5">
                    <p> Password </p>
                    <input 
                      type="password"
                      placeholder="••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full input-base"
                    />
                    <button
                      className="button-text"
                      onClick={() => openModalForgotPassword()}
                    >
                      Non ricordi la password?
                    </button>
                  </div>

                  <button className="w-full button-primary-lg">
                    Accedi
                  </button>

                  <div>
                    <p className="inline">
                      Consulta la 
                    </p>
                    <Link href="/privacy" className="button-text mx-1 inline">
                        privacy policy
                    </Link>
                    <p className="inline">
                      per maggiori informazioni.
                    </p>
                  </div>
                </div>
              </>
            )}
          </Modal>
        )}
      </AnimatePresence>

      <button 
        className="button-menu"
        onClick={() => openModal()}
      >
        Accedi
      </button>
    </>
  );
}
