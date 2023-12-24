import Accedi from 'components/ui/accedi';
import Divider from 'components/ui/divider';
import ProfileSettings from 'components/ui/profile/profile-settings';
import { getCustomer, loginCustomer, registerCustomer, sendResetPasswordEmail, updateCustomer, updateCustomerAddress } from "lib/shopify";
import { InputAddress } from 'lib/shopify/types';
import { cookies } from 'next/headers';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  title: 'Hevoluta – Profilo',
  description:
    'Questa è la pagina profilo di Hevoluta. In questa pagina puoi gestire al meglio la tua Shopping Experience.',
  openGraph: {
    type: 'website'
  }
};

export default async function ProfilePage() {
  // Fetching the customer
  const customer = await getCustomer(cookies().get('login-token')?.value);

  if (!customer?.customer) return ErrorPage();

  // Update api to update customer address
  const updateAddress = async (address: InputAddress) => {
    'use server';

    const res = await updateCustomerAddress({
      address: address,
      token: cookies().get('login-token')?.value,
      id: customer.customer.defaultAddress?.id
    });

    return res;
  };

  const updateCustomerData = async (customer: any) => {
    'use server';

    const res = await updateCustomer({
      customer,
      token: cookies().get('login-token')?.value
    });

    return res;
  }

  return (
    <>
      {/* Hero */}
      <div className="flex w-screen px-5 pb-[120px] pt-20 lg:gap-2.5">
        <div className="hidden w-1/12 lg:block"></div> {/* margin */}
        <div className="flex w-full flex-col gap-20 lg:w-10/12">
          {/* header text */}
          <div className="flex flex-col gap-6 text-center">
            <h1 className="text-title-4">Bentornato {customer.customer.firstName}</h1>
            <p className="opacity-70">
              Nel tuo profilo puoi gestire al meglio la tua Shopping Experience su Hevoluta.com.
            </p>
          </div>

          {/* data */}
          <Suspense fallback={<p>Caricando i dati...</p>}>
            <ProfileSettings 
              customer={customer.customer} 
              updateCustomer={updateCustomerData}
              updateAddress={updateAddress} 
            />
          </Suspense>
        </div>
      </div>

      {/* divider */}
      <Divider />
    </>
  );
}

const ErrorPage = () => {
  // Login api to get customer access token
  const login = async ({ email, password }) => {
    'use server';

    const res = await loginCustomer({
      email,
      password
    });

    return res;
  };

  const register = async ({ email, password }) => {
    'use server';

    const res = await registerCustomer({
      email,
      password
    });

    return res;
  };

  const sendEmailPasswordRecovery = async ({ email }) => {
    'use server';

    const res = await sendResetPasswordEmail({
      email
    });

    return res;
  };
  return (
    <>
      <div className="mb-10 mt-24 flex w-screen flex-col items-center justify-center gap-8 px-5 text-center">
        <p className="text-title-4">Autenticazione richiesta</p>
        <p>Sembra che tu non sia correttamente autenticato.</p>
      </div>
      <Suspense>
        <div className="flex w-screen justify-center">
          <Accedi
            flag="login"
            login={login}
            register={register}
            sendEmailPasswordRecovery={sendEmailPasswordRecovery}
            theme="black"
          />
        </div>
      </Suspense>
    </>
  );
};
