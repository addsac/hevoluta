'use client';

import { createCookie } from 'lib/cookie';
import { RegisterLoginType } from 'lib/shopify/types';
import { useState } from 'react';

export default function ModalContentLogin({
  flag,
  closeModal,
  login,
  openModalForgotPassword,
  setFlag
}: {
  flag: RegisterLoginType;
  closeModal: any;
  login: any;
  openModalForgotPassword: any;
  setFlag: any;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  // error state
  const [error, setError] = useState('')

  const submit = async () => {
    setLoading(true)

    const res = await login({
      email,
      password,
    })

    console.log(res)

    if(res?.customerUserErrors[0]?.message){
      // setError(res.customerUserErrors[0].message)
      setError('Email o password errati.')
    } else{
      createCookie('token', res.customerAccessToken.accessToken, 14)
      closeModal()
      window.location.reload()
    }

    setLoading(false)
  }

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
                placeholder="••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-base w-full"
              />
              <button className="button-text" onClick={() => openModalForgotPassword()}>
                Non ricordi la password?
              </button>
            </div>

            <button 
              onClick={() => submit()}
              className="button-primary-lg w-full"
              disabled={loading}
            >
              {loading ? 'Caricamento...' : 'Accedi'}
            </button>

            {error && (
              <div className="bg-red-100 px-5 py-2.5 text-red-500">
                  <p> Errore: {error} </p>
              </div>
            )}

            <div>
              <p className="inline">
                Non hai un account?
              </p>
              &nbsp;
              <button 
                onClick={() => setFlag('register')}
                className="button-text-visible-underline mx-1 inline"
              >
                Registrati qui.
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
