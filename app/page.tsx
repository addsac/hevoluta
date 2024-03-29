import BlogCards from 'components/ui/blog/blog-cards';
import Divider from 'components/ui/divider';
import HeroSectionAnimated from 'components/ui/hero-section-animated';
import ImageDescription from 'components/ui/image-description';
import ProductRows from 'components/ui/product/product-rows';
import ProductRowsSkeleton from 'components/ui/product/product-rows-skeleton';
import { defaultSort } from 'lib/constants';
import { getArticles, getProducts } from 'lib/shopify';
import { divideArrayIntoGroups } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export const metadata = {
  title: 'Hevoluta',
  description: 'Scopri i prodotti di Hevoluta nati per prendersi cura della persona da un punto di vista più ampio, semina la belleza, raccogli la salute.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  const { sortKey, reverse } = defaultSort;

  // before i used => getCollectionProducts, after i use 
  const collections = await getProducts({ sortKey, reverse: true })
  /* const collections = await getCollectionProducts({
    'collection': "homepage-featured-items",
  }); */

  let articles = await getArticles({
    first: 3,
    title: `title:${process.env.BLOG_TITLE}`,
    sortKey: 'PUBLISHED_AT',
    reverse: true,
  });
  let arrayOfArticlesdividedBy3: any = divideArrayIntoGroups(articles.edges, 3);  

  return (
    <>
      {/* Hero */}
      <div className="relative w-screen h-[600px] bg-black text-center flex flex-col items-center justify-center gap-12 overflow-clip px-2.5">
        <HeroSectionAnimated />

        {/* background img */}
        <Image 
          src="/img/background/background-1.jpg"
          alt=""
          width={1440}
          height={900}
          priority={true}
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
          <p> Spedizione gratuita da 65€ </p>
          <p className='opacity-50'> goditi la spedizione veloce, gratis in UE </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <img 
            src="/img/icon/rimborsi.svg"
            alt=""
            className="w-12 h-12 opacity-50"
          />
          <p> Rimborso assistito </p>
          <p className='opacity-50'> Se ti serve cambiare o rendere un acquisto </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <img 
            src="/img/icon/made-in-italy.svg"
            alt=""
            className="w-12 h-12 opacity-50"
          />
          <p> 100% Made in Italy </p>
          <p className='opacity-50'>  Progettati, formulati e prodotti in Italia </p>
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

          {/* rows prodcucts */}
          <Suspense fallback={<ProductRowsSkeleton />}>
            <ProductRows items={collections.slice(0, 8)} />
          </Suspense>

          <Link href="/search">
            <button className="button-secondary-base">
              Vedi tutti i prodotti
            </button>
          </Link>
        </div>
      </div>

      {/* Image description */}
      <ImageDescription 
        subtitle={"Perchè scegliere Hevoluta?"}
        title={"Offriamo cosmetici sicuri,"} 
        description={"efficaci e innovativi che agiscono sulla pelle proteggendola e accompagnandola nel tempo a risolvere i cambiamenti che deve affrontare."} 
        src="/img/background/background-2.jpg"
        href="/search" 
      />

      {/* About our products */}
      {/* <div className="flex flex-col gap-16 px-5 py-[120px]">
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <p className="text-title-2">
            Riguardo ai nostri prodotti
          </p>
          <p className="text-body-2 opacity-80">
            Consideriamo l'innovazione di fondamentale importanza e ci impegniamo costantemente a costruire formule cosmetiche di alta qualità, e che abbiano un impatto reale sulla vita delle persone. Unisciti a noi nell'abbracciare questi principi.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-2.5 bg-gray-50 border-y border-gray-200 divide-y lg:divide-x lg:divide-y-0 divide-gray-200">
          <div className="col-span-12 lg:col-span-3 flex flex-col justify-center items-center gap-4 pb-8 lg:pb-10 py-10">
            <p className="text-title-4">
              Fondati nel
            </p>
            <p className="text-body-1 opacity-80">
              Marzo 2021
            </p>
          </div>
          <div className="col-span-12 lg:col-span-3 flex flex-col justify-center items-center gap-4 pb-8 lg:pb-10 py-10">
            <p className="text-title-4">
              10.000+
            </p>
            <p className="text-body-1 opacity-80">
              Clienti soddisfatti
            </p>
          </div>
          <div className="col-span-12 lg:col-span-3 flex flex-col justify-center items-center gap-4 pb-8 lg:pb-10 py-10">
            <p className="text-title-4">
              100+
            </p>
            <p className="text-body-1 opacity-80">
              Prodotti sviluppati
            </p>
          </div>
          <div className="col-span-12 lg:col-span-3 flex flex-col justify-center items-center gap-4 pb-8 lg:pb-10 py-10">
            <p className="text-title-4">
              100% Italiano
            </p>
            <p className="text-body-1 opacity-80">
              Progettato, formulato e prodottto
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-1/2 pr-12">
            <p className="text-title-6">
              Dedizione e passione nel formulare  prodotti di altissima qualità
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-body-1_170 opacity-80">
              Le nostre convinzioni vanno oltre l'estetica, riconoscendo che una formula eccezionale comprende funzionalità, esperienza della persona e attenzione meticolosa agli ingredienti. Con profonda cura e impegno inflessibile per l'eccellenza, il nostro team di esperti crea prodotti che sono funzionali allo scopo specifico prefissato.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-1/2">
            <p className="text-title-6">
              Scrivono di noi
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex items-center gap-5">
            <div className="h-12 w-24 bg-gray-100"></div>
            <div className="h-12 w-24 bg-gray-100"></div>
            <div className="h-12 w-24 bg-gray-100"></div>
            <div className="h-12 w-24 bg-gray-100"></div>
            <div className="h-12 w-24 bg-gray-100"></div>
          </div>
        </div>
      </div> */}

      {/* divider */}
      <Divider />

      {/* Blog */}
      <Suspense fallback={null}>
        <div className="flex flex-col gap-20 px-5 py-[120px]">
          <div className="w-full flex flex-col items-center justify-center gap-20">
            {/* title */}
            <p className="text-title-4 text-center">
              Ultime ricerche
            </p>

            {/* 3 articles */}
            <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-2.5">
              <BlogCards 
                arrayOfArticlesdividedBy3={arrayOfArticlesdividedBy3}
                />
            </div>
          </div>
        </div>
      </Suspense>

      {/* divider */}
      <Divider />
    </>
  );
}
