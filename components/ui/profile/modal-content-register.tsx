'use client';

import { RegisterLoginType } from 'lib/shopify/types';
import Link from 'next/link';
import { useState } from 'react';
import Alert from '../state/alert';

export default function ModalContentRegister({
  flag,
  closeModal,
  register,
  setFlag
}: {
  flag: RegisterLoginType;
  closeModal: any;
  register: any;
  setFlag: any;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('00010000');

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const submit = async () => {
    // client password min 8 chars validation
    /* if(password.length < 8){
      setError('La password deve essere di almeno 8 caratteri.')
      return
    } */

    // check email validation
    if(email.length <= 0){
      setError('Inserisci una email valida.')
      return
  }

    setLoading(true)
    setError('')
    setSuccess('')

    const res = await register({
      email,
      password,
    })

    // console.log(res)

    if(res?.customerUserErrors[0]?.message){
      setError(res?.customerUserErrors[0]?.message)
    } else{
      setSuccess('Abbiamo inviato una mail di conferma al tuo indirizzo. Per completare la registrazione, apri la mail e conferma.')
    }

    setLoading(false)
  }

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

            {/* <div className="flex w-full flex-col items-start gap-2.5">
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
            </div> */}

            {error !== '' && (
              <Alert 
                text={'Errore:' + {error}}
                state="error"
              />
            )}

            {success !== '' && (
              <Alert 
                text={success}
                state="success"
              />
            )}

            <button 
              onClick={() => submit()} 
              className="button-primary-lg w-full"
              disabled={loading}
            >
              {loading ? 'Caricamento...' : 'Registrati'}
            </button>
            
            <div>
              <p className="inline">
                Hai già un account?
              </p>
              &nbsp;
              <button 
                onClick={() => setFlag('login')}
                className="button-text-visible-underline mx-1 inline"
              >
                Accedi qui.
              </button>
            </div>

            <div>
              <p className="inline">Consulta la</p>
              <Link 
                href="/policy/privacy" 
                className="button-text mx-1 inline"
                onClick={() => closeModal()}
              >
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
