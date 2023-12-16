'use client';

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ModalCenter from '../modal-center';

export default function ForgotPassword({
    isOpen = false,
    closeModal = null,
    sendEmailPasswordRecovery = null,
}: {
    isOpen: boolean;
    closeModal: any;
    sendEmailPasswordRecovery: any;
}) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  // error adn success
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const send = async () => {
    setLoading(true)
    setError('')
    setSuccess('')

    const res = await sendEmailPasswordRecovery({ 
      email: email,
    })

    console.log(res)

    if(res.customerUserErrors[0].message) {
      // error state
      setError(res.customerUserErrors[0].message)
    } 
    else {
      // success state
      setSuccess('Email inviata con successo.')
    }

    setLoading(false)
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <ModalCenter 
            closeModal={closeModal}
          >
            {/* titles */}
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-2.5">
                <p className="text-title-4"> Password dimenticata? </p>
                <p className="opacity-50">
                  Inserisci l'indirizzo email che utilizzi per accedere al tuo account e riceverai un'email contenente un link per cambiare la tua password.
                </p>
              </div>

              <button   
                className="button-close-modal shrink-0"
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

            <div className="flex flex-col items-start gap-8">
              <div className="w-full flex flex-col items-start gap-2.5">
                <p> Email </p>
                <input 
                  type="email"
                  name="email"
                  placeholder="nome@esempio.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full input-base"
                />
              </div>

              {error !== '' && (
                <div className="bg-red-100 px-5 py-2.5 text-red-500">
                  <p> Errore: {error} </p>
                </div>
              )}

              {success !== '' && (
                <div className="bg-green-100 px-5 py-2.5 text-green-500">
                  <p> Successo: {success} </p>
                </div>
              )}

              <button 
                className="button-primary-base"
                onClick={() => send()}
                disabled={loading}
              >
                {loading ? 'Invio in corso...' : 'Invia link di recupero'}
              </button>
            </div>
          </ModalCenter>
        )}
      </AnimatePresence>
    </>
  );
}
