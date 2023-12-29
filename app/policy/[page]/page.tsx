import Link from 'next/link';

export const runtime = 'edge';

export const metadata = {
  title: 'Hevoluta – Policy',
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
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
            className={`
                    button-no-scale flex w-full items-center justify-start gap-2.5 border px-4 py-[14px] font-mono
                    ${
                      page === '' || page === 'privacy'
                        ? 'border-black'
                        : 'border-gray-200 hover:border-gray-300'
                    }
                `}
          >
            Privacy policy
          </Link>
          <Link
            href="/policy/terms"
            className={`
                    button-no-scale flex w-full items-center justify-start gap-2.5 border px-4 py-[14px] font-mono
                    ${page === 'terms' ? 'border-black' : 'border-gray-200 hover:border-gray-300'}
                `}
          >
            Termini e condizioni
          </Link>
          <Link
            href="/policy/delivery"
            className={`
                    button-no-scale flex w-full items-center justify-start gap-2.5 border px-4 py-[14px] font-mono
                    ${
                      page === 'delivery' ? 'border-black' : 'border-gray-200 hover:border-gray-300'
                    }
                `}
          >
            Spedizioni
          </Link>
          <Link
            href="/policy/return"
            className={`
                    button-no-scale flex w-full items-center justify-start gap-2.5 border px-4 py-[14px] font-mono
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
              <p className="text-body-1_170 block whitespace-pre">
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
              </p>
            </div>
          )}

          {page === 'terms' && (
            <div>
              <h1 className="text-title-3 mb-10"> Termini e condizioni </h1>
              <p className="text-body-1_170 whitespace-pre">
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
                Eventuali nuove funzionalità e strumenti aggiunti all’attuale negozio saranno
                anch’essi soggetti ai Termini e condizioni del servizio. Puoi consultare la versione
                più recente dei Termini e condizioni del servizio in qualsiasi momento su questa
                pagina. Ci riserviamo il diritto di aggiornare, modificare o sostituire qualsiasi
                parte dei Termini e condizioni del servizio pubblicando aggiornamenti e/o modifiche
                sul nostro sito web. È tua responsabilità controllare periodicamente questa pagina
                per vedere se sono presenti delle modifiche. La prosecuzione dell’utilizzo o
                dell’accesso al sito web dopo la pubblicazione di eventuali modifiche equivale
                all’accettazione di tali modifiche. Il nostro negozio è ospitato su Shopify Inc.,
                che ci fornisce la piattaforma di ecommerce online per venderti i nostri prodotti e
                servizi.
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
                Qualsiasi utilizzo da parte tua degli strumenti opzionali offerti attraverso il sito
                avverrà interamente a tuo rischio e discrezione. Starà a te assicurarti di conoscere
                e approvare i termini e le condizioni a cui sono soggetti gli strumenti di terze
                parti.
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
              </p>
            </div>
          )}

          {page === 'delivery' && (
            <div>
              <h1 className="text-title-3 mb-10"> Spedizione </h1>
              <p className="text-body-1_170 whitespace-pre">
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
              </p>
            </div>
          )}

          {page === 'return' && (
            <div>
              <h1 className="text-title-3 mb-10"> Rimborsi </h1>
              <p className="text-body-1_170 whitespace-pre">
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
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
