/* eslint-disable no-unused-expressions */
import { useContext } from "react";
import { exchangeInput } from "../App";
import { handleNumberChangeA, handleNumberChangeB } from "../utils";
function ExchangeInput({ description, logo, currency, warn,setWarn }) {
    const inputState = useContext(exchangeInput).input;
    const setInputState = useContext(exchangeInput).setInput;
 
console.log(inputState)
  return (
    <div className="flex  gap-4">
      <div className="md:basis-2/3 basis-[70%] relative">
        <p className="absolute top-[6px] hidden md:block left-3 bg-lightGray py-[4px] px-2 text-[16px] text-darkGray font-medium">
          {description}
        </p>
        {
            currency ==="KSH" ?      <input
            placeholder="0.00"
            value={currency === "USD" ? inputState : handleNumberChangeB( parseInt(inputState.replace(/[\s,]/g, ''),10)*137, ",")}
            onChange={(e) => handleNumberChangeA(e,  ",", setInputState)}
            className={"bg-lightGray text-right px-3 border-[2px] border-"+warn+" py-2 w-full  text-[16px] text-darkGray  font-medium"
            
          }
          readOnly
          />:      <input
          placeholder="0.00"
          value={currency === "USD" ? inputState : handleNumberChangeB( parseInt(inputState.replace(/[\s,]/g, ''),10)*137, ",")}
          onChange={(e) => handleNumberChangeA(e,  ",", setInputState)}
          className={"bg-lightGray text-right px-3 border-[2px] border-"+warn+" py-2 w-full  text-[16px] text-darkGray font-medium"
          
        }
        
        />
        }
   
      </div>
      <div className="md:basis-1/3 basis-[30%] items-center bg-lightGray py-2 flex gap-1 md:gap-4 px-3">
        <img
          src={logo}
          className="md:h-[22px] h-[18px] text-[16px] rounded-full"
          alt="country's logo"
        />
        <p className=" text-darkgray text-[16px] font-medium">{currency}</p>
      </div>
    </div>
  );
}

export default ExchangeInput;
