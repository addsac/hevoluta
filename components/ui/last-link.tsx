'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Alert from 'components/ui/state/alert';

export default function LastLink({ register }: { register: any }) {
  const [email, setEmail] = useState('');
  const [checkNewsletter, setCheckNewsletter] = useState(false);
  const [password, setPassword] = useState('00010000');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

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

    // check recieve markerting email validation
    if(!checkNewsletter){
        setError('Per favore accetta i termini e condizioni.')
        return
    }

    setLoading(true);

    const res = await register({
      email,
      password
    });

    // console.log(res)

    if (res?.customerUserErrors[0]?.message) {
      setError(res?.customerUserErrors[0]?.message);
    } else {
      setSuccess(
        'Abbiamo inviato una mail di conferma al tuo indirizzo. Per completare la registrazione, apri la mail e conferma.'
      );
    }

    setLoading(false);
  };

  return (
    <div className="grid grid-cols-12 gap-5 px-5 py-[120px]">
      {/* newsletter */}
      <div className="bg-gradient-gray relative col-span-12 h-[400px] overflow-clip border border-black lg:col-span-8">
        <Image
          src="/img/background/background-3.png"
          alt=""
          width={400}
          height={400}
          className="absolute bottom-0 right-0 top-0 w-auto select-none opacity-50 lg:opacity-100"
          draggable={false}
        />
        <div className="absolute bottom-5 left-5 right-5 flex flex-col items-start gap-5">
          <p className="text-title-4">Ottieni il 15% di sconto sul tuo primo ordine.</p>
          <p className="-mt-3 opacity-70">
            Iscriviti: riceverai il coupon di benvenuto, offerte riservate e novità.
          </p>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nome@esempio.com"
            className="input-base w-full max-w-[400px]"
          />

          <div className="flex items-center justify-start gap-2">
            <input
              type="checkbox"
              checked={checkNewsletter}
              onChange={() => setCheckNewsletter(!checkNewsletter)}
              id="newsletter"
              className="checkbox-base shrink-0"
            />
            <label htmlFor="newsletter">
              <p className="inline">Accetto i termini e condizioni.</p>
            </label>
          </div>

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

          <button className="button-primary-base" onClick={() => submit()} disabled={loading}>
            {loading ? 'Caricamento...' : 'Iscriviti'}
          </button>
        </div>
      </div>

      {/* social */}
      <div className="relative col-span-12 h-[400px] bg-black lg:col-span-4">
        <Image
          src="/img/background/background-2.jpg"
          alt=""
          width={400}
          height={400}
          className="h-full w-full select-none object-cover opacity-60"
          draggable={false}
        />

        <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-5">
          <p className="text-title-4 text-white">Seguici sui social</p>
          <div className="flex gap-5">
            <Link
              href="https://instagram.com/hevoluta"
              target="_blank"
              rel="noreferrer noopener"
              className="flex h-8 w-8 items-center justify-center bg-black"
            >
              <img src="/img/social/social-tiktok.png" alt="" className="h-5 w-auto" />
            </Link>
            <Link
              href="https://instagram.com/hevoluta"
              target="_blank"
              rel="noreferrer noopener"
              className="flex h-8 w-8 items-center justify-center bg-black"
            >
              <img src="/img/social/social-instagram.png" alt="" className="h-6 w-auto" />
            </Link>
            <Link
              href="https://instagram.com/hevoluta"
              target="_blank"
              rel="noreferrer noopener"
              className="flex h-8 w-8 items-center justify-center bg-black"
            >
              <img src="/img/social/social-facebook.png" alt="" className="h-5 w-auto" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
