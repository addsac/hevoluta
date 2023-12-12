import Footer from 'components/layout/footer';
import Divider from 'components/ui/divider';
import LastLink from 'components/ui/last-link';
import OrderSuccessTable from 'components/ui/order/order-success-table';
import Link from 'next/link';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function OrderSuccessPage() {
  // const blogs = await getBlogs();

  return (
    <>
      {/* Hero */}
      <div className="flex w-screen px-5 pb-[120px] pt-20 lg:gap-2.5">
        <div className="hidden w-1/12 lg:block"></div> {/* margin */}
        <div className="flex w-full flex-col items-start gap-20 lg:w-10/12">
          {/* header text */}
          <div className="w-full flex flex-col gap-6 text-center">
            <h1 className="text-title-4">Il tuo ordine è stato ricevuto!</h1>
            <p className="opacity-70">
              Riceverai a breve una mail con il resoconto del tuo ordine.
            </p>
          </div>

          {/* data */}
          <Suspense>
            <OrderSuccessTable />
          </Suspense>

          <Link href="/" className="button-primary-base">
            Torna alla home
          </Link>
        </div>
      </div>

      {/* divider */}
      <Divider />

      {/* Last links */}
      <Suspense>
        <LastLink />
      </Suspense>

      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
