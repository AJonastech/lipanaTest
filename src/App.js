import { useState } from 'react';
import './App.css';
import Index from './pages/Index'
import { createContext } from 'react';
export const exchangeInput = createContext();
function App() {
  const [input, setInput] =useState("")
  const [disExchange, setDisExchange] =useState(true)
  const [payment, setPayment] = useState({
    email : "",
    number : "",
    note: "",
  })
  const [modal, setModal] = useState(false)
  return (
    <exchangeInput.Provider value={{input, setInput, disExchange, setDisExchange, payment, setPayment, modal, setModal}}>
    <Index/>
    </exchangeInput.Provider>
  )
}

export default App;
