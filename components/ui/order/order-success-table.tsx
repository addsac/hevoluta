'use client'

export default function OrderSuccessTable(){
    return (
        <div className="w-full flex flex-col gap-10 overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="border-y border-black text-left">
                        <th className="px-3 py-5 uppercase font-normal whitespace-nowrap">Data</th>
                        <th className="px-3 py-5 uppercase font-normal whitespace-nowrap">Numero d'ordine</th>
                        <th className="px-3 py-5 uppercase font-normal whitespace-nowrap">Totale</th>
                        <th className="px-3 py-5 uppercase font-normal whitespace-nowrap">Stato</th>
                        <th className="px-3 py-5 uppercase font-normal whitespace-nowrap">Reso</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-3 py-5 whitespace-nowrap">14/03/2023</td>
                        <td className="px-3 py-5 whitespace-nowrap">1403G618723022</td>
                        <td className="px-3 py-5 whitespace-nowrap">eur 462,00</td>
                        <td className="px-3 py-5 whitespace-nowrap">in attesa di conferma</td>
                        <td className="px-3 py-5 whitespace-nowrap"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}