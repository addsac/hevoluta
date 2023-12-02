import MaxWidthLayout from 'components/layout/max-width-layout';
import Link from 'next/link';

export default async function Footer() {
  // const menu = await getMenu('next-js-frontend-footer-menu');

  return (
    <MaxWidthLayout>
      <footer className="w-screen px-5 flex flex-col">

        <div className="w-full bg-gradient-to-b from-gray-100 to-white flex flex-col lg:flex-row gap-16 lg:gap-2.5 px-5 py-16">
          <div className="w-full lg:w-1/3">
            {/* logo */}
            <img 
              src="/img/logo.png"
              alt="logo"
              className="h-5 w-auto"
            />
          </div>
          <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start gap-16 lg:gap-2.5">
            <div className="flex flex-col gap-[20px] lg:gap-[28px] w-full">
              <p className="opacity-50">
                Pagine
              </p>

              <div className="flex flex-col items-start gap-[20px] lg:gap-[28px]">
                <Link href="/" className="button-text"> Home </Link>
                <Link href="/products" className="button-text"> Prodotti </Link>
                <Link href="/blog" className="button-text"> Blog </Link>
                <Link href="/chat" className="button-text"> Chatta con noi </Link>
                <Link href="/about" className="button-text"> Chi siamo </Link>
                <Link href="/login" className="button-text"> Accedi </Link>
              </div>
            </div>
            
            <div className="flex flex-col gap-[20px] lg:gap-[28px] w-full">
              <p className="opacity-50">
                Prodotti
              </p>

              <div className="flex flex-col items-start gap-[20px] lg:gap-[28px]">
                <Link href="/" className="button-text"> Crema solare corpo </Link>
                <Link href="/" className="button-text"> Crema anti luce blu </Link>
                <Link href="/" className="button-text"> Siero acido ialuronico </Link>
                <Link href="/" className="button-text"> Siero ai peptidi </Link>
                <Link href="/" className="button-text"> Olio viso notte </Link>
                <Link href="/" className="button-text"> Crema viso notte </Link>
              </div>
            </div>

            <div className="flex flex-col gap-[20px] lg:gap-[28px] w-full">
              <p className="opacity-50">
                Contatti
              </p>

              <div className="flex flex-col items-start gap-[20px] lg:gap-[28px]">
                <Link href="mailto:support@hevoluta.com" className="button-text"> support@hevoluta.com </Link>
                <p> Siamo a tua disposizione in chat dal lunedì al venerdi (CET), dalle 9:00 alle 12:00 e dalle 15:00 alle 18:00. </p>
                <div className="flex gap-5">
                  <Link 
                    href="https://instagram.com/hevoluta"
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
                    href="https://instagram.com/hevoluta"
                    target='_blank'
                    rel='noreferrer noopener'
                    className="bg-black w-8 h-8 flex items-center justify-center"
                  >
                    <img src="/img/social/social-facebook.png" alt="" className="w-auto h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-center bg-white px-5 py-10 flex flex-col gap-5 border-t border-gray-100">
          <p className="text-13">
            © 2023 Mia Burton S.r.l.  |  Partita IVA: 06760920824  |  Via XII Gennaio 16 - 90141 Palermo - Italia  |  Privacy policy  |  Cookie policy  |  Gestione cookie
          </p>

          <p className="text-13 opacity-50">
            Il nome MIA BURTON® è un marchio registrato di Mia Burton S.r.l. Il logo AUO™ e il logo MIA BURTON™ sono marchi di Mia Burton S.r.l.
          </p>
        </div>

      </footer>
    </MaxWidthLayout>
  );
}
