// import { Carousel } from 'components/carousel';
// import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import ProductRow from 'components/ui/product/product-row';
import Image from 'next/image';
import { Suspense } from 'react';
import { Balancer } from 'react-wrap-balancer';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      {/* Hero */}
      <div className="relative w-screen h-[600px] bg-black text-center flex flex-col items-center justify-center gap-12 overflow-clip">
        <h1 className="text-title-1 text-white z-[1]">
          <Balancer>
            Crema Viso Protettiva <br /> anti Luce Blu.
          </Balancer>
        </h1>
        <p className="-mt-4 text-17 text-white z-[1]">
          Proteggiti dai danni della luce blu sulla tua pelle
        </p>
        <button className="button-secondary-lg z-[1]">
          Aquista ora
        </button>

        {/* background img */}
        <Image 
          src="/img/background/background-1.jpg"
          alt=""
          width={1440}
          height={900}
          className="absolute h-full w-full object-cover opacity-50 select-none z-[0]"
          draggable="false"
          style={{ userSelect: 'none' }}
        />
      </div>

      {/* Rassicurazioni */}
      <div className="w-screen bg-gray-50 flex flex-col lg:flex-row items-center justify-center lg:divide-x divide-gray1-00 gap-12 lg:gap-2.5 px-5 py-12">
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <img 
            src="/img/icon/spedizioni.svg"
            alt=""
            className="w-12 h-12 opacity-50"
          />
          <p> Spedizione gratuita </p>
          <p className='opacity-70'> goditi la spedizione super veloce, gratis in UE </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <img 
            src="/img/icon/rimborsi.svg"
            alt=""
            className="w-12 h-12 opacity-50"
          />
          <p> Rimborso assistito </p>
          <p className='opacity-70'> in UE, per tutti i prodotti disponibili </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <img 
            src="/img/icon/dubbi.svg"
            alt=""
            className="w-12 h-12 opacity-50"
          />
          <p> Hai dei dubbi? </p>
          <p className='opacity-70'> Apri qui la chat per ogni domanda sui prodotti </p>
        </div>
      </div>

      {/* Products */}
      <div className="flex flex-col gap-20 px-5 py-[120px]">
        <div className="w-full flex flex-col items-center justify-center gap-20">
          {/* title */}
          <div className="flex flex-col gap-6 text-center">
            <p className="text-title-4">
              I nostri best seller:
            </p>
            <p className="opacity-70">
              Acquista i nostri prodotti più amati
            </p>
          </div>

          {/* row 2 prodcucts */}
          <ProductRow items={[1, 2]} />
          <ProductRow items={[3, 4]} />
          <ProductRow items={[5, 6]} />
        </div>
      </div>

      {/* <ThreeItemGrid /> */}
      <Suspense>
        {/* <Carousel /> */}
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
