export const numberFormater = (num, separator)=>{
let stringifyNum = num.toString();
let result= "";
for (let i = 0; i< stringifyNum.length; i++){
if(i%3===0 & i !==0){
    result +=separator
}
result+=reverseStr(stringifyNum)[i]
}
return reverseStr(result);
}
export const handleNumberChange = (e, exchangeState, separator)=>{
    const value =e.target.value;
   if(value && !isNaN(parseInt(value.replace(/[\s,]/g, ''),10))){
    const numberValue = parseInt(value.replace(/[\s,]/g, ''),10);
    const modNum = numberFormater(numberValue, separator)

    exchangeState.setPayment({
        ...exchangeState.payment,
        number: modNum,
      });
   }else{
    exchangeState.setPayment({
        ...exchangeState.payment,
        number: "",
      });
   }
}
export const handleNumberChangeA = (e, separator, setInputState)=>{
    const value =e.target.value;
   if(value && !isNaN(parseInt(value.replace(/[\s,]/g, ''),10))){
    const numberValue = parseInt(value.replace(/[\s,]/g, ''),10);
    const modNum = numberFormater(numberValue, separator)

   setInputState(modNum);
   }else{
   setInputState("")
      };
   }
   export const handleNumberChangeB = (num, separator)=>{
if(num){
    return numberFormater(num, separator)
}else{
    return "0.00";
}
  
   }
function reverseStr(string){
    return string.split("").reverse().join("");
}