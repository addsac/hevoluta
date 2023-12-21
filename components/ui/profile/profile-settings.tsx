'use client'

import Alert from 'components/ui/state/alert';
import { ShopifyCustomer } from 'lib/shopify/types';
import { PublishedDateFormatted } from 'lib/utils';
import Link from 'next/link';
import { useState } from 'react';

export default function ProfileSettings({
    customer,
    updateCustomer,
    updateAddress,
} : {
    customer: ShopifyCustomer;
    updateCustomer: any;
    updateAddress: any;
}){
    const [page, setPage] = useState<number>(0);

    // form data - page 1
    // Email, Nome, Cognome, Password, Telefono, Email marketing
    const [emailUserData, setEmailUserData] = useState<string>(customer.email);
    const [nameUserData, setNameUserData] = useState<string>(customer.firstName);
    const [surnameUserData, setSurnameUserData] = useState<string>(customer.lastName);
    const [phoneUserData, setPhoneUserData] = useState<string>(customer.defaultAddress.phone);
    const [emailMarketingUserData, setEmailMarketingUserData] = useState<boolean>(customer.acceptsMarketing);

    const [loadingUserData, setLoadingUserData] = useState(false);
    const [errorUserData, setErrorUserData] = useState('');
    const [successUserData, setSuccessUserData] = useState('');

    const saveCustomerData = async () => {
        // client validations
        if(emailUserData.length == 0 || nameUserData.length == 0 || surnameUserData.length == 0 || phoneUserData.length == 0){
            setErrorUserData('I campi obbligatori sono: email, nome e cognome.')
            return
        }

        setLoadingUserData(true)
        setErrorUserData('')
        setSuccessUserData('')

        const res = await updateCustomer({
            email: emailUserData,
            firstName: nameUserData,
            lastName: surnameUserData,
            phone: phoneUserData,
            acceptsMarketing: emailMarketingUserData
        })

        if(res?.customerUserErrors[0]?.message){
            setErrorUserData(res?.customerUserErrors[0]?.message)
        } else{
            setSuccessUserData('Dati aggiornati con successo.')
        }

        setLoadingUserData(false)
    }

    // form data - page 2
    const [name, setName] = useState<string>(customer.defaultAddress.firstName);
    const [surname, setSurname] = useState<string>(customer.defaultAddress.lastName);
    const [address, setAddress] = useState<string>(customer.defaultAddress.address1);
    const [city, setCity] = useState<string>(customer.defaultAddress.city);
    const [civicNumber, setCivicNumber] = useState<string>(customer.defaultAddress.address2);
    const [cap, setCap] = useState<string>(customer.defaultAddress.zip);
    const [nation, setNation] = useState<string>(customer.defaultAddress.country);
    const [province, setProvince] = useState<string>(customer.defaultAddress.province);
    const [email, setEmail] = useState<string>(customer.email);
    const [phone, setPhone] = useState<string>(customer.defaultAddress.phone);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const saveCustomerAddressData = async () => {
        // client validations
        if(address.length == 0 || city.length == 0 || nation.length == 0 || name.length == 0 || surname.length == 0 || province.length == 0 || cap.length == 0){
            setError('I campi obbligatori sono: indirizzo, città, paese, nome, cognome, provincia e cap.')
            return
        }

        setLoading(true)
        setError('')
        setSuccess('')

        const res = await updateAddress({
            address1: address,
            address2: civicNumber,
            city: city,
            country: nation,
            firstName: name,
            lastName: surname,
            phone: phone,
            province: province,
            zip: cap
        })

        if(res?.customerUserErrors[0]?.message){
            setError(res?.customerUserErrors[0]?.message)
        } else{
            setSuccess('Indirizzo aggiornato con successo.')
        }

        setLoading(false)
    }

    return (
        <div className="w-full overflow-x-auto flex flex-col gap-10">
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
                    I miei dati
                </button>
                <button 
                    className={page == 1 ? 'button-cips-menu-active' : 'button-cips-menu-inactive'}
                    onClick={() => setPage(2)}
                >
                    Indirizzo di spedizione
                </button>
                {/* <button className="button-cips-menu-inactive">
                    Log out
                </button> */}
            </div>

            {/* table */}
            {page === 0 && (
                <table className="w-full">
                    <thead>
                        <tr className="border-y border-black text-left">
                            <th className="px-3 py-5 uppercase font-normal whitespace-nowrap">Data</th>
                            <th className="px-3 py-5 uppercase font-normal whitespace-nowrap">Numero d'ordine</th>
                            <th className="px-3 py-5 uppercase font-normal whitespace-nowrap">Prodotti</th>
                            <th className="px-3 py-5 uppercase font-normal whitespace-nowrap">Totale</th>
                            <th className="px-3 py-5 uppercase font-normal whitespace-nowrap">Stato</th>
                            <th className="px-3 py-5 uppercase font-normal whitespace-nowrap">Dettaglio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customer.orders.edges.map((order, index) => (
                            <tr key={'row-orders-'+index}>
                                <td className="px-3 py-5 whitespace-nowrap">
                                    {PublishedDateFormatted({
                                        published: order.node.processedAt
                                    })}
                                </td>
                                <td className="px-3 py-5 whitespace-nowrap">
                                    {order.node.orderNumber}
                                </td>
                                <td className="px-3 py-5 whitespace-nowrap">
                                    <ul className="list-disc list-inside">
                                        {order.node.lineItems.edges.map((product, index) => (
                                            <li key={'row-orders-products-'+index}>
                                                {product.node.quantity} x {product.node.title}
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td className="px-3 py-5 whitespace-nowrap">
                                    {order.node.totalPrice.currencyCode} {Number(order.node.totalPrice.amount).toFixed(2)}
                                </td>
                                <td className="px-3 py-5 whitespace-nowrap">
                                    {order.node.fulfillmentStatus}
                                </td>
                                <td className="px-3 py-5 whitespace-nowrap">
                                    <Link href={order.node.statusUrl} target="_blank" rel="noopener noreferrer">
                                        <button className="button-text-blue">
                                            Apri l'ordine    
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {page === 1 && (
                <div className="flex flex-col items-start gap-8 w-full lg:w-1/2">
                    <div className="w-full flex flex-col gap-2.5">
                        <p> Email </p>
                        <input 
                            type="text"
                            placeholder=""
                            value={emailUserData}
                            onChange={(e) => setEmailUserData(e.target.value)}
                            className="w-full input-base"
                        />
                    </div>

                    <div className="w-full flex flex-col gap-2.5">
                        <p> Nome </p>
                        <input 
                            type="text"
                            placeholder=""
                            value={nameUserData}
                            onChange={(e) => setNameUserData(e.target.value)}
                            className="w-full input-base"
                        />
                    </div>

                    <div className="w-full flex flex-col gap-2.5">
                        <p> Cognome </p>
                        <input 
                            type="text"
                            placeholder=""
                            value={surnameUserData}
                            onChange={(e) => setSurnameUserData(e.target.value)}
                            className="w-full input-base"
                        />
                    </div>

                    <div className="w-full flex flex-col gap-2.5">
                        <p> Telefono </p>
                        <input 
                            type="text"
                            placeholder=""
                            value={phoneUserData}
                            onChange={(e) => setPhoneUserData(e.target.value)}
                            className="w-full input-base"
                        />
                    </div>

                    <div className="flex items-center justify-start gap-2">
                        <input
                            type="checkbox"
                            checked={emailMarketingUserData}
                            onChange={() => setEmailMarketingUserData(!emailMarketingUserData)}
                            id="newsletter"
                            className="checkbox-base shrink-0"
                        />
                        <label htmlFor="newsletter">
                            <p className="inline">
                                Email marketing
                            </p>
                        </label>
                    </div>

                    {errorUserData !== '' && (
                        <Alert 
                            text={errorUserData}
                            state="error"
                        />
                    )}

                    {successUserData !== '' && (
                        <Alert 
                            text={successUserData}
                            state="success"
                        />
                    )}
                    
                    <button 
                        className="button-primary-base"
                        onClick={() => saveCustomerData()}
                        disabled={loadingUserData}
                    >
                        {loadingUserData ? 'Carcamento...' : 'Salva i dati'}
                    </button>
                </div>
            )}

            {page === 2 && (
                <div className="flex flex-col items-start gap-8 w-full lg:w-1/2">
                    <div className="w-full flex flex-col gap-2.5">
                        <p> Nome </p>
                        <input 
                            type="text"
                            placeholder=""
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full input-base"
                        />
                    </div>

                    <div className="w-full flex flex-col gap-2.5">
                        <p> Cognome </p>
                        <input 
                            type="text"
                            placeholder=""
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            className="w-full input-base"
                        />
                    </div>

                    <div className="w-full flex flex-col gap-2.5">
                        <p> Indirizzo </p>
                        <input 
                            type="text"
                            placeholder=""
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full input-base"
                        />
                    </div>

                    <div className="w-full flex flex-col gap-2.5">
                        <p> Comune </p>
                        <input 
                            type="text"
                            placeholder=""
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="w-full input-base"
                        />
                    </div>

                    <div className="w-full flex flex-col gap-2.5">
                        <p> Civico </p>
                        <input 
                            type="text"
                            placeholder=""
                            value={civicNumber}
                            onChange={(e) => setCivicNumber(e.target.value)}
                            className="w-full input-base"
                        />
                    </div>

                    <div className="w-full flex flex-col gap-2.5">
                        <p> Cap </p>
                        <input 
                            type="text"
                            placeholder=""
                            value={cap}
                            onChange={(e) => setCap(e.target.value)}
                            className="w-full input-base"
                        />
                    </div>

                    <div className="w-full flex flex-col gap-2.5">
                        <p> Paese </p>
                        <input 
                            type="text"
                            placeholder=""
                            value={nation}
                            onChange={(e) => setNation(e.target.value)}
                            className="w-full input-base"
                        />
                    </div>

                    <div className="w-full flex flex-col gap-2.5">
                        <p> Provincia </p>
                        <input 
                            type="text"
                            placeholder=""
                            value={province}
                            onChange={(e) => setProvince(e.target.value)}
                            className="w-full input-base"
                        />
                    </div>

                    <div className="w-full flex flex-col gap-2.5">
                        <p> Email </p>
                        <input 
                            type="email"
                            placeholder=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full input-base"
                        />
                    </div>

                    <div className="w-full flex flex-col gap-2.5">
                        <p> Telefono </p>
                        <input 
                            type="phone"
                            placeholder=""
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full input-base"
                        />
                    </div>

                    {error !== '' && (
                        <Alert 
                            text={error}
                            state="error"
                        />
                    )}

                    {success !== '' && (
                        <Alert 
                            text={success}
                            state="success"
                        />
                    )}
                    
                    <button 
                        className="button-primary-base"
                        onClick={() => saveCustomerAddressData()}
                        disabled={loading}
                    >
                        {loading ? 'Carcamento...' : 'Salva i dati'}
                    </button>
                </div>
            )}
          </div>
    )
}