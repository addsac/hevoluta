import Image from 'next/image';

export const metadata = {
  title: 'Manifesto Hevoluta',
  description:
    'Il Manifesto Hevoluta per una cura della pelle personale e consapevole. Leggi i principi e scarica il manifesto in PDF.'
};

const pdf = '/manifesto/manifesto-hevoluta.pdf';

const principles = [
  [
    'La mia bellezza non ha una data di scadenza.',
    'Ho il diritto di sentirmi bene nella mia pelle in ogni stagione della mia vita.'
  ],
  [
    'Il mio valore resta intero, anche nei giorni in cui non mi piaccio.',
    'Ci sono giorni in cui faccio fatica a riconoscermi allo specchio. Posso accogliere quella sensazione senza lasciare che decida quanto valgo o quanto merito di stare bene.'
  ],
  [
    'Mi amo anche mentre cambio.',
    'Posso desiderare una pelle più luminosa e prendermene cura, orgogliosa degli anni che ho.'
  ],
  [
    'Sono io a scegliere come prendermi cura di me.',
    'Ascolto i miei desideri e decido ciò che mi fa stare bene, senza lasciare che siano le aspettative degli altri a scegliere per me.'
  ],
  [
    'Il mio benessere merita spazio nella mia giornata.',
    'Il tempo che dedico a me ha valore. Posso concedermelo senza sentirmi in colpa.'
  ],
  [
    'La salute della mia pelle viene prima della perfezione.',
    'Scelgo di rispettarla, anche quando ha segni, fragilità e giornate difficili.'
  ],
  [
    'La mia pelle cambia. La mia cura evolve.',
    'Imparo a conoscere la mia pelle e a riconoscere ciò di cui ha bisogno, oltre le etichette e le abitudini.'
  ],
  [
    'La mia pelle merita una cura personale.',
    'Ciò che funziona per qualcun altro può non essere adatto a me. Scelgo a partire dalle mie esigenze.'
  ],
  [
    'Mi affido alla scienza. Pretendo chiarezza.',
    'Voglio sapere cosa applico sulla pelle, quale funzione ha e quali risultati posso aspettarmi. Le promesse devono avere un fondamento.'
  ],
  [
    'Ho diritto ad aspettative realistiche.',
    'Chiedo onestà sui risultati, sui tempi e sui limiti di un cosmetico. La fiducia nasce anche da ciò che un brand ha il coraggio di non promettere.'
  ],
  [
    'Mi prendo cura della mia pelle anche quando sta bene.',
    'La protezione e la prevenzione fanno parte delle mie abitudini. Dedico attenzione alla mia pelle prima che sia un disagio a ricordarmelo.'
  ],
  [
    'Acquisto con consapevolezza.',
    'Do valore al cosmetico che scelgo, lo utilizzo con attenzione e riduco gli sprechi. Considero anche l’impatto delle mie abitudini.'
  ],
  [
    'Rispetto la mia pelle anche nei piccoli gesti.',
    'Dedico attenzione a come la detergo, la tocco e applico i prodotti. La delicatezza fa parte della cura che scelgo.'
  ],
  [
    'Dedico alla cura della pelle il tempo che merita.',
    'Credo nei gesti quotidiani ripetuti, nella costanza e in una cosmetica che rispetta i ritmi naturali della pelle.'
  ],
  [
    'Mi concedo il piacere della cura.',
    'Un profumo, un gesto, qualche minuto di quiete: voglio che la mia routine sia anche un momento piacevole da vivere.'
  ],
  [
    'Condivido ciò che imparo.',
    'Faccio domande, porto la mia esperienza e ascolto quella degli altri. La consapevolezza cresce anche attraverso il confronto.'
  ],
  [
    'Posso cominciare da oggi.',
    'A qualunque età, posso imparare a conoscermi meglio e introdurre abitudini di cura della pelle più adatte a me.'
  ]
] as const;

export default function ManifestoPage() {
  return (
    <article className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
      <header className="grid items-center gap-10 pb-16 md:grid-cols-2">
        <div>
          <h1 className="text-title-2">Manifesto Hevoluta</h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={pdf} className="button-primary-base">
              Apri il PDF
            </a>
            <a href={pdf} download className="button-secondary-base">
              Scarica il PDF
            </a>
          </div>
        </div>
        <a href={pdf} className="flex justify-center bg-neutral-100 p-6">
          <Image
            src="/manifesto/manifesto-hevoluta.jpg"
            alt="Apri il Manifesto Hevoluta in formato PDF"
            width={739}
            height={1100}
            className="h-auto w-full max-w-[16rem] shadow-md"
          />
        </a>
      </header>
      <div className="grid gap-x-16 md:grid-cols-2">
        {principles.map(([title, body]) => (
          <section key={title} className="border-t border-neutral-200 py-8">
            <h2 className="font-tiempos-italic text-26 leading-tight">{title}</h2>
            <p className="mt-3 max-w-prose text-17 leading-relaxed">{body}</p>
          </section>
        ))}
      </div>
      <section className="mt-8 border-t border-black pt-10">
        <h2 className="font-tiempos-italic text-32 lg:text-48">
          Semino la bellezza, raccolgo la salute.
        </h2>
        <p className="mt-4 max-w-prose text-19">
          La cura della pelle è uno dei gesti con cui coltivo, ogni giorno, una relazione più
          consapevole con me.
        </p>
      </section>
    </article>
  );
}
