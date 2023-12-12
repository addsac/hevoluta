'use client'

import { useState } from 'react';

export default function ProfileSettings(){
    const [page, setPage] = useState<number>(0);

    // form data
    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [civicNumber, setCivicNumber] = useState<string>('');
    const [cap, setCap] = useState<string>('');
    const [nation, setNation] = useState<string>('');
    const [province, setProvince] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    return (
        <div className="flex flex-col gap-10">
            {/* buttons */}
            <div className="flex flex-wrap">
                <button 
                    className={page == 0 ? 'button-cips-menu-active' : 'button-cips-menu-inactive'}
                    onClick={() => setPage(0)}
                >
                    I miei ordini
                </button>
                <button 
                    className={page == 1 ? 'button-cips-menu-active' : 'button-cips-menu-inactive'}
                    onClick={() => setPage(1)}
                >
                    Indirizzo di spedizione
                </button>
                <button className="button-cips-menu-inactive">
                    Log out
                </button>
            </div>

            {/* table */}
            {page === 0 && (
                <table className="w-full">
                    <thead>
                        <tr className="border-y border-black text-left">
                            <th className="px-3 py-5 uppercase font-normal">Data</th>
                            <th className="px-3 py-5 uppercase font-normal">Numero d'ordine</th>
                            <th className="px-3 py-5 uppercase font-normal">Totale</th>
                            <th className="px-3 py-5 uppercase font-normal">Stato</th>
                            <th className="px-3 py-5 uppercase font-normal">Reso</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[1, 2].map((value, index) => (
                            <tr key={'row-orders-'+index}>
                                <td className="px-3 py-5">14/03/2023</td>
                                <td className="px-3 py-5">1403G618723022</td>
                                <td className="px-3 py-5">eur 462,00</td>
                                <td className="px-3 py-5">spedito</td>
                                <td className="px-3 py-5"></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {page === 1 && (
                <div className="flex flex-col items-start gap-8 w-full lg:w-1/2">
                    <div className="w-full flex flex-col gap-2.5">
                        <p> Nome </p>
                        <input 
                            type="email"
                            placeholder="nome@esempio.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full input-base"
                        />
                    </div>

                    <div className="w-full flex flex-col gap-2.5">
                        <p> Cognome </p>
                        <input 
                            type="email"
                            placeholder="nome@esempio.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full input-base"
                        />
                    </div>

                    <div className="w-full flex flex-col gap-2.5">
                        <p> Indirizzo </p>
                        <input 
                            type="email"
                            placeholder="nome@esempio.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full input-base"
                        />
                    </div>

                    <div className="w-full flex flex-col gap-2.5">
                        <p> Comune </p>
                        <input 
                            type="email"
                            placeholder="nome@esempio.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full input-base"
                        />
                    </div>

                    <div className="w-full flex flex-col gap-2.5">
                        <p> Civico </p>
                        <input 
                            type="email"
                            placeholder="nome@esempio.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full input-base"
                        />
                    </div>

                    <div className="w-full flex flex-col gap-2.5">
                        <p> Cap </p>
                        <input 
                            type="email"
                            placeholder="nome@esempio.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full input-base"
                        />
                    </div>

                    <div className="w-full flex flex-col gap-2.5">
                        <p> Paese </p>
                        <input 
                            type="email"
                            placeholder="nome@esempio.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full input-base"
                        />
                    </div>

                    <div className="w-full flex flex-col gap-2.5">
                        <p> Provincia </p>
                        <input 
                            type="email"
                            placeholder="nome@esempio.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full input-base"
                        />
                    </div>

                    <div className="w-full flex flex-col gap-2.5">
                        <p> Email </p>
                        <input 
                            type="email"
                            placeholder="nome@esempio.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full input-base"
                        />
                    </div>

                    <div className="w-full flex flex-col gap-2.5">
                        <p> Telefono </p>
                        <input 
                            type="email"
                            placeholder="nome@esempio.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full input-base"
                        />
                    </div>
                    
                    <button className="button-primary-base">
                        Salva i dati
                    </button>
                </div>
            )}
          </div>
    )
}