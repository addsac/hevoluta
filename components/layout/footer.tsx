import Link from 'next/link'
import MaxWidthLayout from 'components/layout/max-width-layout'

export default async function Footer() {
  // const menu = await getMenu('next-js-frontend-footer-menu');

  return (
    <MaxWidthLayout>
      <footer className="w-screen px-5 flex flex-col">

        <div className="w-full bg-gray-100 grid grid-cols-12 gap-2.5 px-5 py-16">
          <div className="col-span-4">
            {/* logo */}
            <img 
              src="/img/logo.png"
              alt="logo"
              className="h-5 w-auto"
            />
          </div>
          <div className="col-span-8 flex items-start gap-2.5">
            <div className="flex flex-col gap-10 w-full">
              <p>
                Pagine
              </p>

              <div className="flex flex-col gap-[28px]">
                <p> Home </p>
                <p> Prodotti </p>
                <p> Blog </p>
                <p> Chatta con noi </p>
                <p> Chi siamo </p>
                <p> Accedi </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-10 w-full">
              <p>
                Prodotti
              </p>

              <div className="flex flex-col gap-[28px]">
                <p> Crema corpo </p>
                <p> Olio viso </p>
                <p> Crema notte </p>
                <p> Acido ialuronico </p>
                <p> Crema anti luce blu </p>
              </div>
            </div>

            <div className="flex flex-col gap-10 w-full">
              <p>
                Contatti
              </p>

              <div className="flex flex-col gap-[28px]">
                <p> support@hevoluta.com </p>
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
                    <img src="/img/social/social-instagram.png" alt="" className="w-auto h-5" />
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

        <div className="w-full text-center bg-gray-100 px-5 py-10 flex flex-col gap-5 border-t border-gray-300">
          <p>
            © 2023 Mia Burton S.r.l.  |  Partita IVA: 06760920824  |  Via XII Gennaio 16 - 90141 Palermo - Italia  |  Privacy policy  |  Cookie policy  |  Gestione cookie
          </p>

          <p>
            Il nome MIA BURTON® è un marchio registrato di Mia Burton S.r.l. Il logo AUO™ e il logo MIA BURTON™ sono marchi di Mia Burton S.r.l.
          </p>
        </div>

      </footer>
    </MaxWidthLayout>
  );
}
