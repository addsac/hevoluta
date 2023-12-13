import Footer from 'components/layout/footer';
import Link from 'next/link';
import { Suspense } from 'react';
import Balancer from 'react-wrap-balancer'

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function PolicyPage({ params } : { params: { page: string } }) {
  const page = params.page;

  return (
    <>
      {/* Hero */}
      <div className="w-full px-5 pt-20 pb-[120px] grid grid-cols-12 gap-10">
        {/* menu */}
        <div className="hidden lg:flex col-span-3 flex-col gap-5">
            <Link 
                href='/policy/privacy'
                className={`
                    w-full border py-[14px] px-4 flex items-center justify-start gap-2.5 button-no-scale font-mono
                    ${(page === '' || page === 'privacy') ? 'border-black' : 'border-gray-200 hover:border-gray-300'}
                `}
            >
                Privacy policy
            </Link>
            <Link 
                href='/policy/cookie'
                className={`
                    w-full border py-[14px] px-4 flex items-center justify-start gap-2.5 button-no-scale font-mono
                    ${page === 'cookie' ? 'border-black' : 'border-gray-200 hover:border-gray-300'}
                `}
            >
                Cookie policy
            </Link>
            <Link 
                href='/policy/terms'
                className={`
                    w-full border py-[14px] px-4 flex items-center justify-start gap-2.5 button-no-scale font-mono
                    ${page === 'terms' ? 'border-black' : 'border-gray-200 hover:border-gray-300'}
                `}
            >
                Termini e condizioni
            </Link>
            <Link 
                href='/policy/delivery'
                className={`
                    w-full border py-[14px] px-4 flex items-center justify-start gap-2.5 button-no-scale font-mono
                    ${page === 'delivery' ? 'border-black' : 'border-gray-200 hover:border-gray-300'}
                `}
            >
                Spedizioni
            </Link>
            <Link 
                href='/policy/return'
                className={`
                    w-full border py-[14px] px-4 flex items-center justify-start gap-2.5 button-no-scale font-mono
                    ${page === 'return' ? 'border-black' : 'border-gray-200 hover:border-gray-300'}
                `}
            >
                Rimborsi
            </Link>
        </div>
        {/* page */}
        <div className="col-span-12 lg:col-span-9 lg:pr-10">
            {page === 'privacy' && (
                <div>
                    <h1 className="text-title-3 mb-10"> Privacy policy </h1>
                    <p className="text-body-1_170">
                        <Balancer>
                            Benvenuto sul sito web www.stoneisland.com.
                            <br /><br />
                            Per noi la tua privacy e la sicurezza dei tuoi dati personali sono molto importanti, per questo raccogliamo e gestiamo i tuoi dati personali con la massima attenzione e adottiamo misure specifiche per custodirli al sicuro.
                            Di seguito trovi le principali informazioni sul trattamento dei tuoi dati personali in relazione alla tua navigazione di www.stoneisland.com e all’utilizzo dei servizi offerti. Per avere indicazioni dettagliate su come gestiamo i tuoi dati personali ti invitiamo a leggere la nostra Informativa Privacy.
                            <br /><br />
                            Ti preghiamo inoltre di leggere la ‘Cookie Policy’, le ‘Condizioni Generali d'Uso’ del sito www.stoneisland.com (di seguito, anche il “Sito”) e le ‘Condizioni relative alla registrazione del My Account’, le quali contengono dettagliate informazioni in merito alle condizioni relative ai nostri servizi. Alcuni servizi possono essere soggetti a specifici termini legali, in tal caso sarà nostra cura darti tutte le opportune informazioni di volta in volta.
                            <br /><br />
                            Q&A IN MERITO ALLA RECENTE “COMUNICAZIONE IN MATERIA DI PRIVACY”
                            Quando è avvenuto l’attacco informatico?L’attacco informatico è stato identificato e gestito prontamente il 22 dicembre. Purtroppo l’estrema sofisticatezza delle tecniche messe in atto dai criminali ha reso particolarmente complessa e lunga la ricostruzione dell’accaduto anche in riferimento ad un’eventuale compromissione di alcuni dati dei clienti del sito e-commerce che sono stati informati non appena l’indagine ha confermato il rischio di una possibile esfiltrazione di dati.
                            Come faccio a sapere se anche i miei dati personali sono stati impattati dall’attacco e, in tal caso, quali?Al momento quello che possiamo confermare è che c’è stato un accesso non autorizzato con possibile esfiltrazione anche di alcuni Suoi dati personali ivi compresi quelli di contatto, ciò in relazione ai soli clienti del sito e-commerce www.stoneisland.com. Sottolineiamo che i dati relativi alle modalità di pagamento (iban, carte di credito o altro) e/o documenti di identità (carta di identità, passaporto o altro) non sono salvati nei nostri sistemi e quindi non sono stati oggetto di esfiltrazione.
                            Cosa significa questa comunicazione per me? Cosa devo fare?La comunicazione è volta ad informare gli interessati in merito alle possibili conseguenze dell’attacco informatico. Pertanto, attraverso questa comunicazione, raccomandiamo di diffidare di comunicazioni da parte di terzi che mostrino di conoscere alcune Sue informazioni e di non usare credenziali (ID e password) che siano facilmente identificabili sulla base dei dati che ha fornito al momento della registrazione.
                            E cosa si intende esattamente per data breach?Il "data breach" è un incidente informatico che ha ad oggetto i dati personali e che potrebbe avere degli impatti sugli interessati; in questo caso, ha comportato l’accesso abusivo di terzi ai sistemi informatici della società e potrebbe aver causato l’esfiltrazione di alcuni dati personali dei soli clienti del sito e-commerce ivi compresi quelli di contatto. Sottolineiamo che i dati relativi alle modalità di pagamento (iban, carte di credito o altro) e/o documenti di identità (carta di identità, passaporto o altro) non sono salvati nei nostri sistemi e quindi non sono stati oggetto di esfiltrazione.
                            Devo effettuare una comunicazione ufficiale a qualche Autorità? No, il soggetto tenuto a farlo è Stone Island in quanto titolare, che ha già tempestivamente notificato l’evento al Garante per la protezione dei dati personali. Inoltre, l’evento è stato denunciato anche alle Autorità competenti. Come sempre buona prassi, in futuro, solo qualora Lei ravvisasse di essere vittima di qualche reato (quali furto di identità e/o frode), le suggeriamo di procedere ad una denuncia alle autorità competenti.
                            Sono stati presi dati carta di credito? Devo bloccare la mia carta di credito o altri metodi di pagamento?I dati relativi alle modalità di pagamento (iban, carte di credito o altro) e/o documenti di identità (carta di identità, passaporto o altro) non sono salvati nei nostri sistemi e quindi non sono stati oggetto di esfiltrazione.
                            Devo contattare il dipartimento di sicurezza o antifrode della mia banca?No, dati relativi alle modalità di pagamento (iban, carte di credito o altro) e/o documenti di identità (carta di identità, passaporto o altro) non sono salvati nei nostri sistemi e quindi non sono stati oggetto di esfiltrazione.
                            Devo cambiare i miei documenti di identità, email e numero di telefono?No, a nostro giudizio non c’è questa necessità. Le raccomandiamo comunque di diffidare di comunicazioni da parte di terzi che mostrino di conoscere alcune informazioni su di Lei e di non usare credenziali (ID e password) che siano facilmente identificabili sulla base dei Suoi dati.
                        </Balancer>
                    </p>
                </div>
            )}
            
            {page === 'cookie' && (
                <div>
                    <h1 className="text-title-3 mb-10"> Cookie policy </h1>
                </div>
            )}
            
            {page === 'terms' && (
                <div>
                    <h1 className="text-title-3 mb-10"> Termini e condizioni </h1>
                </div>
            )}
            
            {page === 'delivery' && (
                <div>
                    <h1 className="text-title-3 mb-10"> Spedizione </h1>
                </div>
            )}
            
            {page === 'return' && (
                <div>
                    <h1 className="text-title-3 mb-10"> Rimborsi </h1>
                </div>
            )}
        </div>
      </div>
    </>
  );
}
