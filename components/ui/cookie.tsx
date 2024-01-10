'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Balancer from 'react-wrap-balancer';
import { createCookie, deleteCookie, getCookie } from '../../lib/cookie';
import ModalCenter from './modal-center';

export default function Cookie() {
  const [isOpen, setIsOpen] = useState(false);

  // modal
  const [isOpenModalChooseCookie, setIsOpenModalChooseCookie] = useState(false);
  const openModalChooseCookie = () => setIsOpenModalChooseCookie(true);
  const closeModalChooseCookie = () => setIsOpenModalChooseCookie(false);

  // chev for choose the cookie
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);

  const [isOpenChev1, setIsOpenChev1] = useState(false);
  const [isOpenChev2, setIsOpenChev2] = useState(false);
  const [isOpenChev3, setIsOpenChev3] = useState(false);
  const [isOpenChev4, setIsOpenChev4] = useState(false);

  const acceptCookieSelected = (): void => {
    // save accept cookie to show or not the cookie dialog
    createCookie('showCookie', 'true', 365);

    // delete cookie if exists
    deleteCookie('cookie1');
    deleteCookie('cookie2');
    deleteCookie('cookie3');
    deleteCookie('cookie4');

    // save cookie selected
    createCookie('cookie1', String(check1), 365);
    createCookie('cookie2', String(check2), 365);
    createCookie('cookie3', String(check3), 365);
    createCookie('cookie4', String(check4), 365);

    closeModalChooseCookie();
    setIsOpen(false);
  };
  const acceptAllCookie = (): void => {
    // save accept cookie to show or not the cookie dialog
    createCookie('showCookie', 'true', 365);

    // delete cookie if exists
    deleteCookie('cookie1');
    deleteCookie('cookie2');
    deleteCookie('cookie3');
    deleteCookie('cookie4');

    // save all cookie
    createCookie('cookie1', 'true', 365);
    createCookie('cookie2', 'true', 365);
    createCookie('cookie3', 'true', 365);
    createCookie('cookie4', 'true', 365);

    closeModalChooseCookie();
    setIsOpen(false);
  };

  useEffect(() => {
    // fetch cookie and check if exists
    const cookie1 = getCookie('cookie1');
    const cookie2 = getCookie('cookie2');
    const cookie3 = getCookie('cookie3');
    const cookie4 = getCookie('cookie4');

    if (cookie1 == 'true') {
      setCheck1(true);
    }
    if (cookie2 == 'true') {
      setCheck2(true);
    }
    if (cookie3 == 'true') {
      setCheck3(true);
    }
    if (cookie4 == 'true') {
      setCheck4(true);
    }

    // fetch if i need to open cookie dialog
    const showCookie = getCookie('showCookie');
    if (showCookie) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, []);

  // Open modal edit cookie if user needs it
  const searchParams = useSearchParams();
  const cookieSearchParam = searchParams.get('cookie');

  useEffect(() => {
    if (cookieSearchParam === 'open-modal') {
      openModalChooseCookie();

      // clean the route params
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, [cookieSearchParam]);

  return (
    <>
      <AnimatePresence>
        {isOpenModalChooseCookie && (
          <ModalCenter closeModal={closeModalChooseCookie}>
            {/* titles */}
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-4">
                <p className="text-title-4"> Personalizza i cookie </p>
                <p className="text-13 opacity-50">
                  Quando navighi il nostro sito, questo può usare cookie per raccogliere
                  informazioni nel tuo browser, relative a te o alle tue preferenze. Queste servono
                  a personalizzare l'esperienza del nostro sito. Rispettiamo la tua privacy, quindi
                  puoi scegliere di non accettare alcuni cookie.
                  <Link href="/policy" className="inline">
                    Leggi la policy
                  </Link>
                </p>
              </div>

              <button
                className="button-close-modal shrink-0"
                aria-label="Close"
                onClick={() => closeModalChooseCookie()}
              >
                <img src="/img/icon/close.svg" alt="" className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-col">
              <div className="flex items-start gap-5 border-y border-gray-200 p-5">
                <div className="flex w-full flex-col items-start gap-5">
                  <button
                    className="button-text flex items-center gap-1 active:!scale-100"
                    onClick={() => setIsOpenChev1(!isOpenChev1)}
                  >
                    <p>Cookie tecnici</p>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15.25 10.75L12 14.25L8.75 10.75"
                      ></path>
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isOpenChev1 && (
                      <motion.p className="text-13 opacity-50">
                        Questi cookie sono strumenti di tracciamento e sono strettamente necessari
                        per garantire il funzionamento e la regolare fornitura del sito web e,
                        pertanto, non richiedono il tuo consenso.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <input
                  type="checkbox"
                  checked={true}
                  disabled={true}
                  className="checkbox-base shrink-0"
                />
              </div>

              <div className="flex items-start gap-5 border-b border-gray-200 p-5">
                <div className="flex w-full flex-col items-start gap-5">
                  <button
                    className="button-text flex items-center gap-1 active:!scale-100"
                    onClick={() => setIsOpenChev2(!isOpenChev2)}
                  >
                    <p>Cookie di funzionalità</p>
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      className={`transform ${isOpenChev2 ? 'rotate-180' : 'rotate-0'}`}
                    >
                      <path
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15.25 10.75L12 14.25L8.75 10.75"
                      ></path>
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isOpenChev2 && (
                      <motion.p className="text-13 opacity-50">
                        Questi cookie sono strumenti di tracciamento che abilitano semplici
                        interazioni e funzionalità che ti permettono di accedere a determinate
                        risorse del nostro servizio e ti consentono di comunicare più facilmente con
                        noi.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <input
                  type="checkbox"
                  checked={check2}
                  onChange={() => setCheck2(!check2)}
                  className="checkbox-base shrink-0"
                />
              </div>

              <div className="flex items-start gap-5 border-b border-gray-200 p-5">
                <div className="flex w-full flex-col items-start gap-5">
                  <button
                    className="button-text flex items-center gap-1 active:!scale-100"
                    onClick={() => setIsOpenChev3(!isOpenChev3)}
                  >
                    <p>Cookie di misurazione</p>
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      className={`transform ${isOpenChev3 ? 'rotate-180' : 'rotate-0'}`}
                    >
                      <path
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15.25 10.75L12 14.25L8.75 10.75"
                      ></path>
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isOpenChev3 && (
                      <motion.p className="text-13 opacity-50">
                        Questi cookie sono strumenti di tracciamento che ci permettono di misurare
                        il traffico e analizzare il tuo comportamento per migliorare il nostro
                        servizio. Ci appoggiamo a servizi di terze parti per raccogliere
                        informazioni statistiche.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <input
                  type="checkbox"
                  checked={check3}
                  onChange={() => setCheck3(!check3)}
                  className="checkbox-base shrink-0"
                />
              </div>

              <div className="flex items-start gap-5 border-b border-gray-200 p-5">
                <div className="flex w-full flex-col items-start gap-5">
                  <button
                    className="button-text flex items-center gap-1 active:!scale-100"
                    onClick={() => setIsOpenChev4(!isOpenChev4)}
                  >
                    <p>Cookie di marketing</p>
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      className={`transform ${isOpenChev4 ? 'rotate-180' : 'rotate-0'}`}
                    >
                      <path
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M15.25 10.75L12 14.25L8.75 10.75"
                      ></path>
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isOpenChev4 && (
                      <motion.p className="text-13 opacity-50">
                        Questi cookie sono strumenti di tracciamento che ci permettono di profilare
                        gli utenti e di inviare loro messaggi pubblicitari in linea con le loro
                        preferenze. Ci appoggiamo a servizi di terze parti per raccogliere
                        informazioni statistiche.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <input
                  type="checkbox"
                  checked={check4}
                  onChange={() => setCheck4(!check4)}
                  className="checkbox-base shrink-0"
                />
              </div>
            </div>

            <div className="mt-5 flex gap-5">
              <button onClick={() => acceptAllCookie()} className="button-secondary-base">
                Accetta tutto
              </button>
              <button onClick={() => acceptCookieSelected()} className="button-primary-base">
                Accetta cookie selezionati
              </button>
            </div>
          </ModalCenter>
        )}
      </AnimatePresence>

      {isOpen && (
        <div className="fixed bottom-5 left-5 z-10 h-auto w-[calc(100vw-40px)] border border-black bg-white p-5 lg:w-[400px]">
          <p>
            <Balancer>
              Questo sito utilizza i cookie per fini di funzionalità del sito e altri servizi terzi,
              per migliorare l’esperienza delle sessioni.
            </Balancer>
          </p>

          <div className="mt-5 flex gap-5">
            <button className="button-secondary-base" onClick={() => openModalChooseCookie()}>
              Personalizza
            </button>
            <button className="button-primary-base" onClick={() => acceptAllCookie()}>
              Accetta tutto
            </button>
          </div>
        </div>
      )}
    </>
  );
}
