import AuthButtons from 'components/ui/auth-buttons';
import { getCustomer } from 'lib/shopify';
import { Product } from 'lib/shopify/types';
import { cookies } from 'next/headers';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

export default async function Footer({
  products = []
} : {
  products: Product[]
}) {
  // const menu = await getMenu('next-js-frontend-footer-menu');
  const customer = await getCustomer( cookies().get('login-token')?.value )
  const token = cookies().get('login-token')?.value

  return (
    <footer className="w-full px-5 flex flex-col">

      <div className="w-full bg-gradient-to-b from-gray-100 to-white flex flex-col lg:flex-row gap-16 lg:gap-2.5 px-5 py-16">
        <div className="w-full lg:w-1/3">
          {/* logo */}
          <img 
            src="/img/logo.png"
            alt="logo"
            className="h-5 w-auto"
          />

          <p className="text-body-1_2_170 opacity-50 mt-8 max-w-[400px] lg:pr-10">
            <Balancer>
              I cosmetici HEVOLUTA® sono prodotti in un’azienda italiana, situata in Italia e regolarmente certificata UNI EN ISO 9001:2008, UNI EN ISO 22716:2007 e ISO 13485 (produzione di dispositivi medici per uso topico), per garantire i massimi livelli di qualità e sicurezza dalla “ricerca e sviluppo”, alla produzione fino al confezionamento del cosmetico.
            </Balancer>
          </p>
        </div>
        <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start gap-16 lg:gap-2.5">
          <div className="flex flex-col gap-[20px] lg:gap-[28px] w-full">
            <p className="opacity-50">
              Pagine
            </p>

            <div className="flex flex-col items-start gap-[20px] lg:gap-[28px]">
              <Link href="/" className="button-text"> Home </Link>
              <Link href="/search" className="button-text"> Prodotti </Link>
              <Link href="/blog" className="button-text"> Blog </Link>
              <Link href="/chat" className="button-text"> Chatta con noi </Link>
              <Link href="/about" className="button-text"> Chi siamo </Link>
              <AuthButtons 
                customer={customer}
                theme="text"
                token={token}
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-[20px] lg:gap-[28px] w-full">
            <p className="opacity-50">
              Prodotti
            </p>

            <div className="flex flex-col items-start gap-[20px] lg:gap-[28px]">
              {products.slice(0, 5).map((item, index) => (
                <Link 
                  key={'footer-product'+index}
                  href={`/products/${item.handle}`}
                  className="button-text"
                >
                  <Balancer>
                    {item.title}
                  </Balancer>
                </Link>
              ))}

              {products.length > 5 && (
                <Link 
                  href="/search"
                  className="button-text"
                >
                  <Balancer>
                    Vedi tutti...
                  </Balancer>
                </Link>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-[20px] lg:gap-[28px] w-full">
            <p className="opacity-50">
              Contatti
            </p>

            <div className="flex flex-col items-start gap-[20px] lg:gap-[28px]">
              <Link href="mailto:support@hevoluta.com" className="button-text"> support@hevoluta.com </Link>
              <p> 
                <Balancer>
                  Siamo a tua disposizione in chat dal lunedì al venerdi (CET), dalle 9:00 alle 12:00 e dalle 15:00 alle 18:00. 
                </Balancer>
              </p>
              <div className="flex gap-5">
                <Link 
                  href="https://www.tiktok.com/@moirabonaldocosmetologa?_t=8iybYXlBN5M&_r=1"
                  target='_blank'
                  rel='noreferrer noopener'
                  className="bg-black w-8 h-8 flex items-center justify-center"
                >
                  <img src="/img/social/social-tiktok.png" alt="" className="w-auto h-5" />
                </Link>
                <Link 
                  href="https://instagram.com/hevoluta"
                  target='_blank'
                  rel='noreferrer noopener'
                  className="bg-black w-8 h-8 flex items-center justify-center"
                >
                  <img src="/img/social/social-instagram.png" alt="" className="w-auto h-6" />
                </Link>
                <Link 
                  href="https://www.facebook.com/drssabonaldomoira"
                  target='_blank'
                  rel='noreferrer noopener'
                  className="bg-black w-8 h-8 flex items-center justify-center"
                >
                  <img src="/img/social/social-facebook.png" alt="" className="w-auto h-5" />
                </Link>
                <Link
                  href="https://www.youtube.com/@MoiraBonaldo"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex h-8 w-8 items-center justify-center bg-black border border-white/30"
                >
                  <img src="/img/social/social-youtube.png" alt="" className="h-4 w-auto" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full text-center bg-white px-5 py-10 flex flex-col gap-5 border-t border-gray-100">
        <p className="text-body-1_2">
          <Balancer>
            P.Iva e C.F.: 05063580285  
            &nbsp;&nbsp;|&nbsp;&nbsp;
            Sede: Via degli Alpini 13/5 35013 - Cittadella (PD) - Italia  
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link href="/policy/privacy">
              <button className="button-text">
                Privacy  
              </button>
            </Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link href="/policy/terms">
              <button className="button-text">
                Termini
              </button>
            </Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link href="/policy/delivery">
              <button className="button-text">
                Spedizioni
              </button>
            </Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link href="/policy/return">
              <button className="button-text">
                Rimborsi
              </button>
            </Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="?cookie=open-modal">
              <button className="button-text">
                Gestione cookie
              </button>
            </a>
          </Balancer>
        </p>

        <p className="text-body-1_2 opacity-50">
          © 2023 HEVOLUTA® - All rights reserved  
          &nbsp;|&nbsp; 
          Il nome Hevoluta ® è un marchio registrato di Moira Bonaldo
        </p>
      </div>

    </footer>
  );
}
