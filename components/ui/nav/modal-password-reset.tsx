'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function ModalPasswordReset({
  id1,
  id2,
  resetPassword
}: {
  id1: string;
  id2: string;
  resetPassword: any;
}) {
  const searchParams = useSearchParams();
  const syclid = searchParams.get('syclid');

  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // state error and success
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const send = async () => {
    if(password.length < 8) {
        setError('La password deve essere lunga almeno 8 caratteri.');
        return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    const res = await resetPassword({
      password,
      resetUrl: `${id1}/${id2}?syclid=${syclid}`
    });
    
    if(res?.customerResetByUrl?.customerUserErrors[0]?.message) {
        setError(res.customerResetByUrl.customerUserErrors[0].message);
    }
    else{
        setSuccess('Password aggiornata con successo.');
    }

    setLoading(false);
  };

  return (
    <div className="mx-auto w-full max-w-[400px]">
      <div className="flex flex-col items-start gap-8">
        <p className="text-title-4"> Imposta una nuova password </p>

        <div className="flex w-full flex-col items-start gap-2.5">
          <p> Nuova password </p>
          <input
            type="text"
            name="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => {
              setError('');
              setPassword(e.target.value); 
            }}
            className="input-base w-full"
          />
          <p className="text-body-1_2 opacity-50">
            Minimo 8 caratteri.
          </p>
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

        <button className="button-primary-base" onClick={() => send()} disabled={loading}>
          {loading ? 'Caricamento...' : 'Salva nuova password'}
        </button>
      </div>
    </div>
  );
}
