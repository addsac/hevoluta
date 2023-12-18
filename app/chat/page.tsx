import ChatScript from 'components/ui/chat/chat-script';
import Divider from 'components/ui/divider';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  title: 'Hevoluta – Chatta con noi',
  description: 'La pagina riservata tra noi e te, per chattare sui dubbi e le curiosità sui nostri prodotti.',
  openGraph: {
    type: 'website'
  }
};

export default async function OrderSuccessPage() {
  return (
    <>
      {/* Hero */}
      <div className="flex w-screen px-5 pb-[120px] pt-20 lg:gap-2.5">
        <div className="hidden w-1/12 lg:block"></div> {/* margin */}
        <div className="flex w-full flex-col items-start gap-20 lg:w-10/12">
          {/* header text */}
          <div className="w-full flex flex-col gap-6">
            <h1 className="text-title-4">
                Chatta con noi per qualsiasi informazione.
            </h1>
            <p className="text-body-1_170 opacity-70">
              Per chattare istantaneamente con noi per informazioni sui prodotti o qualsiasi altro dubbio ti basta cliccare sull'icona in basso a destra.
            </p>
            <Image
                src="/img/chat/chat-icon.png"
                alt="Chat icon"
                width={100}
                height={100}
                className="w-12 h-12"
            />
            <p className="text-body-1_170 opacity-70 mt-16">
              Se vuoi scriverci una mail invece, puoi farlo a 
              <Link href="mailto:support@hevoluta.com" className="button-text ml-2 inline px-2 py-1 bg-gray-200">
                support@hevoluta.com
              </Link>
            </p>
            <p className="text-body-1_170 opacity-70">
              Se vuoi chiamarci invece, puoi farlo al numero
                <Link href="tel:+393921512787" className="button-text ml-2 inline px-2 py-1 bg-gray-200">
                    +39 392 1512787
                </Link>
            </p>
            <p className="text-body-1_170 opacity-70">
              Scrivici pure per qualsiasi informazione, siamo a tua disposizione per ogni chiarimento riguardo i nostri prodotti.
            </p>
          </div>

          <Suspense>
            {/* add this js code */}
            <ChatScript />
          </Suspense>
        </div>
      </div>

      {/* divider */}
      <Divider />
    </>
  );
}
