// 'use client'

import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import Cookie from 'components/ui/cookie';
import Menu from 'components/ui/menu';
import Profilo from 'components/ui/profilo';
import { getMenu } from 'lib/shopify';
import Link from 'next/link';
import { Suspense } from 'react';

const { SITE_NAME } = process.env;

export default async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <>
      {/* modal */}
      <Cookie />

      <div className="w-screen flex flex-col">
        {/* black stripe */}
        <div className="w-full max-w-full overflow-x-auto flex flex-nowrap items-center gap-10 justify-between bg-black text-white px-5 py-1.5">
          <p className="text-12 font-medium font-mono whitespace-nowrap">
            Spedizione gratuita da 65€
          </p>
          <p className="text-12 font-medium font-mono whitespace-nowrap">
            Progettato e fabbricato in Italia
          </p>
          <Link href="/" className="text-12 font-medium font-mono whitespace-nowrap hover:underline">
            Dubbi? Chatta con noi gratis
          </Link>
        </div>

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
              {/* <Accedi /> */}
              <Profilo />
            </div>
            <Suspense fallback={<OpenCart />}>
              <Cart />
            </Suspense>
          </div>
        </nav>
      </div>
      
      {/* <nav className="relative flex items-center justify-between p-4 lg:px-6">
        <div className="block flex-none md:hidden">
          <MobileMenu menu={menu} />
        </div>
        <div className="flex w-full items-center">
          <div className="flex w-full md:w-1/3">
            <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
              <LogoSquare />
              <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
                {SITE_NAME}
              </div>
            </Link>
            {menu.length ? (
              <ul className="hidden gap-6 text-sm md:flex md:items-center">
                {menu.map((item: Menu) => (
                  <li key={item.title}>
                    <Link
                      href={item.path}
                      className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="hidden justify-center md:flex md:w-1/3">
            <Search />
          </div>
          <div className="flex justify-end md:w-1/3">
            <Suspense fallback={<OpenCart />}>
              <Cart />
            </Suspense>
          </div>
        </div>
      </nav> */}
    </>
  );
}
