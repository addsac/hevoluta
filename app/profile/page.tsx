import Divider from 'components/ui/divider';
import ProfileSettings from 'components/ui/profile/profile-settings';
import { getCustomer, updateCustomerAddress } from 'lib/shopify';
import { InputAddress } from 'lib/shopify/types';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  title: 'Hevoluta – Profilo',
  description: 'Questa è la oagina profilo di Hevoluta. In questa pagina puoi gestire al meglio la tua Shopping Experience.',
  openGraph: {
    type: 'website'
  }
};

export default async function ProfilePage() {
  // Fetching the customer
  const customer = await getCustomer( cookies().get('token')?.value )

  if (!customer?.customer) return notFound();

  // Update api to update customer address
  const updateAddress = async (address: InputAddress) => {
    'use server'
    
    const res = await updateCustomerAddress({
      address: address,
      token: cookies().get('token')?.value,
      id: customer.customer.defaultAddress.id
    });

    return res
  }

  return (
    <>
      {/* Hero */}
      <div className="flex w-screen px-5 pb-[120px] pt-20 lg:gap-2.5">
        <div className="hidden w-1/12 lg:block"></div> {/* margin */}
        <div className="flex w-full flex-col gap-20 lg:w-10/12">
          {/* header text */}
          <div className="flex flex-col gap-6 text-center">
            <h1 className="text-title-4">
                Bentornato {customer.customer.firstName}
            </h1>
            <p className="opacity-70">
                Nel tuo profilo puoi gestire al meglio la tua Shopping Experience su Hevoluta.com.
            </p>
          </div>

          {/* data */}
          <Suspense fallback={<p>Caricando i dati...</p>}>
            <ProfileSettings customer={customer.customer} updateAddress={updateAddress} />
          </Suspense>
        </div>
      </div>

      {/* divider */}
      <Divider />
    </>
  );
}
