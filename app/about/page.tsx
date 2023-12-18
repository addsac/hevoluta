import Divider from 'components/ui/divider';
import LastLink from 'components/ui/last-link';
import { Suspense } from 'react';
import Balancer from 'react-wrap-balancer';

export const runtime = 'edge';

export const metadata = {
  title: 'Hevoluta – About',
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function AbotuPage() {
  return (
    <>
      <div className="w-screen flex lg:gap-2.5 px-5 pt-20 pb-[120px]">
        <div className="hidden lg:block w-1/12"></div> {/* margin */}
        <div className="w-full lg:w-10/12 flex flex-col items-center gap-20 lg:gap-[120px]">
            {/* Hero */}
            <div className="flex flex-col gap-20">
                <div className="flex flex-col gap-6">
                    <h1 className="text-title-2">
                        Hevoluta – dove bellezza e salute si fondono.
                    </h1>
                    <p className="text-body-2_190">
                        <Balancer>
                            Hevoluta è un marchio italiano che nasce dall’idea di creare prodotti di bellezza e salute di alta qualità, esclusivamente Made in Italy. La necessità del progetto nasce nel vedere in commercio prodotti molto usati, ma che non rispettano sempre la persona, con ingredienti discutibili e potenzialmente dannosi, a scapito della loro utilità. Su questo principio basiamo tutti i prodotti sviluppati di Hevoluta.
                        </Balancer>
                    </p>
                </div>
                
                {/* img */}
                <div className="w-full h-[500px] bg-black"></div> 
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-10">
                <div className="flex flex-col items-center justify-center text-center gap-6">
                    <img src="/img/about/flower.jpg" alt="" className="w-[150px] h-[150px] opacity-80 grayscale" />

                    <div className="flex flex-col gap-3">
                        <p className="text-body-1_3 opacity-50 uppercase font-mono">
                            Fibra extra lunga
                        </p>
                        <p className="text-title-4">
                            Tocco morbido
                        </p>
                        <p className="text-body-1_170 opacity-50">
                            <Balancer>
                                Solo cotoni di finissima qualità lavorati in Italia che regalano una sensazione di incredibile morbidezza.
                            </Balancer>
                        </p>
                    </div>
                </div>
                <div className="hidden lg:block h-full w-px bg-gray-200"></div> {/* divider */}
                <div className="flex flex-col items-center justify-center text-center gap-6">
                    <img src="/img/about/flower.jpg" alt="" className="w-[150px] h-[150px] opacity-80 grayscale" />

                    <div className="flex flex-col gap-3">
                        <p className="text-body-1_3 opacity-50 uppercase font-mono">
                            Doppio riporto
                        </p>
                        <p className="text-title-4">
                            Qualità duratura
                        </p>
                        <p className="text-body-1_170 opacity-50">
                            <Balancer>
                                Lavorazioni artigianali danno vita a tessuti pregiati che mantengono la loro bellezza nel tempo.
                            </Balancer>
                        </p>
                    </div>
                </div>
                <div className="hidden lg:block h-full w-px bg-gray-200"></div> {/* divider */}
                <div className="flex flex-col items-center justify-center text-center gap-6">
                    <img src="/img/about/flower.jpg" alt="" className="w-[150px] h-[150px] opacity-80 grayscale" />

                    <div className="flex flex-col gap-3">
                        <p className="text-body-1_3 opacity-50 uppercase font-mono">
                            tecniche sartoriali
                        </p>
                        <p className="text-title-4">
                            Fit confortevole
                        </p>
                        <p className="text-body-1_170 opacity-50">
                            <Balancer>
                                Un processo studiato secondo l'antica tradizione sartoriale per un capo dalla vestibilità perfetta.
                            </Balancer>
                        </p>
                    </div>
                </div>
            </div>

            {/* citation */}
            <div className="w-full bg-citation flex flex-col items-center gap-10 px-5 py-12 text-center">
                <p className="text-title-5_190 max-w-[900px]">
                    <Balancer>
                        Flower Mountain è il brand di sneakers nato nel 2015 dall’amicizia tra Keisuke Ota di Tokyo e Yang Chao di Pechino, che hanno in comune la passione per il trekking in montagna, il campeggio e, ovviamente, le calzature.
                    </Balancer>
                </p>
                <p className="opacity-50">
                    Moira Bonaldo – La fondatrice
                </p>
            </div>

            <p className="text-title-4">
                I Principi alla base dei nostri prodotti
            </p>

            <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
                {/* photo */}
                <div className="w-full">
                    <div className="w-full min-h-[200px] aspect-square bg-black"></div>
                </div>

                {/* texts */}
                <div className="w-full">
                    <p className="text-title-4_170">
                        <Balancer>
                            Occhiali a maschera, Il trend inaspettato dell’autunno/inverno 2023
                        </Balancer>
                    </p>
                    <p className="text-body-1_170 mt-8 opacity-70">
                        <Balancer>
                            Our first product and still the most popular, the Cotton T-Shirt is the cornerstone of any man’s wardrobe. Made from the world’s highest quality cotton for extra softness and durability. Made to Order in Portugal. Our first product and still the most popular, the Cotton T-Shirt is the cornerstone  of any man’s wardrobe. Made from the world’s highest quality cotton for extra softness and durability. 
                        </Balancer>
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
                {/* photo */}
                <div className="w-full">
                    <div className="w-full min-h-[200px] aspect-square bg-black"></div>
                </div>

                {/* texts */}
                <div className="w-full">
                    <p className="text-title-4_170">
                        <Balancer>
                            Occhiali a maschera, Il trend inaspettato dell’autunno/inverno 2023
                        </Balancer>
                    </p>
                    <p className="text-body-1_170 mt-8 opacity-70">
                        <Balancer>
                            Our first product and still the most popular, the Cotton T-Shirt is the cornerstone of any man’s wardrobe. Made from the world’s highest quality cotton for extra softness and durability. Made to Order in Portugal. Our first product and still the most popular, the Cotton T-Shirt is the cornerstone  of any man’s wardrobe. Made from the world’s highest quality cotton for extra softness and durability. 
                        </Balancer>
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
                {/* photo */}
                <div className="w-full">
                    <div className="w-full min-h-[200px] aspect-square bg-black"></div>
                </div>

                {/* texts */}
                <div className="w-full">
                    <p className="text-title-4_170">
                        <Balancer>
                            Occhiali a maschera, Il trend inaspettato dell’autunno/inverno 2023
                        </Balancer>
                    </p>
                    <p className="text-body-1_170 mt-8 opacity-70">
                        <Balancer>
                            Our first product and still the most popular, the Cotton T-Shirt is the cornerstone of any man’s wardrobe. Made from the world’s highest quality cotton for extra softness and durability. Made to Order in Portugal. Our first product and still the most popular, the Cotton T-Shirt is the cornerstone  of any man’s wardrobe. Made from the world’s highest quality cotton for extra softness and durability. 
                        </Balancer>
                    </p>
                </div>
            </div>
        </div>
        <div className="hidden lg:block w-1/12"></div> {/* margin */}
      </div>

      {/* divider */}
      <Divider />
    </>
  );
}
