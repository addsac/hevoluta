import Divider from 'components/ui/divider';
import ModalPasswordReset from 'components/ui/nav/modal-password-reset';
import { resetPassword } from 'lib/shopify';
import { Suspense } from 'react';

// export const runtime = 'edge';

// example link:
// https://879c32-2.myshopify.com/account/activate/7477827043667/9cf10363e60544a53fb5bb12fa84fc18-1702654402?syclid=6e1c4998-6dd4-4b82-be63-818afd38c8d5

export default async function ResetPasswordPage({ params }: { params: { handle: any } }) {
  // reset password
  const submitResetPassword = async ({ password, syclid }) => {
    "use server"

    const res = await resetPassword({
      password,
      resetUrl: String(process.env.SHOPIFY_STORE_DOMAIN + '/account/activate/' + params.handle[0] + '/' + params.handle[1] + '?syclid=' + syclid)
    })

    return res
  }

  return (
    <>
      <div className="w-screen flex flex-col lg:flex-row items-start gap-16 lg:gap-2.5 px-5 pt-20 pb-[120px]">
        <Suspense fallback={null}>
          <ModalPasswordReset 
            flag="reset-password"
            resetPassword={submitResetPassword}
          />
        </Suspense>
      </div>
      
      {/* divider */}
      <Divider />
    </>
  );
}
