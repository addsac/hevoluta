'use client';

import Alert from 'components/ui/state/alert';
import { createCookie } from 'lib/cookie';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

type Flag = 'activate-account' | 'reset-password'

export default function ModalPasswordReset({
  flag,
  resetPassword,
  activateAccount
}: {
  flag: Flag,
  resetPassword?: any;
  activateAccount?: any;
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

    if(flag === 'activate-account') {
      // function to activate account
      const res = await activateAccount({
        password,
        syclid: syclid
      });
    
      if(res?.customerUserErrors[0]?.message) {
          setError(res?.customerUserErrors[0]?.message);
      }
      else{
          setSuccess('Password aggiornata con successo. Verrai reindirizzato a breve...');
          createCookie('login-token', res.customerAccessToken.accessToken, 14)
          location.href = "/"
      }

      setLoading(false);
    }
    else if (flag === 'reset-password') {
      // function to reset password
      const res = await resetPassword({
        password,
        syclid: syclid
      });
    
      if(res?.customerUserErrors[0]?.message) {
          setError(res?.customerUserErrors[0]?.message);
      }
      else{
          setSuccess('Password aggiornata con successo.');
      }

      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-[400px]">
      <div className="flex flex-col items-start gap-8">
        <p className="text-title-4"> 
          Imposta una nuova password &nbsp; {flag === 'activate-account' && 'per attivare il tuo account'}
        </p>

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

        <button className="button-primary-base" onClick={() => send()} disabled={loading}>
          {loading ? 'Caricamento...' : 'Salva nuova password'}
        </button>
      </div>
    </div>
  );
}
