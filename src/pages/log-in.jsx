import React from 'react'
import { Button } from "antd";
import { Link } from "react-router-dom";
import Google from "../assets/icons/google.svg";
import SideImg from "../assets/images/side-img.png";

const LogIn = () => {
  return (
    <div className="container mx-auto">
          <div className="mt-[60px] mb-[140px] flex">
            <img className="ml-[-135px]" src={SideImg} alt="sideimg" />
            <div className="w-[371px] h-[530px] mt-[227px] ml-[129px] ">
              <p className="font-medium text-4xl leading-[30px] tracking-[4%] inter">
                Create an account
              </p>
              <p className=" font-normal text-base leading-6 tracking-[0%] font-poppins mt-6">
                Enter your details below
              </p>
              <input
                className="w-[370px] h-[32px] mt-[48px] border-b-2 border-[#909090]
               font-normal text-base leading-6 tracking-[0%] font-poppins outline-none"
                type="text"
                placeholder="Email or Phone Number"
              />
              <input
                className="w-[370px] h-[32px] mt-[40px] border-b-2 border-[#909090]
               font-normal text-base leading-6 tracking-[0%] font-poppins outline-none"
                type="password"
                placeholder="Password"
              />
    
              <div className="flex justify-between mt-[40px] mb-4">
                <Button className="w-[143px] font-medium text-base leading-6 tracking-[0%] " type="primary">
                  Log In
                </Button>

                <Link className='text-[#DB4444] mt-4 font-normal text-base leading-6 tracking-[0%] font-poppins'>Forget Password?</Link>
              </div>
            </div>
          </div>
        </div>
  )
}

export default LogIn
