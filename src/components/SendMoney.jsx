/* eslint-disable default-case */
import kenya from "../Assets/Images/skenya.png";
import { useContext } from "react";
import { exchangeInput } from "../App";
import { useState } from "react";
import Modal from "./Modal";
import { handleNumberChange } from "../utils";
import { handleNumberChangeB } from "../utils";
function SendMoney() {
  const [wordCount, setWordCount] = useState(0);

  const wordCounter = (str) => {
    const strArray = str.split(" ");
    if(strArray.length===0){
        setWordCount(0);
    }
    setWordCount( strArray.length);
  };

  const handleNoteChange = (e) => {
    if (wordCount >= 21) {
      setWarning({ ...warning, note: true });
    }
    exchangeState.setPayment({
      ...exchangeState.payment,
      note: e.target.value,
    });
  };
  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(exchangeState.payment.email);
  };

  const [warning, setWarning] = useState({
    email: false,
    number: false,
    note: false,
  });
  const exchangeState = useContext(exchangeInput);
  const handleSubmit = () => {
    if (!exchangeState.payment.email) {
      setWarning({ ...warning, email: true });
    } else if (!exchangeState.payment.number) {
      setWarning({ ...warning, number: true });
    } else if (!validateEmail()) {
      setWarning({ ...warning, email: true });
    } else if (exchangeState.payment.number.length !== 9) {
      setWarning({ ...warning, number: true });
    }else if(!warning.email && !warning.number && !warning.note) {
      exchangeState.setModal(true);
    }
  };

  const handleChange = (e, data) => {
    setWarning({ ...warning, email: false, number: false, note: false });
    switch (data) {
      case "email":
        exchangeState.setPayment({
          ...exchangeState.payment,
          email: e.target.value,
        });
        break;
      case "number":
        handleNumberChange(e, exchangeState, " ");
        break;
      case "note":
        handleNoteChange(e);
        break;
    }
  };
  console.log(exchangeState.payment);
  return (
    <>
      {!exchangeState.disExchange && (
        <div className="max-w-[592px] pt-2 pb-7 mt-9 z-20  px-10 w-[90%] bg-white  rounded-xl md:rounded-[55px] font-inter">
          <h2 className="text-center font-medium text-[20px] mb-7">
            Send Money To Kenya
          </h2>
          <h3 className="text-[16px] text-center text-darkGray font-medium mb-3">
            You send <span className="font-bold">${exchangeState.input}</span>,
            they recieve{" "}
            <span className="font-bold">
              Ksh&nbsp; {handleNumberChangeB( parseInt(exchangeState.input.replace(/[\s,]/g, ''),10)*137, ",")}
            </span>
          </h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="flex gap-3 flex-col"
          >
            <div>
              <p className="text-[16px] text-darkGray font-medium mb-1">
                Your Email
              </p>

              <input
                value={exchangeState.payment.email}
                onChange={(e) => handleChange(e, "email")}
                className={
                  warning.email
                    ? "border-2 border-red-500 bg-lightGray px-3 py-2 w-full  text-[16px] text-darkGray font-medium"
                    : "bg-lightGray px-3 py-2 w-full  text-[16px] text-darkGray font-medium"
                }
              />
              {warning.email && (
                <p className="text-red-500 text-[12px] mt-2">
                  Please Enter a valid email
                </p>
              )}
              <p className="text-darkGray text-[12px] mt-2">
                We will send you a receipt for payment.
              </p>
            </div>
            <div className="relative">
              <p className="text-[16px] text-darkGray font-medium mb-1">
                Recipient's Phone Number
              </p>
              <input
                value={exchangeState.payment.number}
                onChange={(e) => {
                  handleChange(e, "number");
                  console.log(exchangeState.payment.number);
                }}
                placeholder={`7 128 456`}
                maxLength={9}
                className={
                  warning.number
                    ? "bg-lightGray text-left pl-[90px] pr-3 py-2 w-full  text-[16px] text-darkGray font-medium border-2 border-red-500"
                    : "bg-lightGray text-left pl-[90px] pr-3 py-2 w-full  text-[16px] text-darkGray font-medium"
                }
              />

              <div className=" absolute bottom-[8px] left-[2px] gap-1 bg-lightGray items-center px-1 flex inline-block">
                <img src={kenya} alt="flag" />
                <p className="font-bold text-[16px]">+254</p>
              </div>
            </div>
            {warning.number && (
              <p className="text-red-500 text-[12px] mt-2">
                Please Enter a valid number
              </p>
            )}
            <div className="flex flex-col ">
              <p className="text-[16px] text-darkGray font-medium mb-1">Note</p>
              <textarea
                value={exchangeState.payment.note}
                onChange={(e) => {
                  handleChange(e, "note");
                  wordCounter(exchangeState.payment.note);
                }}
                className={
                  warning.note
                    ? "px-3 py-2 bg-lightGray w-full font-medium text-[16px] h-[121px] resize-none outline-2 outline-red-500"
                    : "px-3 py-2 bg-lightGray w-full font-medium text-[16px]  h-[121px] resize-none"
                }
              />
              <div
                className={
                  warning.note
                    ? "text-right text-[12px] text-darkGray text-red-500 font-medium"
                    : "text-right text-[12px] text-darkGray font-medium"
                }
              >
                {wordCount}/20 words
              </div>
              {warning.note && (
                <p className="text-red-500 text-[12px] mt-2">
                  Number of words cannot be greater than 20.
                </p>
              )}
            </div>
            <button className="w-full py-2 rounded-xl bg-lipanaLightBlue text-white">
              Make payment
            </button>
          </form>
        </div>
      )}
      <Modal />
    </>
  );
}

export default SendMoney;
