import {
  loginCustomer,
  logoutCustomer,
  registerCustomer,
  sendResetPasswordEmail
} from 'lib/shopify';
import { Customer } from 'lib/shopify/types';
import { Suspense } from 'react';
import Accedi from './accedi';
import Profilo from './profilo';

export default function AuthButtons({ customer, theme = 'white', token = '' }: { customer: Customer, theme?: 'white' | 'black' | 'text', token: string }) {
  // Register api to register a new customer
  const register = async ({ email, password }) => {
    'use server';

    const res = await registerCustomer({
      email,
      password
    });

    return res;
  };

  // Login api to get customer access token
  const login = async ({ email, password }) => {
    'use server';

    const res = await loginCustomer({
      email,
      password
    });

    return res;
  };

  // Logout api to remove customer access token
  const logout = async () => {
    'use server';

    const res = await logoutCustomer({
      customerAccessToken: token
    });

    return res;
  };

  // Reset password api to send email to customer
  const sendEmailPasswordRecovery = async ({ email }) => {
    'use server';

    const res = await sendResetPasswordEmail({
      email
    });

    return res;
  };

  return (
    <Suspense>
      {!customer?.customer ? (
        <Accedi
          flag="login"
          register={register}
          login={login}
          sendEmailPasswordRecovery={sendEmailPasswordRecovery}
          theme={theme}
        />
      ) : (
        <Profilo
          customer={customer.customer}
          logout={logout}
          sendEmailPasswordRecovery={sendEmailPasswordRecovery}
          theme={theme}
        />
      )}
    </Suspense>
  );
}
