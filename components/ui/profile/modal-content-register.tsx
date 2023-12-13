'use client';

import { RegisterLoginType } from 'lib/shopify/types';
import Link from 'next/link';
import { useState } from 'react';

export default function ModalContentRegister({
  flag,
  closeModal,
  register
}: {
  flag: RegisterLoginType;
  closeModal: any;
  register: any;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      {flag == 'register' && (
        <>
          {/* titles */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-2.5">
              <p className="text-title-4"> Registrati </p>
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
                name="email"
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
                name="password-"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-base w-full"
              />
              <p className="text-body-1_2 oapcity-50">Minimo 8 carattri e una lettera maiuscola.</p>
            </div>

            <button onClick={() => register({
                email,
                password
            })} className="button-primary-lg w-full">
              Registrati
            </button>

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
