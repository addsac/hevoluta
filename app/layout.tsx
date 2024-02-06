import Footer from 'components/layout/footer';
import Navbar from 'components/layout/navbar';
import LastLink from 'components/ui/last-link';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { getAnnouncements, getCustomer, getProducts, loginCustomer, registerCustomer } from 'lib/shopify';
import { ensureStartsWith } from 'lib/utils';
import localFont from 'next/font/local';
import Head from 'next/head';
import { cookies } from 'next/headers';
import Script from 'next/script';
import { ReactNode, Suspense } from 'react';
import './globals.css';

// Tiempos font
const tiempos_normal = localFont({
  src: [
    {
      path: './fonts/TiemposHeadline-Light.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-tiempos-normal'
})

const tiempos_italic = localFont({
  src: [
    {
      path: './fonts/TiemposHeadline-LightItalic.woff2',
      weight: '400',
      style: 'italic',
    }
  ],
  variable: '--font-tiempos-italic'
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
  const announcements = await getAnnouncements('announcements_bar')

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
    <html lang="it" className={`
      ${tiempos_normal.variable} ${tiempos_italic.variable}
      ${GeistSans.variable} ${GeistMono.variable} font-sans
    `}>
      <Head>
        {/* google analitycs */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-2P26D2PZB1"
          strategy="afterInteractive"
        />
        <Script strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2P26D2PZB1');
          `}
        </Script>
      </Head>
      <body>
        <Navbar customer={customer} announcements={announcements} />
        
        <Suspense fallback={null}>
          <main>{children}</main>
        </Suspense>

        <LastLink register={register} login={login} />
        
        <Suspense fallback={null}>
          <Footer products={products} />
        </Suspense>
      </body>
    </html>
  );
}
