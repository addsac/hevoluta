'use client';

import { RegisterLoginType } from 'lib/shopify/types';
import Link from 'next/link';
import { useState } from 'react';

export default function ModalContentLogin({
  flag,
  closeModal,
  login
}: {
  flag: RegisterLoginType;
  closeModal: any;
  login: any;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      {flag == 'login' && (
        <>
          {/* titles */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-2.5">
              <p className="text-title-4"> Accedi </p>
            </div>

            <button className="button-close-modal" aria-label="Close" onClick={() => closeModal()}>
              <img src="/img/icon/close.svg" alt="" className="h-6 w-6" />
            </button>
          </div>

          {/* form */}
          <div className="flex flex-col items-start gap-8">
            <div className="flex w-full flex-col gap-2.5">
              <p> Email </p>
              <input
                type="email"
                placeholder="nome@esempio.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-base w-full"
              />
            </div>

            <div className="flex w-full flex-col items-start gap-2.5">
              <p> Password </p>
              <input
                type="password"
                placeholder="••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-base w-full"
              />
              <button className="button-text" onClick={() => openModalForgotPassword()}>
                Non ricordi la password?
              </button>
            </div>

            <button className="button-primary-lg w-full">Accedi</button>

            <div>
              <p className="inline">Consulta la</p>
              <Link href="/privacy" className="button-text mx-1 inline">
                privacy policy
              </Link>
              <p className="inline">per maggiori informazioni.</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
