'use client';

import ModalCenter from 'components/ui/modal-center';
import { AnimatePresence } from 'framer-motion';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ModalRegistrationConfirm({ registerConfirm }: { registerConfirm: any }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const syclid = searchParams.get('syclid');

  const [modalActive, setModalActive] = useState(false);
  const closeModal = () => {
    // return to home
    location.href = '/'

    // if i call setModalActive(false) the modal will re-rerender and because the router is still '/syclid=[...]' 
    // the modal will reopen and user will not be able to close it.
  };

  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const submit = async () => {
    // client password min 8 chars validation
    if (password.length < 8) {
      setError('La password deve essere di almeno 8 caratteri.');
      return;
    }

    setLoading(true);

    const res = await registerConfirm({
      syclid,
      password
    });

    console.log(res);

    if (res?.customerUserErrors[0]?.message) {
      setError(res?.customerUserErrors[0]?.message);
    } else {
      setSuccess('Password impostata con successo.');
    }

    setLoading(false);
  };

  useEffect(() => {
    // intercept if the router is home and syclid params exists
    // exapmple - http://localhost:3000/?syclid=68ca64f7-6603-486f-94bd-d8dbe50dd7ae, https://hevoluta.vercel.app/?syclid=68ca64f7-6603-486f-94bd-d8dbe50dd7ae
    if (pathname === '/' && syclid) {
      setModalActive(true);
    }
  });

  return (
    <AnimatePresence>
      {modalActive && (
        <ModalCenter closeModal={closeModal}>
          <div className="flex flex-col items-start gap-8">
            <p className="text-title-4">
              {' '}
              Imposta una nuova password per confermare la registrazione{' '}
            </p>

            <div className="flex w-full flex-col items-start gap-2.5">
              <p> Nuova password </p>
              <input
                type="text"
                name="password"
                placeholder="••••••••"
                autoFocus={true}
                value={password}
                onChange={(e) => {
                  setError('');
                  setPassword(e.target.value);
                }}
                className="input-base w-full"
              />
              <p className="text-body-1_2 opacity-50">Minimo 8 caratteri.</p>
            </div>

            {error !== '' && (
              <div className="bg-red-100 px-5 py-2.5 text-red-500">
                <p> Errore: {error} </p>
              </div>
            )}

            {success !== '' && (
              <div className="bg-green-100 px-5 py-2.5 text-green-600">
                <p> Successo: {success} </p>
              </div>
            )}

            <button className="button-primary-base" onClick={() => submit()} disabled={loading}>
              {loading ? 'Caricamento...' : 'Conferma'}
            </button>
          </div>
        </ModalCenter>
      )}
    </AnimatePresence>
  );
}
