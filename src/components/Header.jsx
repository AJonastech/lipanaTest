import React from 'react'
import logo from "../Assets/Images/logo.png"
function Header() {
    return (
      <header className='z-20 flex flex-col items-center'>
    <img  src={logo} alt="logo"/>
    <h2 className='mt-10 font-bold font-inter text-[28px] px-4 text-white text-center md:text-[35px]'>Send Money To <span className='text-lipanaGreen'>Kenya,</span> Fast.</h2>
    <p className='text-[#ADADAD] px-4 text-center text-[16px]'>Send money to Family and Friends. No signup required.</p>
      </header>
    )
}

export default Header
