import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import BlackStripe from 'components/layout/navbar/black-stripe';
import AuthButtons from 'components/ui/auth-buttons';
import Cookie from 'components/ui/cookie';
import Menu from 'components/ui/menu';
import { Customer } from 'lib/shopify/types';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { Suspense } from 'react';

const { SITE_NAME } = process.env;

export default async function Navbar({ customer }: { customer: Customer }) {
  // const menu = await getMenu('next-js-frontend-header-menu');
  const token = cookies().get('login-token')?.value

  return (
    <>
      {/* modal */}
      <Suspense>
        <Cookie />
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
              <Link href="/search"> 
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
              <AuthButtons 
                customer={customer}
                token={token}
              />
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
