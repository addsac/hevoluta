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

export default async function PolicyPage() {
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
            className="button-no-scale flex w-full items-center justify-start gap-2.5 border border-black px-4 py-[14px] font-mono"
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
            <h1 className="text-title-3 mb-10"> Spedizione </h1>
            <p className="text-body-1_170 whitespace-pre">
              <Balancer>
                Titolare della spedizione I prodotti HEVOLUTA® è un prodotto di Bonaldo Moira
                vengono spediti in tutto il territorio italiano dalla società individuale titolare
                del marchio.
                <br />
                <br />
                Informazioni e costi HEVOLUTA® è costantemente impegnata coi principali Corrieri
                Espresso nazionali per garantire il minor costo di spedizione per ogni zona d’Italia
                e il miglior servizio in termini di tempi, garanzia di consegna e servizio al
                Cliente.
                <br />
                <br />
                I prodotti ordinati vengono recapitati all’indirizzo postale specificato dal Cliente
                nel modulo d’ordine. Registrandosi al sito sarà possibile accedere alla sezione
                riservata e gestire da qui una rubrica di indirizzi ai quali fare recapitare i
                propri ordini. Lo stato dell’ordine sarà sempre consultabile nella sezione personale
                tramite il proprio account.
                <br />
                <br />
                Le consegne vengono effettuate dal lunedì al venerdì, nel normale orario di ufficio,
                escluse le festività nazionali e le chiusure aziendali.
                <br />
                <br />
                Nel momento in cui l’ordine viene consegnato al corriere verrà inviata un’e-mail
                contenente un link per verificare il percorso della spedizione dalla presa in carico
                del corriere fino all’effettiva consegna. La consegna è ritenuta completata nel
                momento in cui il prodotto è messo a disposizione del Cliente all’indirizzo
                specificato nel modulo d’ordine.
                <br />
                <br />
                Al momento della consegna dei Prodotti da parte del corriere incaricato da
                HEVOLUTA®, il Cliente è tenuto a controllare scrupolosamente:
                <br />
                a) che l’imballo non risulti danneggiato o comunque alterato;
                <br />
                b) che il numero di pezzi in consegna corrisponda a quanto indicato nel documento di
                trasporto.
                <br />
                <br />
                Eventuali danni agli imballi e ai Prodotti o la mancata corrispondenza del numero
                dei pezzi/colli o delle indicazioni devono essere immediatamente contestati dal
                Cliente, che potrà contattare HEVOLUTA® attraverso il Servizio Clienti specificando
                l’ordine per il quale si sono verificati tali disguidi.
                <br />
                <br />
                Mancata consegna In caso di mancata consegna per assenza del destinatario
                all’indirizzo specificato, il corriere invierà una email di avviso al Cliente con un
                link per concordare un appuntamento di consegna. Il cliente potrà indicare una data
                e se l’autista dovrà passare di mattina o di pomeriggio. In caso di impossibilità
                nell’eseguire la consegna anche nel giorno concordato per assenza del destinatario,
                Il Servizio Clienti tenterà di contattare il Cliente per programmare una nuova
                consegna. Nel caso in cui il Servizio Clienti non dovesse riuscire a contattare il
                Cliente per i successivi 10 giorni lavorativi o nel caso di ulteriore impossibilità
                di consegna per assenza del destinatario, i Prodotti oggetto dell’ordine saranno
                riconsegnati a HEVOLUTA®. Decorsi 30 giorni dalla data in cui i Prodotti oggetto
                dell’ordine sono stati rispediti a HEVOLUTA® per impossibilità nell’esecuzione
                della consegna, il contratto si intenderà risolto e l’ordine d’acquisto annullato ai
                sensi dell’art. 1456 c.c. HEVOLUTA® procederà al rimborso della somma pagata dal
                Cliente al netto delle spese di restituzione dei Prodotti e delle spese di custodia
                degli stessi presso la filiale del corriere incaricato per la consegna. La
                risoluzione del contratto e l’importo del rimborso verranno comunicati via e-mail.
                L’importo del rimborso verrà accreditato sul mezzo di pagamento utilizzato dal
                Cliente per l’acquisto. Nel caso in cui, prima del decorso dei 30 giorni, il Cliente
                chieda di ricevere nuovamente i Prodotti acquistati, HEVOLUTA® procederà alla nuova
                consegna previo addebito, oltre alle spese della stessa, delle spese di restituzione
                dei Prodotti a HEVOLUTA® e delle spese di custodia.
                <br />
                <br />
                Tempi di spedizione HEVOLUTA® assicura la ricezione del proprio pacco entro 96 ore
                dalla presa in consegna dell’ordine da parte dei nostri corrieri. Le tempistiche di
                consegna possono variare per cause di forza maggiore come condizioni atmosferiche e
                scioperi. Le consegne vengono effettuate dal lunedì al venerdì, nel normale orario
                di ufficio, escluse le festività nazionali e le chiusure aziendali, recapitando i
                prodotti all’indirizzo specificato al momento dell’ordine. Lo stato dell’ordine sarà
                sempre consultabile mediante la sezione “I miei Ordini” nell’area riservata del
                sito, dove è possibile verificare il percorso del pacco dalla presa in carico del
                corriere fino all’effettiva consegna.
                <br />
                <br />
                Modalità di pagamento HEVOLUTA®, offre un’unica modalità di pagamento attraverso
                Shopify, che garantisce un sistema rapido e sicuro. Una volta completato il
                pagamento con Shopify, l’acquirente verrà reindirizzato sul sito Shopify, dove potrà
                accedere al proprio conto inserendo l’indirizzo e-mail personale e la propria
                password. Scegliendo di pagare con Shopify l’importo viene addebitato direttamente
                sulla carta di credito (Visa, Visa Electron, MasterCard) o prepagata (PostePay)
                assegnata. Shopify tutela le informazioni dell’acquirente in quanto non vengono
                passate informazioni finanziare. Ad ogni transazione eseguita con questo metodo
                verrà inviata una e-mail di conferma da Shopify. L’importo dell’ordine viene
                addebitato sul conto Shopify al momento dell’acquisizione dell’ordine. In caso di
                annullamento l’importo viene rimborsato sul conto Shopify del Cliente.
                <br />
                <br />
                Sicurezza del pagamento Gli acquisti fatti su capehorn.it sono sicuri e garantiti.
                Il pagamento online è completamente privo di rischi. Le informazioni relative ai
                pagamenti vengono criptate durante la trasmissione e gestite direttamente da
                Shopify. In nessun caso manifattura HEVOLUTA® verrà a conoscenza del numero di
                carta di credito, né tratterà o conserverà i dati forniti sui propri sistemi.
                HEVOLUTA® si limiterà a ricevere comunicazione dell’esito positivo della
                transazione.
                <br />
                <br />
                Tutti i dati vengono trasferiti in forma codificata mediante certificato SSL e non
                sono pertanto intercettabili da soggetti esterni. Shopify è un sistema di pagamento
                rapido e sicuro, in cui l’importo viene addebitato direttamente sulla Carta di
                Credito o prepagata assegnata dal cliente, tutelando le informazioni dell’acquirente
                in quanto non vengono trasmesse informazioni finanziare.
                <br />
                <br />
                Soddisfatti o rimborsati Ogni cliente del sito Cape Horn può avvalersi del Diritto
                di Recesso, nel caso uno o più prodotti non fosse di suo gradimento. Le tempistiche
                di rimborso sono al massimo di 14 giorni dal ricevimento della merce o dalla
                ricezione della prova di spedizione.
              </Balancer>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
