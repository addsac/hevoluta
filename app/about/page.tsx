import Divider from 'components/ui/divider';
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';

export const runtime = 'edge';

export const metadata = {
  title: 'Hevoluta – About',
  description: 'La storia di come nascono i prodotti Hevoluta, la loro filosofia e i principi alla base delle formulazioni speicifiche.',
  openGraph: {
    type: 'website'
  }
};

export default async function AbotuPage() {
  return (
    <>
      <div className="w-screen flex lg:gap-2.5 px-5 pt-20 pb-[120px]">
        <div className="hidden lg:block w-1/12"></div> {/* margin */}
        <div className="w-full lg:w-10/12 flex flex-col items-center gap-20 lg:gap-[120px]">
            {/* Hero */}
            <div className="flex flex-col gap-20">
                <div className="flex flex-col gap-6">
                    <h1 className="text-title-2">
                        Hevoluta - semina la Bellezza, raccogli la Salute.
                    </h1>
                    <p className="text-body-2_190">
                        <Balancer>
                            Hevoluta è un marchio italiano che nasce dall’idea di creare prodotti di bellezza di alta qualità, esclusivamente Made in Italy, dedicati al Bellessere  dell’intera Persona.
                        </Balancer>
                    </p>
                    <p className="text-body-2_190">
                        <Balancer>
                            Oggi le persone si rendono sempre più conto che salute e bellezza viaggiano sugli stessi binari e che il loro destino dipende in gran parte dall’ambiente in cui vivono e dallo stile e scelte di vita che decidono di adottare.
                        </Balancer>
                    </p>
                    <p className="text-body-2_190">
                        <Balancer>
                            In questa prospettiva, la ricerca della bellezza diventa un tendere naturale a una funzionalità ottimale del nostro intero organismo, per raggiungere quell’armonia che ci rende più accettabili a noi stessi e più desiderabili e attraenti agli altri.
                        </Balancer>
                    </p>
                    <p className="text-body-2_190">
                        <Balancer>
                            HEVOLUTA® nasce dalla visione da parte della sua creatrice e fondatrice Moira Bonaldo di «concepire bellezza, benessere e salute collegate fra loro e imprescindibili l’una dalle altre».
                        </Balancer>
                    </p>
                    <p className="text-body-2_190">
                        <Balancer>
                            La pelle diventa così un tramite, un gate, a nostra diretta disposizione per agire su di essa direttamente e indirettamente sul resto del nostro corpo.
                        </Balancer>
                    </p>
                    <p className="text-body-2_190">
                        <Balancer>
                            In HEVOLUTA® si ricercano, si studiano, si applicano e si condividono solo le più innovative ed efficaci strategie e soluzioni che consentano alle persone di sviluppare, raggiungere e mantenere il loro massimo potenziale di Bellessere, ossia l’insieme di bellezza, benessere e salute.
                        </Balancer>
                    </p>
                </div>
                
                {/* img */}
                <Image 
                    src='/img/about/about-1.jpg'
                    alt=""
                    width={1200}
                    height={1200}
                    className="w-full h-auto" 
                />
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-10">
                <div className="flex flex-col items-center justify-center text-center gap-6">
                    <img src="/img/about/flower-1.png" alt="" className="w-[150px] h-[150px] opacity-80 grayscale" />

                    <div className="flex flex-col gap-5">
                        {/* <p className="text-body-1_3 opacity-50 uppercase font-mono">
                            Fibra extra lunga
                        </p> */}
                        <p className="text-title-4">
                            Sicuri
                        </p>
                        <p className="text-body-1_170 opacity-50">
                            <Balancer>
                                I cosmetici HEVOLUTA® sono dermatologicamente testati e sono privi di parabeni, siliconi,EDTA, BHA, BHT e altre sostanze sospette di non essere completamente sicure.
                            </Balancer>
                        </p>
                    </div>
                </div>
                <div className="hidden lg:block h-full w-px bg-gray-200"></div> {/* divider */}
                <div className="flex flex-col items-center justify-center text-center gap-6">
                    <img src="/img/about/flower-2.png" alt="" className="w-[150px] h-[150px] opacity-80 grayscale" />

                    <div className="flex flex-col gap-5">
                        {/* <p className="text-body-1_3 opacity-50 uppercase font-mono">
                            Doppio riporto
                        </p> */}
                        <p className="text-title-4">
                            Efficaci
                        </p>
                        <p className="text-body-1_170 opacity-50">
                            <Balancer>
                                Ricchi di sostanze  funzionali e presenti in concentrazione efficace per raggiungere l’effetto cosmetologico vantato dal prodotto.
                            </Balancer>
                        </p>
                    </div>
                </div>
                <div className="hidden lg:block h-full w-px bg-gray-200"></div> {/* divider */}
                <div className="flex flex-col items-center justify-center text-center gap-6">
                    <img src="/img/about/flower-3.png" alt="" className="w-[150px] h-[150px] opacity-80 grayscale" />

                    <div className="flex flex-col gap-5">
                        {/* <p className="text-body-1_3 opacity-50 uppercase font-mono">
                            tecniche sartoriali
                        </p> */}
                        <p className="text-title-4">
                            Funzionali
                        </p>
                        <p className="text-body-1_170 opacity-50">
                            <Balancer>
                                I principi attivi utilizzati sono scelti in base a studi, verifiche sperimentali e bibliografia che dimostrino la loro funzionalità cosmetica specifica.
                            </Balancer>
                        </p>
                    </div>
                </div>
            </div>

            {/* citation */}
            <div className="w-full bg-citation flex flex-col items-center gap-10 px-5 py-12 text-center">
                <p className="text-title-5_190 max-w-[900px]">
                    <Balancer>
                        “Tutto in noi è collegato e unito da una rete quasi invisibile 
                        e questa rete ci unisce  agli altri e al Pianeta Terra.
                        Salute fisica e mentale, relazioni umane, bellezza, benessere e longevità: tutto è collegato e interdipendente. 
                        Affrontarle separatamente porta solo a tamponare i problemi 
                        e a non risolverli in modo definitivo e sostenibile nel tempo.
                        É folle non rendersi conto di questo e doveroso rispettarlo.”
                    </Balancer>
                </p>
                <p className="opacity-50">
                    Moira Bonaldo – La fondatrice
                </p>
            </div>

            <div className='text-center'>
                <p className="text-title-4">
                    I Principi alla base dei nostri prodotti
                </p>

                <p className="text-body-1_190 opacity-50 max-w-[600px] mt-8">
                    Ogni Prodotto è realizzato per uno scopo ben preciso, ma contribuisce al più grande e fondamentale obiettivo di HEVOLUTA®: sviluppare e mantenere il massimo potenziale di Bellessere della persona!
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
                {/* photo */}
                <div className="w-full mb-[80px]">
                    <Image 
                        src='/img/about/about-2.jpg'
                        alt=""
                        width={1200}
                        height={1200}
                        className="w-full h-auto" 
                    />
                </div>

                {/* texts */}
                <div className="w-full">
                    <p className="text-title-4_170">
                        <Balancer>
                            I cosmetici Hevoluta non sono prodotti che seguono le mode o i trend,
                        </Balancer>
                    </p>
                    <p className="text-body-1_190 mt-8 opacity-70">
                        <Balancer>
                            anche se siamo costantemente e attentamente in ascolto dei problemi e delle esigenze di coloro che scelgono e si affidano a Hevoluta: vogliamo che siano cosmetici funzionali e destinati a rimanere nel tempo, perché realizzati con sostanze attive ben studiate, conosciute e con solide fondamenta scientifiche. 
                            Questo comporta essere sempre aggiornati e studiare continuamente i progressi cosmetologici in particolare e scientifici in generale, per poterli tradurre velocemente nei prodotti Hevoluta, per aggiornarli rendendoli sempre “top performance”. Questo è possibile per le piccole dimensioni di Hevoluta, che la rende fluida, arguta, e veloce nell’aggiornare le formulazioni secondo le ultime scoperte, a differenza di grandi aziende e multinazionali (che sono dinosauri in confronto)
                        </Balancer>
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
                {/* photo */}
                <div className="w-full mb-[80px]">
                    <Image 
                        src='/img/about/about-3.jpg'
                        alt=""
                        width={1200}
                        height={1200}
                        className="w-full h-auto" 
                    />
                </div>

                {/* texts */}
                <div className="w-full">
                    <p className="text-title-4_170">
                        <Balancer>
                            Nonostante l’obiettivo di Hevoluta sia di mettere a disposizione del consumatore cosmetici funzionali “evergreen” per la loro efficacia e lungimiranza,
                        </Balancer>
                    </p>
                    <p className="text-body-1_190 mt-8 opacity-70">
                        <Balancer>
                            in essi c’è sempre la scintilla dell’Innovazione e della Trasformazione: Hevoluta Crema Viso Protettiva Anti Luce Blu, per esempio, è la prima che permette davvero di proteggere la pelle dai danni da Luce Blu di origine naturale e artificiale, di sicuro quando è iniziata la sua vendita nell’Ottobre 2021. Inoltre, sicuramente è la prima formulata con la visione che l’interferenza della Luce Blu con il Ciclo Circadiano, con tutte le conseguenze nefaste, passi attraverso l’organo Pelle e non solo attraverso l’Occhio. Anche Hevoniric Gold Oil è stato pensato per agire sulla pelle nutrendola e calmandola, ma è stato formulato per calmare, rilassare e aiutare l’intero organismo a beneficiare di un sonno ristoratore, riparatore e rigenerante.
                        </Balancer>
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
                {/* photo */}
                <div className="w-full mb-[80px]">
                    <Image 
                        src='/img/about/about-4.jpg'
                        alt=""
                        width={1200}
                        height={1200}
                        className="w-full h-auto" 
                    />
                </div>

                {/* texts */}
                <div className="w-full">
                    <p className="text-title-4_170">
                        <Balancer>
                            Il made in Italy è il nostro fiore all’occhiello che rispettiamo sempre e al quale teniamo particolarmente.
                        </Balancer>
                    </p>
                    <p className="text-body-1_190 mt-8 opacity-70">
                        <Balancer>
                            Inoltre, i lotti relativamente piccoli, rispetto a una multinazionale o grandi aziende produttive, ci permettono di essere veramente rispettosi dell’ambiente: che fine pensate facciano i milioni di cosmetici prodotti in tutto il mondo, anche make-up, ma rimasti  invenduti?
                            Un altro occhio di riguardo viene dato al packaging, che deve essere almeno riciclabile. Inoltre, cerchiamo di utilizzare il meno possibile il packaging secondario, ossia le scatole di cartone che vengono subito buttate nel cestino dopo l’acquisto, per sostenere l’ambiente, gli alberi e tutta la filiera chimica che consegue.
                        </Balancer>
                    </p>
                </div>
            </div>

            {/* citation */}
            <div className="w-full bg-citation flex flex-col items-center gap-10 px-5 py-12 text-center">
                <p className="text-title-5_190 max-w-[900px]">
                    <Balancer>
                        I ricercatori che hanno dato vita a HEVOLUTA® collaborano con l’Università degli Studi di Padova, di Ferrara e di Trieste, sono autori di decine di pubblicazioni scientifiche su riviste specializzate, sono relatori di decine di tesi di Laurea e Specializzazione in Scienza e Tecnologia Cosmetiche e sono inventori di Brevetti Internazionali.
                    </Balancer>
                </p>
            </div>
        </div>
        <div className="hidden lg:block w-1/12"></div> {/* margin */}
      </div>

      {/* divider */}
      <Divider />
    </>
  );
}
