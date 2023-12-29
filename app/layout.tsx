import Footer from 'components/layout/footer';
import Navbar from 'components/layout/navbar';
import LastLink from 'components/ui/last-link';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { getCustomer, getProducts, loginCustomer, registerCustomer } from 'lib/shopify';
import { ensureStartsWith } from 'lib/utils';
import localFont from 'next/font/local';
import { cookies } from 'next/headers';
import { ReactNode, Suspense } from 'react';
import './globals.css';

// Tiempos font
const tiempos = localFont({
  src: [
    {
      path: '../fonts/TiemposHeadline-Light.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/TiemposHeadline-LightItalic.otf',
      weight: '400',
      style: 'italic',
    }
  ]
})

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite
      }
    })
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const customer = await getCustomer( cookies().get('login-token')?.value )
  const products = await getProducts({})

  // Register api to register a new customer
  const register = async ({ email, password }) => {
    'use server'
    
    const res = await registerCustomer({
      email,
      password,
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

  return (
    <html lang="it" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Navbar customer={customer} />
        
        <Suspense>
          <main>{children}</main>
        </Suspense>

        <Suspense>
          <LastLink register={register} login={login} />
          <Footer products={products} />
        </Suspense>
      </body>
    </html>
  );
}
