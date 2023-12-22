import Divider from 'components/ui/divider';
import ModalPasswordReset from 'components/ui/nav/modal-password-reset';
import { registerConfirmCustomer } from 'lib/shopify';
import { Suspense } from 'react';

export const runtime = 'edge';

// example link:
// https://879c32-2.myshopify.com/account/reset/7477827043667/9cf10363e60544a53fb5bb12fa84fc18-1702654402?syclid=6e1c4998-6dd4-4b82-be63-818afd38c8d5

export default async function ResetPasswordPage({ params }: { params: { handle: any } }) {
  // activate account
  const registerConfirm = async ({ password, syclid }) => {
    'use server'

    const res = await registerConfirmCustomer({
      activationUrl: String(process.env.SHOPIFY_STORE_DOMAIN + '/account/activate/' + params.handle[0] + '/' + params.handle[1] + '?syclid=' + syclid),
      password
    });
    
    return res
  }

  return (
    <>
      <div className="w-screen flex flex-col lg:flex-row items-start gap-16 lg:gap-2.5 px-5 pt-20 pb-[120px]">
        <Suspense>
          <ModalPasswordReset 
            flag="activate-account"
            activateAccount={registerConfirm}
          />
        </Suspense>
      </div>
      
      {/* divider */}
      <Divider />
    </>
  );
}
