import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

export const metadata = {
  title: 'Hevoluta – Policy',
  description:
    'Questa è la pagina delle policy di Hevoluta. Qui troverai tutte le informazioni legali sul sito e sugli acquisti dei nostri prodotti.',
  openGraph: {
    type: 'website'
  }
};

export default async function PolicyPage() {
  return (
    <>
      {/* Hero */}
      <div className="grid w-full grid-cols-12 gap-10 px-5 pb-[120px] pt-20">
        {/* menu */}
        <div className="col-span-3 hidden flex-col gap-5 lg:flex">
          <Link
            href="/policy/privacy"
            className="button-no-scale flex w-full items-center justify-start gap-2.5 border border-black px-4 py-[14px] font-mono"
          >
            Privacy policy
          </Link>
          <Link
            href="/policy/terms"
            className="button-no-scale flex w-full items-center justify-start gap-2.5 border border-gray-200 px-4 py-[14px] font-mono hover:border-gray-300"
          >
            Termini e condizioni
          </Link>
          <Link
            href="/policy/delivery"
            className="button-no-scale flex w-full items-center justify-start gap-2.5 border border-gray-200 px-4 py-[14px] font-mono hover:border-gray-300"
          >
            Spedizioni
          </Link>
          <Link
            href="/policy/return"
            className="button-no-scale flex w-full items-center justify-start gap-2.5 border border-gray-200 px-4 py-[14px] font-mono hover:border-gray-300"
          >
            Rimborsi
          </Link>
        </div>
        {/* page */}
        <div className="col-span-12 lg:col-span-9 lg:pr-10">
          <div>
            <h1 className="text-title-3 mb-10"> Privacy policy </h1>
            <p className="text-body-1_170 block whitespace-pre">
              <Balancer>
                Informativa sulla privacy di Bonaldo Moira
                <br />
                <br />
                La presente Informativa sulla privacy descrive le modalità con cui i tuoi dati
                personali vengono raccolti, utilizzati e diffusi quando visiti o effettui un
                acquisto su www.hevoluta.com (il “Sito”).
                <br />
                <br />
                RACCOLTA DATI PERSONALI
                <br />
                <br />
                Quando visiti il Sito, raccogliamo automaticamente determinate informazioni presenti
                sul tuo dispositivo, tra cui dati del browser, indirizzo IP, fuso orario e dati di
                alcuni cookie installati sul tuo dispositivo. Inoltre, mentre navighi sul Sito
                raccogliamo informazioni specifiche sulle pagine web e i prodotti che visualizzi,
                sui siti web o i termini di ricerca che ti hanno indirizzato al Sito e sul modo in
                cui interagisci con il Sito. Definiremo queste informazioni raccolte automaticamente
                come “Informazioni sul dispositivo”.
                <br />
                <br />
                Raccogliamo le Informazioni sul dispositivo con le seguenti tecnologie:
                <br />
                <br />
                <ul className="list-inside list-disc">
                  <li>
                    I “cookie” sono file di dati che vengono inseriti sul tuo dispositivo o
                    computer, e spesso includono un codice identificativo univoco anonimo. Per
                    maggiori informazioni sui cookie e su come disattivarli visita
                    http://www.allaboutcookies.org.
                  </li>
                  <li>
                    I “File di log” tengono traccia delle azioni che hanno luogo sul Sito, e
                    raccolgono dati tra cui indirizzo IP, tipo di browser, provider di servizi
                    internet, pagine di riferimento/uscita e marcatura temporale con data/ora.
                  </li>
                  <li>
                    “Web beacon”, “tag” e “pixel” sono file elettronici utilizzati per registrare
                    dati sulle tue modalità di navigazione nel Sito.
                  </li>
                </ul>
                <br />
                <br />
                In più quando effettui un acquisto o tenti di effettuare un acquisto tramite il
                Sito, raccogliamo determinate informazioni che ti riguardano, tra cui nome e
                cognome, indirizzo di fatturazione, indirizzo di spedizione, dati di pagamento
                (compresi i numeri delle carte di credito [[INSERISCI QUALSIASI ALTRO TIPO DI
                PAGAMENTO ACCETTATO]]), indirizzo email e numero di telefono. Definiremo questi dati
                “Informazioni sugli ordini”.
                <br />
                <br />
                Quando parliamo di “Dati personali” in questa Informativa sulla privacy, facciamo
                riferimento sia alle Informazioni sul dispositivo che alle Informazioni sugli
                ordini.
                <br />
                <br />
                COME UTILIZZIAMO I TUOI DATI PERSONALI?
                <br />
                <br />
                Generalmente utilizziamo le Informazioni sugli ordini per evadere gli ordini
                effettuati tramite il Sito (il che include l’elaborazione dei dati di pagamento,
                l’organizzazione della spedizione e il recapito di fatture e/o conferme d’ordine).
                Inoltre, utilizziamo le Informazioni sugli ordini per: Comunicare con te; verificare
                l’assenza di potenziali rischi o frodi negli ordini; fornirti informazioni o
                pubblicità sui nostri prodotti o servizi, se in linea con le preferenze che ci hai
                espresso. Utilizziamo le Informazioni sul dispositivo raccolte (in particolare il
                tuo indirizzo IP) per verificare l’assenza di potenziali rischi o frodi e, più in
                generale, per migliorare e ottimizzare il nostro Sito (ad esempio, generando dati
                analitici sulle modalità di navigazione e interazione con il Sito da parte dei
                nostri clienti, e per valutare il successo delle nostre campagne pubblicitarie e di
                marketing). DIVULGAZIONE DEI TUOI DATI PERSONALI
                <br />
                <br />
                Condividiamo i tuoi Dati personali con le aziende di terze parti che ci aiutano
                nello svolgimento delle attività sopra descritte. Ad esempio, ci avvaliamo di
                Shopify per la tecnologia del nostro negozio online. Trovi maggiori informazioni su
                come Shopify utilizza i tuoi Dati personali qui:
                https://it.shopify.com/legal/privacy. Inoltre ci avvaliamo di Google Analytics per
                analizzare le modalità di utilizzo del Sito da parte dei clienti. Trovi maggiori
                informazioni su come Google utilizza i tuoi Dati personali qui:
                https://www.google.com/intl/it/policies/privacy/. Volendo puoi disattivare Google
                Analytics da qui: https://tools.google.com/dlpage/gaoptout.
                <br />
                <br />
                Infine, possiamo anche comunicare a terzi i tuoi Dati personali per conformarci a
                leggi e regolamenti applicabili, rispondere a citazioni in giudizio, mandati di
                perquisizione o altre richieste legali di dati ricevute, o comunque per tutelare i
                nostri diritti. PUBBLICITÀ COMPORTAMENTALE Come descritto sopra, utilizziamo i tuoi
                Dati personali per fornirti pubblicità mirata o comunicazioni di marketing che
                riteniamo possano essere di tuo interesse. Per maggiori informazioni su come
                funziona la pubblicità mirata, visita la pagina formativa di Network Advertising
                Initiative (“NAI”) all’indirizzo web
                http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
                <br />
                <br />
                Puoi disattivare la pubblicità mirata da qui: FACEBOOK –
                https://www.facebook.com/settings/?tab=ads GOOGLE –
                https://www.google.com/settings/ads/anonymous BING –
                https://about.ads.microsoft.com/it-it/risorse/informative/annunci-personalizzati
                <br />
                <br />
                Inoltre, puoi rifiutare esplicitamente alcuni di questi servizi visitando il portale
                di recesso dalla pubblicità digitale di Digital Advertising Alliance:
                http://optout.aboutads.info/.
                <br />
                <br />
                DO NOT TRACK Tieni presente che non alteriamo le modalità di raccolta dati del
                nostro Sito e le pratiche di utilizzo dei dati in presenza del segnale Do Not Track
                del tuo browser.
                <br />
                <br />
                I TUOI DIRITTI Se risiedi in Europa, hai il diritto di accedere ai dati personali
                che ti riguardano in nostro possesso e di richiederne l’aggiornamento, la correzione
                o la rimozione. Se desideri esercitare questo diritto, contattaci attraverso i
                recapiti sottostanti. In più, se risiedi in Europa, tieni presente che trattiamo i
                tuoi dati anche per adempiere agli eventuali obblighi contrattuali nei tuoi
                confronti (ad esempio, in relazione agli ordini da te effettuati tramite il Sito) o
                comunque per perseguire i nostri legittimi interessi aziendali sopra indicati. Oltre
                a ciò, tieni presente che i tuoi dati saranno trasferiti in paesi extraeuropei tra
                cui il Canada e gli Stati Uniti.
                <br />
                <br />
                CONSERVAZIONE DEI DATI Quando effettui degli ordini tramite il Sito, conserviamo le
                Informazioni sugli ordini nei nostri archivi, tranne se e fino a quando non ci
                chiedi di eliminare tali informazioni.
                <br />
                <br />
                MODIFICHE Di volta in volta potremo aggiornare la presente Informativa sulla
                privacy, ad esempio in modo che rifletta le modifiche alle nostre procedure, oppure
                per altre ragioni operative, legali o normative. CONTATTACI Per maggiori
                informazioni sulle nostre procedure in materia di privacy, se hai domande o se vuoi
                presentare un reclamo, inviaci un’email a info@hevoluta.com o contattaci tramite
                posta ai seguenti recapiti:
                <br />
                <br />
                Via degli Alpini 13/5 35013 Cittadella PD Italia
              </Balancer>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
