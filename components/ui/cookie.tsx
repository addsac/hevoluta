'use client'

import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import ModalCenter from './modal-center';

export default function Cookie(){
    const [isOpen, setIsOpen] = useState(true);

    // modal
    const [isOpenModalChooseCookie, setIsOpenModalChooseCookie] = useState(false);
    const openModalChooseCookie = () => setIsOpenModalChooseCookie(true);
    const closeModalChooseCookie = () => setIsOpenModalChooseCookie(false);

    // chev for choose the cookie
    const [isOpenChev1, setIsOpenChev1] = useState(true);
    const [isOpenChev2, setIsOpenChev2] = useState(false);
    const [isOpenChev3, setIsOpenChev3] = useState(false);
    const [isOpenChev4, setIsOpenChev4] = useState(false);

    return (
        <>
            <AnimatePresence>
                {isOpenModalChooseCookie && (
                    <ModalCenter 
                        closeModal={closeModalChooseCookie}
                    >
                        {/* titles */}
                        <div className="flex items-start justify-between">
                            <div className="flex flex-col gap-4">
                                <p className="text-title-4"> Personalizza i cookie </p>
                                <p className="text-13 opacity-50">
                                    Quando navighi il nostro sito, questo può usare cookie per raccogliere informazioni nel tuo browser, relative a te o alle tue preferenze. Queste servono a personalizzare l'esperienza del nostro sito. Rispettiamo la tua privacy, quindi puoi scegliere di non accettare alcuni cookie.
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
                                <img 
                                    src="/img/icon/close.svg"
                                    alt=""
                                    className="w-6 h-6"
                                />
                            </button>
                        </div>

                        <div className="flex flex-col">
                            <div className="flex items-start p-5 gap-5 border-y border-gray-200">
                                <div className="flex flex-col gap-5">
                                    <button className="flex items-center gap-2">
                                        <p>
                                            Cooki tecnici
                                        </p>
                                        <img    
                                            src="/img/icon/down.svg"
                                            alt=""
                                            className="w-5 h-5"
                                        />
                                    </button>

                                    <p className="text-13 opacity-50">
                                        Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
                                    </p>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={true}
                                    disabled={true}
                                    className="checkbox-base shrink-0"
                                />
                            </div>

                            <div className="flex items-start p-5 gap-5 border-b border-gray-200">
                                <div className="flex flex-col gap-5">
                                    <button className="flex items-center gap-2">
                                        <p>
                                            Cooki tecnici
                                        </p>
                                        <img    
                                            src="/img/icon/down.svg"
                                            alt=""
                                            className="w-5 h-5"
                                        />
                                    </button>

                                    <p className="text-13 opacity-50">
                                        Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
                                    </p>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={isOpenChev2}
                                    onChange={() => setIsOpenChev2(!isOpenChev2)}
                                    className="checkbox-base shrink-0"
                                />
                            </div>

                            <div className="flex items-start p-5 gap-5 border-b border-gray-200">
                                <div className="flex flex-col gap-5">
                                    <button className="flex items-center gap-2">
                                        <p>
                                            Cooki tecnici
                                        </p>
                                        <img    
                                            src="/img/icon/down.svg"
                                            alt=""
                                            className="w-5 h-5"
                                        />
                                    </button>

                                    <p className="text-13 opacity-50">
                                        Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
                                    </p>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={isOpenChev3}
                                    onChange={() => setIsOpenChev3(!isOpenChev3)}
                                    className="checkbox-base shrink-0"
                                />
                            </div>

                            <div className="flex items-start p-5 gap-5 border-b border-gray-200">
                                <div className="flex flex-col gap-5">
                                    <button className="flex items-center gap-2">
                                        <p>
                                            Cooki tecnici
                                        </p>
                                        <img    
                                            src="/img/icon/down.svg"
                                            alt=""
                                            className="w-5 h-5"
                                        />
                                    </button>

                                    <p className="text-13 opacity-50">
                                        Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
                                    </p>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={isOpenChev4}
                                    onChange={() => setIsOpenChev4(!isOpenChev4)}
                                    className="checkbox-base shrink-0"
                                />
                            </div>
                        </div>

                        <div className="flex gap-5 mt-5">
                            <button 
                                className="button-secondary-base"
                            >
                                Accetta tutto
                            </button>
                            <button 
                                className="button-primary-base"
                            >
                                Accetta cookie selezionati
                            </button>
                        </div>
                </ModalCenter>
                )}
            </AnimatePresence>

            {isOpen && (
                <div className="fixed w-[400px] h-auto bottom-5 left-5 bg-white p-5 border border-black z-10">
                    <p>
                        Questo sito utilizza i cookie per fini di funzionalità del sito e altri servizi terzi, per migliorare l’esperienza delle sessioni.
                    </p>
                    
                    <div className="flex gap-5 mt-5">
                        <button 
                            className="button-secondary-base"
                            onClick={() => openModalChooseCookie()}
                        >
                            Personalizza
                        </button>
                        <button 
                            className="button-primary-base"
                            onClick={() => setIsOpen(false)}
                        >
                            Accetta tutto
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
