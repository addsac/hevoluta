import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import BlackStripe from 'components/layout/navbar/black-stripe';
import Accedi from 'components/ui/accedi';
import Cookie from 'components/ui/cookie';
import Menu from 'components/ui/menu';
import ModalRegistrationConfirm from 'components/ui/nav/modal-registration-confirm';
import Profilo from 'components/ui/profilo';
import { getMenu, loginCustomer, logoutCustomer, registerConfirmCustomer, registerCustomer, sendResetPasswordEmail } from 'lib/shopify';
import { Customer } from 'lib/shopify/types';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { Suspense } from 'react';

const { SITE_NAME } = process.env;

export default async function Navbar({ customer }: { customer: Customer }) {
  const menu = await getMenu('next-js-frontend-header-menu');

  // Register api to register a new customer
  const register = async ({ email, password }) => {
    'use server'
    
    const res = await registerCustomer({
      email,
      password,
    });

    return res
  }

  // set new password after activating the registration
  const registerConfirm = async ({ syclid, discount, password }) => {
    'use server'

    console.log(String(process.env.SHOPIFY_STORE_DOMAIN + '/?syclid=' + syclid + '&discount=' + discount))
    console.log(password)

    const res = registerConfirmCustomer({
      activationUrl: String(process.env.SHOPIFY_STORE_DOMAIN + '/?syclid=' + syclid + '&discount=' + discount),
      password
    });
    
    return res
  }

  // Login api to get customer access token
  const login = async ({ email, password }) => {
    'use server'
    
    const res = await loginCustomer({
      email,
      password,
    });

    return res
  }

  // Logout api to remove customer access token
  const logout = async () => {
    'use server'
    
    const res = await logoutCustomer({
      customerAccessToken: cookies().get('token')?.value
    });

    return res
  }

  // Reset password api to send email to customer
  const sendEmailPasswordRecovery = async ({ email }) => {
    'use server'
    
    const res = await sendResetPasswordEmail({
      email,
    });

    return res
  }

  return (
    <>
      {/* modal */}
      <Suspense>
        <Cookie />
      </Suspense>
      <Suspense>
        <ModalRegistrationConfirm 
          registerConfirm={registerConfirm}
        />
      </Suspense>

      <div className="w-screen flex flex-col">
        <Suspense>
          <BlackStripe />
        </Suspense>

        {/* navigation menu */}
        <nav className="w-full px-5 py-5 flex items-center justify-between bg-white border-b border-gray-200">
          {/* left buttons */}
          <div className="flex items-center w-full">
            <Menu />
            <div className="hidden lg:block">
              <Link href="/products"> 
                <button className="button-menu">
                  Prodotti
                </button>
              </Link>
            </div>
            <div className="hidden lg:block">
              <Link href="/chat"> 
                <button className="button-menu"> 
                  <div className="button-ball"></div>
                  Chatta con noi 
                </button>
              </Link>
            </div>
          </div>

          {/* logo */}
          <Link href="/" className="shrink-0">
            <img
              src="/img/logo.png"
              alt="logo"
              className="h-5 w-auto"
            />
          </Link>

          {/* right buttons */}
          <div className="flex items-center justify-end w-full">
            <div className="hidden lg:block">
              <Suspense>
                {!customer?.customer ? 
                  <Accedi 
                    flag="login"
                    register={register}
                    login={login}
                    sendEmailPasswordRecovery={sendEmailPasswordRecovery}
                  /> : 
                  <Profilo 
                    customer={customer.customer}
                    logout={logout} 
                    sendEmailPasswordRecovery={sendEmailPasswordRecovery}
                  />
                }
              </Suspense>
            </div>
            <Suspense fallback={<OpenCart />}>
              <Cart />
            </Suspense>
          </div>
        </nav>
      </div>
    </>
  );
}
