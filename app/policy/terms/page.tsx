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
            className="button-no-scale flex w-full items-center justify-start gap-2.5 border border-black px-4 py-[14px] font-mono"
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
            <h1 className="text-title-3 mb-10"> Termini e condizioni </h1>
            <p className="text-body-1_170 whitespace-pre">
              <Balancer>
                Questo sito web è gestito da Bonaldo Moira. I termini “noi” e “nostro” all’interno
                del sito si riferiscono a Bonaldo Moira. Bonaldo Moira ti offre questo sito web con
                tutte le informazioni, gli strumenti e i servizi in esso disponibili a condizione
                che tu, in qualità di utente, accetti tutti i termini, le condizioni, le informative
                e le avvertenze qui riportate.
                <br />
                <br />
                Visitando il nostro sito e/o acquistando qualcosa da noi, usufruisci del nostro
                “Servizio” e accetti di essere vincolato dai seguenti termini e condizioni (“Termini
                e condizioni del servizio”, “Termini”), che includono i termini, le condizioni e le
                informative aggiuntive citate nel presente documento e/o disponibili tramite
                collegamento ipertestuale. I presenti Termini e condizioni del servizio si applicano
                a tutti gli utenti del sito, compresi a titolo esemplificativo e non esaustivo
                visitatori, fornitori, clienti, commercianti e/o autori di commenti e altri
                contenuti. Leggi con attenzione questi Termini e condizioni del servizio prima di
                accedere o utilizzare il nostro sito web. Accedendo o utilizzando qualsiasi parte
                del sito, accetti di essere vincolato dai presenti Termini e condizioni del
                servizio. Se non accetti integralmente i termini e le condizioni del presente
                accordo, non puoi accedere al sito web né utilizzare i suoi servizi. Se i presenti
                Termini e condizioni del servizio vengono considerati una proposta, l’accettazione è
                espressamente limitata ai Termini stessi.
                <br />
                <br />
                SEZIONE 1 – TERMINI E CONDIZIONI DEL NEGOZIO ONLINE
                <br />
                <br />
                Accettando i presenti Termini e condizioni del servizio, dichiari di avere almeno la
                maggiore età nel tuo stato o provincia di residenza, o che hai la maggiore età nel
                tuo stato o provincia di residenza e ci hai autorizzato a consentire a qualsiasi
                minore sotto la tua responsabilità di utilizzare questo sito.
                <br />
                <br />
                Non puoi utilizzare i nostri prodotti per scopi illegali o non autorizzati né puoi,
                nell’uso del Servizio, violare alcuna legge vigente nel tuo ordinamento (incluse a
                puro titolo esemplificativo le leggi sul copyright).
                <br />
                <br />
                Non ti è consentito diffondere worm, virus o altri tipi di codice dannoso.
                <br />
                <br />
                La violazione di una qualsiasi disposizione dei Termini comporterà l’immediata
                cessazione del tuo diritto a usare i Servizi. SEZIONE 2 – CONDIZIONI GENERALI
                <br />
                <br />
                Ci riserviamo il diritto di negare il servizio a chiunque, per qualsiasi motivo e in
                qualsiasi momento.
                <br />
                <br />
                Comprendi che i tuoi contenuti (ad eccezione dei dati della carta di credito)
                possono essere trasferiti in chiaro e implicano (a) trasmissioni su varie reti; e
                (b) modifiche per conformarsi e adattarsi ai requisiti tecnici delle reti o dei
                dispositivi di connessione. I dati delle carte di credito vengono sempre
                crittografati durante il trasferimento sulle reti.
                <br />
                <br />
                Accetti di non riprodurre, duplicare, copiare, vendere, rivendere o sfruttare alcuna
                parte del Servizio, né l’uso del Servizio, l’accesso al Servizio o qualsiasi
                contatto sul sito web attraverso il quale il servizio è fornito senza espressa
                autorizzazione scritta da parte nostra.
                <br />
                <br />
                I titoli utilizzati nel presente accordo sono inclusi solo per comodità e non
                limiteranno né influenzeranno in alcun modo i presenti Termini. SEZIONE 3 –
                PRECISIONE, COMPLETEZZA E TEMPESTIVITÀ DELLE INFORMAZIONI
                <br />
                <br />
                Non saremo responsabili nel caso in cui le informazioni rese disponibili su questo
                sito non dovessero risultare accurate, complete o aggiornate. I materiali su questo
                sito sono da intendersi come puramente indicativi e non dovranno essere presi a
                riferimento o utilizzati come unica base per prendere decisioni senza consultare
                fonti di informazione più autorevoli, accurate, complete o aggiornate. Facendo
                affidamento sulle informazioni di questo sito te ne assumi il rischio.
                <br />
                <br />
                Questo sito può contenere alcune informazioni di carattere storico. Le informazioni
                storiche, necessariamente, non sono attuali e sono fornite solo come riferimento. Ci
                riserviamo il diritto di modificare i contenuti di questo sito in qualsiasi momento,
                ma non siamo soggetti all’obbligo di aggiornare alcuna informazione sul nostro sito.
                Accetti che è tua responsabilità monitorare le modifiche al nostro sito. SEZIONE 4 –
                MODIFICHE AL SERVIZIO E AI PREZZI
                <br />
                <br />
                I prezzi dei nostri prodotti sono soggetti a modifiche senza preavviso.
                <br />
                <br />
                Ci riserviamo il diritto di modificare o interrompere il Servizio (o qualsiasi sua
                parte o contenuto) senza preavviso in qualsiasi momento.
                <br />
                <br />
                Non saremo responsabili nei confronti tuoi o di terze parti per eventuali modifiche,
                variazioni di prezzo, sospensioni o interruzioni del Servizio. SEZIONE 5 – PRODOTTI
                O SERVIZI (se applicabile)
                <br />
                <br />
                Alcuni prodotti o servizi possono essere disponibili esclusivamente online tramite
                il sito web. Questi prodotti o servizi possono essere disponibili in quantità
                limitate, ed essere soggetti a reso o sostituzione solo in base alla nostra
                Informativa su rimborsi e resi.
                <br />
                <br />
                Abbiamo fatto ogni sforzo possibile per mostrare colori e immagini fedeli dei
                prodotti presenti nel negozio. Tuttavia non possiamo garantire che i colori
                visualizzati sullo schermo del tuo computer siano accurati. Ci riserviamo il diritto
                (anche se non siamo obbligati a farlo) di limitare la vendita dei nostri prodotti o
                Servizi nei confronti di qualsiasi soggetto, area geografica o giurisdizione.
                Potremo esercitare questo diritto caso per caso. Ci riserviamo il diritto di
                limitare la quantità di prodotti o servizi che offriamo. Le descrizioni e i prezzi
                dei prodotti potranno subire modifiche in qualsiasi momento senza alcun preavviso, a
                nostra esclusiva discrezione. Ci riserviamo il diritto di interrompere in ogni
                momento la vendita di un qualsiasi prodotto. La vendita di qualsiasi prodotto o
                servizio tramite questo sito è da considerarsi nulla laddove sia proibita.
                <br />
                <br />
                Non garantiamo che la qualità di prodotti, servizi, informazioni o altri materiali
                da te acquistati o ottenuti soddisfi le tue aspettative, né che gli eventuali errori
                del Servizio vengano corretti. SEZIONE 6 – ACCURATEZZA DELLE INFORMAZIONI DI
                FATTURAZIONE E DELL’ACCOUNT
                <br />
                <br />
                Ci riserviamo il diritto di rifiutare qualsiasi ordine ricevuto. A nostra esclusiva
                discrezione potremo limitare o annullare le quantità acquistate per persona, per
                nucleo familiare o per ordine. Queste restrizioni potranno riguardare gli ordini
                effettuati dallo stesso account cliente, con la stessa carta di credito e/o gli
                ordini che utilizzano lo stesso indirizzo di fatturazione e/o di spedizione. In caso
                di modifica o annullamento di un ordine, potremo tentare di avvisarti tramite
                l’indirizzo email, l’indirizzo di fatturazione o il numero di telefono forniti al
                momento dell’ordine. Ci riserviamo il diritto di limitare o vietare ordini che a
                nostro insindacabile giudizio sembrino effettuati da grossisti, rivenditori o
                distributori. Accetti di fornire informazioni aggiornate, complete e accurate
                sull’acquisto e sull’account per tutti gli acquisti effettuati nel nostro negozio.
                Accetti di aggiornare tempestivamente il tuo account e altri dettagli, come
                l’indirizzo email, il numero e la data di scadenza delle carte di credito, in modo
                che possiamo completare le transazioni e contattarti se necessario.
                <br />
                <br />
                Per maggiori informazioni, consulta la nostra Informativa su rimborsi e resi.
                SEZIONE 7 – STRUMENTI OPZIONALI
                <br />
                <br />
                Potremo fornirti l’accesso a strumenti di terze parti che non monitoriamo e sui
                quali non abbiamo alcuna forma di controllo o gestione.
                <br />
                <br />
                Riconosci e accetti che forniamo l’accesso a tali strumenti ”così come sono” e ”come
                disponibili”, senza alcun tipo di garanzia, dichiarazione, condizione o avallo. Non
                avremo alcuna responsabilità derivante da o relativa al tuo utilizzo di strumenti
                opzionali di terze parti.
                <br />
                <br />
                In futuro potremo anche offrire nuovi servizi e/o funzionalità attraverso il sito
                web (ad esempio, introducendo nuovi strumenti e risorse). Anche tali nuove
                funzionalità e/o servizi saranno soggetti ai presenti Termini e condizioni del
                servizio. SEZIONE 8 – LINK DI TERZE PARTI
                <br />
                <br />
                Alcuni contenuti, prodotti e servizi disponibili tramite il nostro Servizio possono
                includere materiali di terze parti.
                <br />
                <br />
                I link di terze parti su questo sito potranno indirizzarti a siti web esterni, che
                non sono affiliati con noi. Noi non siamo responsabili di esaminare o valutare i
                contenuti o l’esattezza di tali siti web. E non forniamo alcuna garanzia né abbiamo
                alcuna responsabilità per materiali o siti web di terze parti né per altri
                materiali, prodotti o servizi di terze parti.
                <br />
                <br />
                Non risponderemo di eventuali danni connessi all’acquisto o all’utilizzo di beni,
                servizi, risorse, contenuti o a qualsiasi altra transazione effettuata attraverso
                siti web di terze parti. Esamina attentamente le policy e le procedure di terze
                parti e assicurati di averle comprese prima di effettuare qualsiasi transazione.
                Reclami, richieste, dubbi e domande sui prodotti di terze parti dovranno essere
                indirizzati ai terzi interessati. SEZIONE 9 – COMMENTI, FEEDBACK E ALTRI MATERIALI
                INVIATI
                <br />
                <br />
                Se ci invii online, via email, tramite posta ordinaria o in altro modo determinati
                materiali (congiuntamente denominati “commenti”) — ad esempio, su nostra richiesta,
                contributi per la partecipazione a concorsi, oppure senza una nostra richiesta, idee
                creative, suggerimenti, proposte, piani o altri materiali — accetti che possiamo in
                qualsiasi momento e senza limitazioni modificare, copiare, pubblicare, distribuire,
                tradurre o utilizzare in qualsiasi altro modo e con qualsiasi mezzo i commenti che
                ci trasmetti. Non abbiamo e non avremo alcun obbligo di (1) mantenere riservati i
                commenti; (2) pagare compensi per i commenti; o (3) rispondere ai commenti. Potremo
                (senza avere alcun obbligo al riguardo) monitorare, modificare e rimuovere contenuti
                che dovessimo a nostra esclusiva discrezione ritenere illeciti, offensivi,
                minacciosi, calunniosi, diffamatori, pornografici, osceni o altrimenti discutibili,
                o contenuti che violino la proprietà intellettuale di qualsiasi parte o i presenti
                Termini e condizioni del servizio. Accetti di evitare commenti che ledano i diritti
                di terze parti, tra cui copyright, marchi commerciali, diritto alla privacy, diritti
                della personalità e altri diritti reali o personali. Inoltre accetti di non inviare
                commenti che contengano materiale diffamatorio o altrimenti illegale, offensivo o
                osceno, oppure virus informatici o altri malware che rischiano di compromettere il
                funzionamento del Servizio o di qualsiasi sito web correlato. Non potrai utilizzare
                un indirizzo email falso, fingere di essere qualcun altro o altrimenti fuorviare noi
                o terze parti sull’origine di eventuali commenti. Sei l’unico responsabile dei
                commenti che invii e della loro accuratezza. Non ci assumiamo e non avremo alcuna
                responsabilità per eventuali commenti pubblicati da te o da terze parti.
                <br />
                <br />
                SEZIONE 10 – INFORMAZIONI PERSONALI
                <br />
                <br />
                L’invio di informazioni personali attraverso il negozio è regolato dalla nostra
                Informativa sulla privacy. Clicca qui per visualizzare la nostra Informativa sulla
                privacy. SEZIONE 11 – ERRORI, INESATTEZZE E OMISSIONI
                <br />
                <br />
                Occasionalmente possono essere presenti sul nostro sito o nel Servizio informazioni
                contenenti errori tipografici, inesattezze e omissioni riguardanti descrizioni dei
                prodotti, prezzi, promozioni, offerte, costi di spedizione, tempi di consegna o
                disponibilità dei prodotti. Ci riserviamo il diritto di correggere eventuali errori,
                inesattezze e omissioni modificando e aggiornando le informazioni o annullando gli
                ordini, se qualsiasi informazione nel Servizio o su un sito web correlato dovesse
                essere inaccurata, in ogni momento (anche dopo l’invio dell’ordine) e senza alcun
                preavviso.
                <br />
                <br />
                Non ci assumiamo alcun obbligo di aggiornare, correggere o chiarire le informazioni
                nel Servizio o in qualsiasi sito web correlato, incluse senza limitazioni le
                informazioni sui prezzi, salvo quanto previsto dalla legge. Nessuna data di
                aggiornamento specificata nel Servizio o in qualsiasi sito web correlato dovrà
                essere interpretata come garanzia che tutte le informazioni nel Servizio o in
                qualsiasi sito web correlato siano state corrette e aggiornate. SEZIONE 12 – USI
                PROIBITI
                <br />
                <br />
                Oltre agli altri divieti stabiliti nei Termini e condizioni del servizio, è vietato
                utilizzare il sito o il suo contenuto: (a) per scopi illegali; (b) per indurre altri
                a compiere o partecipare ad atti illeciti; (c) per violare leggi e regolamenti
                internazionali, federali, provinciali o statali, o ordinanze locali; (d) per ledere
                o violare i diritti di proprietà intellettuale nostri o di terzi; (e) per molestare,
                abusare, insultare, danneggiare, diffamare, calunniare, denigrare, intimidire o
                discriminare qualcuno in base a sesso, orientamento sessuale, religione, etnia, età,
                paese di origine o disabilità; (f) per fornire informazioni false o fuorvianti; (g)
                per caricare o trasmettere virus o qualsiasi altro tipo di codice dannoso idoneo a
                influire sulla funzionalità o sul funzionamento del Servizio, di qualsiasi sito web
                correlato, di altri siti web o di internet; (h) per raccogliere o monitorare le
                informazioni personali di altri utenti; (i) per spam, phishing, pharming,
                pretexting, uso di spider, crawling o scraping; (j) per qualsiasi scopo osceno o
                immorale; oppure (k) per intralciare o aggirare le funzionalità di sicurezza del
                Servizio o di qualsiasi sito web correlato, di altri siti web o di internet. Ci
                riserviamo il diritto di interrompere il tuo utilizzo del Servizio o di qualsiasi
                sito web correlato se violi una qualsiasi delle disposizioni sugli usi proibiti.
                SEZIONE 13 – ESCLUSIONE DI GARANZIE; LIMITAZIONE DI RESPONSABILITÀ
                <br />
                <br />
                Non garantiamo, affermiamo o dichiariamo che l’utilizzo del nostro servizio sarà
                ininterrotto, tempestivo, sicuro né privo di errori.
                <br />
                <br />
                Non garantiamo che i risultati raggiungibili con l’uso del servizio siano accurati o
                affidabili.
                <br />
                <br />
                Prendi atto che potremo occasionalmente sospendere il servizio per periodi di tempo
                indeterminati, o cancellare il servizio in qualsiasi momento senza inviarti alcun
                preavviso. Accetti espressamente che siano a tuo esclusivo rischio l’utilizzo e
                l’impossibilità di utilizzare il servizio. Il servizio e tutti i prodotti e servizi
                forniti tramite il servizio vengono (salvo quanto da noi espressamente dichiarato)
                offerti ”così come sono” e ”come disponibili” per l’uso da parte dell’utente, senza
                dichiarazioni, garanzie o condizioni di alcun tipo, espresse o implicite, tra cui
                garanzie implicite o condizioni di commerciabilità, qualità commerciabile, idoneità
                per uno scopo specifico, durata, titolarità e assenza di violazioni. In nessun caso
                Bonaldo Moira e i suoi amministratori, dirigenti, dipendenti, affiliati, agenti,
                appaltatori, stagisti, fornitori, fornitori di servizi o concessori di licenza
                saranno responsabili per qualsiasi pregiudizio, perdita, reclamo o per un danno
                diretto, indiretto, incidentale, punitivo, speciale o consequenziale di qualsiasi
                tipo — inclusi senza limitazione profitti persi, mancati guadagni, risparmi persi,
                perdita di dati, costi di sostituzione o altri danni simili, in virtù di contratto,
                illecito civile (anche dovuto a negligenza), responsabilità oggettiva o altro —
                derivante dall’utilizzo di uno qualsiasi dei servizi o prodotti ottenuti utilizzando
                il servizio, né per qualsiasi altro reclamo relativo comunque all’utilizzo del
                servizio o prodotto, compresi, a titolo esemplificativo ma non esaustivo, eventuali
                errori o omissioni nei contenuti, perdite e danni di qualsiasi genere legati all’uso
                del servizio o di qualsiasi contenuto (o prodotto) pubblicato, trasmesso o reso
                altrimenti disponibile attraverso il servizio, anche se informati di tale
                eventualità. Poiché alcuni stati o giurisdizioni non consentono l’esclusione o la
                limitazione di responsabilità per danni conseguenti o incidentali, in tali stati o
                giurisdizioni la nostra responsabilità sarà limitata fino al limite massimo
                consentito dalla legge.
                <br />
                <br />
                SEZIONE 14 – INDENNIZZO
                <br />
                <br />
                Accetti di risarcire, difendere e tenere indenne Bonaldo Moira e le sue imprese
                controllanti, controllate e affiliate, nonché i suoi partner, dirigenti,
                amministratori, agenti, appaltatori, concessori di licenza, fornitori di servizi,
                subappaltatori, fornitori, stagisti e dipendenti da qualsiasi rivendicazione o
                richiesta, incluse le spese legali in misura ragionevole, avanzata da qualsiasi
                soggetto terzo e dovuta o derivante dalla tua violazione dei presenti Termini e
                condizioni del servizio o dei documenti in essi incorporati mediante riferimento, o
                dalla tua violazione di qualsiasi legge o diritto di terze parti. SEZIONE 15 –
                SEPARABILITÀ
                <br />
                <br />
                Nel caso in cui una qualsiasi disposizione dei presenti Termini e condizioni del
                servizio sia ritenuta illegale, nulla o inapplicabile, tale disposizione sarà
                comunque applicabile nella misura massima consentita dalla legge vigente e la parte
                inapplicabile sarà considerata scissa dai presenti Termini e condizioni del
                servizio, senza pregiudizio per la validità e l’applicabilità delle disposizioni
                rimanenti.
                <br />
                <br />
                SEZIONE 16 – RISOLUZIONE
                <br />
                <br />
                Gli obblighi e le responsabilità assunti dalle parti prima della data di cessazione
                sopravvivranno a tutti gli effetti alla risoluzione del presente accordo.
                <br />
                <br />
                I presenti Termini e condizioni del servizio saranno efficaci fino al recesso da
                parte tua o nostra. Potrai risolvere i presenti Termini e condizioni del servizio in
                qualsiasi momento informandoci che non desideri più utilizzare i nostri Servizi, o
                interrompendo l’utilizzo del nostro sito. Inoltre, se a nostro insindacabile
                giudizio tu violi o sospettiamo che abbia violato una qualsiasi disposizione dei
                presenti Termini e condizioni del servizio, potremo risolvere il presente accordo in
                qualsiasi momento senza preavviso e tu resterai responsabile per tutte le somme
                dovute fino alla data di cessazione inclusa; di conseguenza potremo negarti
                l’accesso ai Servizi (o a una qualsiasi parte di essi).
                <br />
                <br />
                SEZIONE 17 – INTERO ACCORDO
                <br />
                <br />
                Il mancato esercizio o applicazione di qualsiasi diritto o disposizione dei presenti
                Termini e condizioni del servizio non costituirà una rinuncia a tale diritto o
                disposizione.
                <br />
                <br />
                I presenti Termini e condizioni del servizio e le eventuali informative o regole
                operative pubblicate da noi su questo sito o in relazione al Servizio costituiscono
                l’intero accordo e intesa tra te e noi e disciplinano l’utilizzo del Servizio da
                parte tua, sostituendo qualsiasi accordo, comunicazione e proposta precedente o
                contemporanea, sia orale che scritta, tra te e noi (incluse, senza limitazione,
                eventuali versioni precedenti dei Termini e condizioni del servizio). Eventuali
                ambiguità nell’interpretazione dei presenti Termini e condizioni del servizio non
                dovranno essere interpretate contro la parte scrivente.
                <br />
                <br />
                SEZIONE 18 – LEGGE APPLICABILE
                <br />
                <br />
                I presenti Termini e condizioni del servizio e gli eventuali accordi separati in
                base ai quali ti forniamo i Servizi saranno regolati e interpretati in conformità
                con le leggi vigenti in Via degli Alpini 13/5 35013 Cittadella PD Italia.
                <br />
                <br />
                SEZIONE 19 – MODIFICHE AI TERMINI E CONDIZIONI DEL SERVIZIO
                <br />
                <br />
                Puoi consultare la versione più aggiornata dei Termini e condizioni del servizio in
                qualsiasi momento su questa pagina.
                <br />
                <br />
                Ci riserviamo il diritto a nostra esclusiva discrezione di aggiornare, modificare o
                sostituire qualsiasi parte dei presenti Termini e condizioni del servizio
                pubblicando aggiornamenti e modifiche sul nostro sito web. È tua responsabilità
                controllare periodicamente la presenza di modifiche nel nostro sito web. La
                prosecuzione dell’uso o dell’accesso al sito web o al Servizio dopo la pubblicazione
                di eventuali modifiche ai presenti Termini e condizioni del servizio costituisce
                accettazione di tali modifiche.
                <br />
                <br />
                SEZIONE 20 – CONTATTI
                <br />
                <br />
                Eventuali domande relative ai Termini e condizioni del servizio dovranno esserci
                inviate all’indirizzo info@hevoluta.com.
              </Balancer>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
