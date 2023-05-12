import ExchangeInput from "./ExchangeInput";
import usa from "../Assets/Images/usa.png"
import kenya from "../Assets/Images/kenya.png"
import { useContext, useState } from "react";
import { exchangeInput } from "../App";
function ExchangeRate() {
    const exchangeState = useContext(exchangeInput);
     const [warn, setWarn] = useState("")
    const handleSubmit = ()=>{
        if(!exchangeState.input){
             setWarn("red-500")
        }else{
            exchangeState.setDisExchange(!exchangeState.disExchange);
        }
 
    
    }
    console.log(exchangeState.disExchange)
  return (
    <>
    {
exchangeState.disExchange && (

    <div className="max-w-[592px] md:pt-2 pt-5 md:pb-7 pb-12  mt-9 z-20 px-4 md:px-10 w-[90%] bg-white md:rounded-[55px] rounded-xl font-inter">
    <h2 className="text-center font-medium text-[20px] mb-7">Exchange Rate</h2>
    <form onSubmit={(e)=>{e.preventDefault(); handleSubmit()}} className="flex gap-7 flex-col">
      <ExchangeInput logo={usa} warn={warn} setWarn={setWarn} description={"You Send"} currency={"USD"}/>
      <ExchangeInput logo={kenya} description={"They recieve"} currency={"KSH"}/>
      <button className="w-full py-2 rounded-xl bg-lipanaLightBlue text-white">
        Proceed
      </button>
    </form>
  </div>

)
    }
   
     </>

  );
}

export default ExchangeRate;
