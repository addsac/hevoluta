import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

export const runtime = 'edge';

export const metadata = {
  title: 'Hevoluta – Policy',
  description:
    'Questa è la pagina delle policy di Hevoluta. Qui troverai tutte le informazioni legali sul sito e sugli acquisti dei nostri prodotti.',
  openGraph: {
    type: 'website'
  }
};

export default async function PolicyPage({ params }: { params: { page: string } }) {
  const page = params.page;

  return (
    <>
      {/* Hero */}
      <div className="grid w-full grid-cols-12 gap-10 px-5 pb-[120px] pt-20">
        {/* menu */}
        <div className="col-span-3 hidden flex-col gap-5 lg:flex">
          <Link
            href="/policy/privacy"
            className="button-no-scale flex w-full items-center justify-start gap-2.5 border border-gray-200 px-4 py-[14px] font-mono hover:border-gray-300"
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
            className="button-no-scale flex w-full items-center justify-start gap-2.5 border border-black px-4 py-[14px] font-mono"
          >
            Rimborsi
          </Link>
        </div>
        {/* page */}
        <div className="col-span-12 lg:col-span-9 lg:pr-10">
          <div>
            <h1 className="text-title-3 mb-10"> Rimborsi </h1>
            <p className="text-body-1_170 whitespace-pre">
              <Balancer>
                La nostra policy prevede un termine di 30 giorni per i resi. Se sono trascorsi 30
                giorni dalla data dell’acquisto, purtroppo non possiamo offrirti alcun rimborso o
                cambio.
                <br />
                <br />
                Affinché sia idoneo al reso, l’articolo deve essere intatto e nelle stesse
                condizioni in cui lo hai ricevuto. Deve anche essere nella sua confezione originale.
                <br />
                <br />
                Per diverse tipologie di beni è escluso il reso. I beni deperibili come cibo, fiori,
                giornali o riviste non possono essere oggetto di reso. Inoltre non accettiamo il
                reso di prodotti intimi o sanitari, materiali pericolosi e liquidi o gas
                infiammabili.
                <br />
                <br />
                Ulteriori articoli per i quali è escluso il reso: * Buoni regalo * Prodotti software
                scaricabili * Alcuni articoli per la salute e la cura della persona
                <br />
                <br />
                Ai fini del reso, richiediamo una ricevuta o una prova di acquisto. Per favore non
                rispedire indietro il tuo acquisto al produttore.
                <br />
                <br />
                In alcuni casi sono concessi solo rimborsi parziali (se applicabili): * Libro con
                evidenti segni d’uso * CD, DVD, nastro VHS, software, videogioco, cassetta o disco
                in vinile che sia stato aperto. * Qualsiasi articolo che non si trovi nel suo stato
                originario, sia danneggiato o con parti mancanti per cause estranee a un nostro
                errore. * Qualsiasi articolo restituito più di 30 giorni dopo la consegna Rimborsi
                (se applicabile) Una volta ricevuto e ispezionato il reso, ti invieremo un’email per
                comunicarti l’avvenuta ricezione dell’articolo. Ti comunicheremo anche
                l’approvazione o il rifiuto della tua richiesta di rimborso. Se la tua richiesta è
                approvata, il rimborso sarà elaborato e verrà automaticamente applicato un credito
                sulla tua carta o metodo di pagamento originario, entro un certo numero di giorni.
                <br />
                <br />
                Rimborsi tardivi o inevasi (se applicabile) Se non hai ancora ricevuto un rimborso,
                innanzitutto ricontrolla il tuo conto bancario. Poi contatta l’azienda emittente
                della carta di credito; può occorrere del tempo prima che il rimborso sia
                formalmente registrato. Quindi contatta la tua banca. Spesso sono previsti dei tempi
                di elaborazione per la registrazione di un rimborso. Se hai già seguito questi
                passaggi e non hai ancora ricevuto il rimborso, scrivici al seguente indirizzo:
                info@hevoluta.com.
                <br />
                <br />
                Cambi (se applicabile) Sostituiamo gli articoli solo se difettosi o danneggiati. Se
                ti occorre un cambio con lo stesso articolo, inviaci un’email a info@hevoluta.com e
                spedisci l’articolo al seguente indirizzo: Via degli Alpini 13/5 35013 Cittadella PD
                Italia.
                <br />
                <br />
                Regali Se al momento dell’acquisto l’articolo è stato contrassegnato come regalo e
                spedito direttamente a te, riceverai un buono corrispondente al valore del reso.
                Alla ricezione dell’articolo oggetto di reso, ti sarà spedito per posta il buono
                regalo.
                <br />
                <br />
                Se l’articolo non è stato contrassegnato come regalo al momento dell’acquisto, o se
                chi ha fatto il regalo si è fatto spedire l’ordine per consegnartelo di persona,
                invieremo un rimborso a chi ha fatto il regalo e questi verrà a conoscenza del tuo
                reso. Spedizione Per effettuare un reso, spedisci il prodotto al seguente indirizzo:
                Via degli Alpini 13/5 35013 Cittadella PD Italia.
                <br />
                <br />
                I costi di spedizione per il reso dell’articolo saranno a tuo carico. I costi di
                spedizione non sono rimborsabili. Se ricevi un rimborso, i costi di spedizione del
                reso non saranno inclusi nel rimborso.
                <br />
                <br />
                A seconda del paese in cui vivi, il tempo necessario per il recapito del prodotto in
                sostituzione può variare.
                <br />
                <br />
                Se devi spedire un articolo del valore di oltre 75 €, considera di utilizzare un
                servizio di spedizione tracciabile o di assicurare la spedizione. Non garantiamo che
                riceveremo l’articolo oggetto di reso.
              </Balancer>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
