'use client';

import Alert from 'components/ui/state/alert';
import { AnimatePresence, motion } from 'framer-motion';
import { createCookie } from 'lib/cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function LastLink({ register, login }: { register: any, login: any }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkNewsletter, setCheckNewsletter] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const submit = async () => {
    // check email validation
    if(email.trim().length == 0){
        setError('Inserisci una email valida.')
        return
    }

    // check password validation
    if(password.trim().length == 0){
        setError('Inserisci una password valida.')
        return
    }

    // check recieve markerting email validation
    if(!checkNewsletter){
        setError('Per favore accetta i termini e condizioni.')
        return
    }

    setLoading(true);
    setError('');
    setSuccess('');

    // api to register the email to the newsletter in mailchimp audience
    const res = await register({
      email,
      password,
    });

    if(res?.customerUserErrors[0]?.message){
      setError(res?.customerUserErrors[0]?.message)
    } 
    else{
      setSuccess('Stai per essere reindirizzato...')

      const res = await login({
        email,
        password,
      })
  
      if(res?.customerUserErrors[0]?.message){
        // setError(res.customerUserErrors[0].message)
        setError('Email o password errati.')
      } else{
        createCookie('login-token', res.customerAccessToken.accessToken, 14)
        window.location.reload()
      }
    }

    setLoading(false);
  };

  return (
    <div className="grid grid-cols-12 gap-5 px-5 py-[120px]">
      {/* newsletter */}
      <div className="bg-gradient-gray relative col-span-12 h-[400px] overflow-clip border border-gray-200 lg:col-span-8">
        <Image
          src="/img/background/background-3.png"
          alt=""
          width={400}
          height={400}
          className="absolute bottom-0 right-0 top-0 w-auto select-none opacity-50 lg:opacity-100 z-[0]"
          draggable={false}
        />
        <div className="absolute bottom-5 left-5 right-5 flex flex-col items-start gap-5 z-[5]">
          <p className="text-title-4">Ottieni il 10% di sconto sul tuo primo ordine.</p>
          <p className="-mt-3 opacity-70">
            Iscriviti: riceverai il coupon di benvenuto, offerte riservate e novità.
          </p>
          <input
            id="email-newsletter"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                // go to password input
                document.getElementById('password-newsletter').focus()
              }
            }}
            placeholder="nome@esempio.com"
            className="input-base w-full max-w-[400px]"
          />

          <AnimatePresence>
            {email.trim() !== '' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="w-full"
              >
                <input
                  id="password-newsletter"
                  type="text"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                      submit();
                    }
                  }}
                  placeholder="scegli una password"
                  className="input-base w-full max-w-[400px]"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-start gap-2">
            <input
              type="checkbox"
              checked={checkNewsletter}
              onChange={() => setCheckNewsletter(!checkNewsletter)}
              id="newsletter"
              className="checkbox-base shrink-0"
            />
            <label htmlFor="newsletter">
              <p className="inline">
                Accetto i&nbsp;
                <Link href="/policy/terms" className="button-text inline-block">
                  termini e condizioni
                </Link>
                .
              </p>
            </label>
          </div>

          {error !== '' && (
            <Alert 
              text={'Errore: ' + error}
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
            {loading ? 'Caricamento...' : 'Iscriviti alla newsletter'}
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
              href="https://www.tiktok.com/@moirabonaldocosmetologa?_t=8iybYXlBN5M&_r=1"
              target="_blank"
              rel="noreferrer noopener"
              className="flex h-8 w-8 items-center justify-center bg-black border border-white/30"
            >
              <img src="/img/social/social-tiktok.png" alt="" className="h-5 w-auto" />
            </Link>
            <Link
              href="https://instagram.com/hevoluta"
              target="_blank"
              rel="noreferrer noopener"
              className="flex h-8 w-8 items-center justify-center bg-black border border-white/30"
            >
              <img src="/img/social/social-instagram.png" alt="" className="h-6 w-auto" />
            </Link>
            <Link
              href="https://www.facebook.com/drssabonaldomoira"
              target="_blank"
              rel="noreferrer noopener"
              className="flex h-8 w-8 items-center justify-center bg-black border border-white/30"
            >
              <img src="/img/social/social-facebook.png" alt="" className="h-5 w-auto" />
            </Link>
            <Link
              href="https://www.youtube.com/@MoiraBonaldo"
              target="_blank"
              rel="noreferrer noopener"
              className="flex h-8 w-8 items-center justify-center bg-black border border-white/30"
            >
              <img src="/img/social/social-youtube.png" alt="" className="h-4 w-auto" />
            </Link>
          </div>
        </div>
      </div>

      {/* chatta con noi */}
      <div className="bg-gradient-gray border border-gray-200 relative col-span-12 h-[240px] overflow-clip px-5 flex flex-col gap-6 items-start justify-center">
        <Image
          src="/img/background/background-6.png"
          alt=""
          width={400}
          height={400}
          className="absolute bottom-0 right-0 top-0 w-auto h-[240px] select-none opacity-50 lg:opacity-100 z-[0]"
          draggable={false}
        />

        <p className="text-title-4 z-[5]">
          Hai domande o curiosità sui prodotti?
        </p>
        <p className='opacity-50 -mt-3 z-[5]'>
          Apri la chat – Saremo felici di rispondere a ogni tua domanda.
        </p>
        <Link href="/chat" className="z-[5]">
          <button className="button-primary-base">
            Chatta con noi
          </button>
        </Link>
      </div>
    </div>
  );
}
