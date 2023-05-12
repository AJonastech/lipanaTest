import logo from "../Assets/Images/usa.png"
import logo1 from "../Assets/Images/kenya.png"
import Details from "./details"
import{AiOutlineClose} from "react-icons/ai"
import { exchangeInput } from "../App"
import { useContext } from "react"
function Modal() {
const data = useContext(exchangeInput)
const closeModal = useContext(exchangeInput).setModal
    return (
      <>
      {
     data.modal ?(
      <div className="w-full flex items-center justify-center z-20 h-screen fixed top-0 right-0 opacity">
      <div className="max-w-[592px] pt-2 relative pb-7 mt-9 z-20  px-10 w-[90%] bg-white md:rounded-[40px] rounded-xl font-inter">
          <AiOutlineClose onClick={()=>{closeModal(false)}} className="absolute text-2xl right-7 top-3"/>
          <h2 className="text-center font-medium text-[20px] mb-7">Confirm Transaction</h2>
          <div className="flex gap-4  flex-col">
          <Details logo={logo} amount={data.input} contact={data.payment.email} currency={"USD"}/>
          <Details logo={logo1} amount={data.input * 137} contact={"+254-"+data.payment.number} currency={"KSH"}/>
            <button className="w-full py-2 rounded-xl bg-lipanaLightBlue text-white">
              Confirm
            </button>
          </div>
        </div>
      </div>
     ) : <></>

      }
     
      </>
     
    )
}

export default Modal
