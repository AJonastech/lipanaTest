/* eslint-disable jsx-a11y/img-redundant-alt */
import foot1 from "../Assets/Images/foot1.png"
import foot2 from "../Assets/Images/foot2.png"
import React from "react";
import logo from "../Assets/Images/logo.png";
function Footer() {
  return (
    <footer className="px-5 md:px-10 py-10">
      <div className="font-inter flex flex-col md:flex-row text-white justify-between ">
      <div className="basis-1/3">
        <img src={logo} alt="company's Logo" />
        <p className="text-[16px] mt-7 font-light ">
          Mobishare is a registered Kenyan Company authorized to provide
          financial services to you.
        </p>
      </div>
   <div className="basis-2/3 mt-5 md:mt-0 flex">
   <div className="basis-1/2 flex flex-col gap-5 md:text-center">
        <h2 className="font-bold ">Company</h2>
        <ul>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
      </div>
      <div className="basis-1/2 text-center flex flex-col gap-5 md:text-center">
      <h2 className="font-bold">Legal</h2>
        <ul>
            <li>Privacy Of policy</li>
            <li>Terms Of Use</li>
        </ul>
      </div>
   </div>
      </div>
      <div className="text-white md:items-end flex-col-reverse md:flex-row  mt-7 flex justify-between">
        <p className="text-center text-[16px] mt-3 md:mt-0">Copyright © 2023 Mobishare | All Rights Reserved.</p>
        <div className="flex gap-3">
            <img src={foot2} alt="image"/>

            <img src={foot1} alt="image"/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
