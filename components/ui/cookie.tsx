'use client'

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createCookie, deleteCookie, getCookie } from '../../lib/cookie';
import ModalCenter from './modal-center';

export default function Cookie(){
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

    const acceptCookieSelected = () : void => {
        // save accept cookie to show or not the cookie dialog
        createCookie('showCookie', 'true', 365)

        // delete cookie if exists
        deleteCookie('cookie1')
        deleteCookie('cookie2')
        deleteCookie('cookie3')
        deleteCookie('cookie4')

        // save cookie selected
        createCookie('cookie1', String(check1), 365)
        createCookie('cookie2', String(check2), 365)
        createCookie('cookie3', String(check3), 365)
        createCookie('cookie4', String(check4), 365)

        closeModalChooseCookie()
        setIsOpen(false)
    }
    const acceptAllCookie = () : void => {
        // save accept cookie to show or not the cookie dialog
        createCookie('showCookie', 'true', 365)

        // delete cookie if exists
        deleteCookie('cookie1')
        deleteCookie('cookie2')
        deleteCookie('cookie3')
        deleteCookie('cookie4')

        // save all cookie
        createCookie('cookie1', 'true', 365)
        createCookie('cookie2', 'true', 365)
        createCookie('cookie3', 'true', 365)
        createCookie('cookie4', 'true', 365)

        closeModalChooseCookie()
        setIsOpen(false)
    }

    useEffect(() => {
        // fetch cookie and check if exists
        const cookie1 = getCookie('cookie1')
        const cookie2 = getCookie('cookie2')
        const cookie3 = getCookie('cookie3')
        const cookie4 = getCookie('cookie4')

        if(cookie1 == 'true'){
            setCheck1(true)
        }
        if(cookie2 == 'true'){
            setCheck2(true)
        }
        if(cookie3 == 'true'){
            setCheck3(true)
        }
        if(cookie4 == 'true'){
            setCheck4(true)
        }

        // fetch if i need to open cookie dialog
        const showCookie = getCookie('showCookie')
        if(showCookie){
            setIsOpen(false)
        }
        else{
            setIsOpen(true)
        }
    }, [])

    // Open modal edit cookie if user needs it
    const searchParams = useSearchParams();
    const cookieSearchParam = searchParams.get('cookie')

    useEffect(() => {
        if(cookieSearchParam === 'open-modal'){
            openModalChooseCookie()

            // clean the route params
            window.history.replaceState({}, '', window.location.pathname)
        }
    }, [cookieSearchParam])

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
                                <div className="w-full flex flex-col items-start gap-5">
                                    <button 
                                        className="flex items-center gap-1 active:!scale-100 button-text"
                                        onClick={() => setIsOpenChev1(!isOpenChev1)}
                                    >
                                        <p>
                                            Cooki tecnici
                                        </p>
                                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.25 10.75L12 14.25L8.75 10.75"></path>
                                        </svg>
                                    </button>

                                    <AnimatePresence>
                                        {isOpenChev1 && (
                                            <motion.p 
                                                className="text-13 opacity-50"
                                            >
                                                Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
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

                            <div className="flex items-start p-5 gap-5 border-b border-gray-200">
                                <div className="w-full flex flex-col items-start gap-5">
                                    <button 
                                        className="flex items-center gap-1 active:!scale-100 button-text"
                                        onClick={() => setIsOpenChev2(!isOpenChev2)}
                                    >
                                        <p>
                                            Cooki tecnici
                                        </p>
                                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className={`transform ${isOpenChev2 ? 'rotate-180' : 'rotate-0'}`}>
                                            <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.25 10.75L12 14.25L8.75 10.75"></path>
                                        </svg>
                                    </button>

                                    <AnimatePresence>
                                        {isOpenChev2 && (
                                            <motion.p 

                                                className="text-13 opacity-50"
                                            >                                                Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
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

                            <div className="flex items-start p-5 gap-5 border-b border-gray-200">
                                <div className="w-full flex flex-col items-start gap-5">
                                    <button 
                                        className="flex items-center gap-1 active:!scale-100 button-text"
                                        onClick={() => setIsOpenChev3(!isOpenChev3)}
                                    >
                                        <p>
                                            Cooki tecnici
                                        </p>
                                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className={`transform ${isOpenChev3 ? 'rotate-180' : 'rotate-0'}`}>
                                            <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.25 10.75L12 14.25L8.75 10.75"></path>
                                        </svg>
                                    </button>

                                    <AnimatePresence>
                                        {isOpenChev3 && (
                                            <motion.p 

                                                className="text-13 opacity-50"
                                            >
                                                Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
                                            </motion.p>
                                        )}                                    </AnimatePresence>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={check3}
                                    onChange={() => setCheck3(!check3)}
                                    className="checkbox-base shrink-0"
                                />
                            </div>

                            <div className="flex items-start p-5 gap-5 border-b border-gray-200">
                                <div className="w-full flex flex-col items-start gap-5">
                                    <button 
                                        className="flex items-center gap-1 active:!scale-100 button-text"
                                        onClick={() => setIsOpenChev4(!isOpenChev4)}
                                    >
                                        <p>
                                            Cooki tecnici
                                        </p>
                                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className={`transform ${isOpenChev4 ? 'rotate-180' : 'rotate-0'}`}>
                                            <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                d="M15.25 10.75L12 14.25L8.75 10.75"></path>
                                        </svg>
                                    </button>

                                    <AnimatePresence>
                                        {isOpenChev4 && (
                                            <motion.p 

                                                className="text-13 opacity-50"
                                            >
                                                Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>
                                <input                                    type="checkbox"
                                    checked={check4}
                                    onChange={() => setCheck4(!check4)}
                                    className="checkbox-base shrink-0"
                                />
                            </div>
                        </div>

                        <div className="flex gap-5 mt-5">
                            <button 
                                onClick={() => acceptAllCookie()}
                                className="button-secondary-base"
                            >
                                Accetta tutto
                            </button>
                            <button 
                                onClick={() => acceptCookieSelected()}
                                className="button-primary-base"
                            >
                                Accetta cookie selezionati
                            </button>
                        </div>
                </ModalCenter>
                )}
            </AnimatePresence>

            {isOpen && (
                <div className="fixed w-[calc(100vw-40px)] lg:w-[400px] h-auto bottom-5 left-5 bg-white p-5 border border-black z-10">
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
                            onClick={() => acceptAllCookie()}
                        >
                            Accetta tutto
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}