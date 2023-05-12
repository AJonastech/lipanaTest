import React from 'react'
import { handleNumberChangeB } from '../utils'
import { exchangeInput } from '../App'
import { useContext } from 'react'
export default function Details({logo, contact, currency,amount}) {
    const data = useContext(exchangeInput)
    return (
    <>
    <h3 className="text-[19px] text-darkGray font-normal mb-2">
              { currency === "USD" ? "You" : "To"} <span className="font-bold">{contact}</span>  { currency === "USD" ? "are about to send:" : "They will recieve via mpesa"} 
                </h3>
                <div className=" items-center py-2 flex gap-4 px-3">
        <img
          src={logo}
          className="w-[22px] rounded-full"
          alt="country's logo"
        />
        <p className=" text-darkgray font-normal text-[23px]">{currency}</p>
        <p className="font-bold bg-lightGray py-2 rounded-md px-6">${currency === "USD" ? amount :handleNumberChangeB( parseInt(data.input.replace(/[\s,]/g, ''),10)*137, ",")}</p>
      </div>
    </>
    )
}
