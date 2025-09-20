import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import Google from "../assets/icons/google.svg";
import SideImg from "../assets/images/side-img.png";

const SignUp = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-[60px] mb-[140px] flex">
        <img className="ml-[-135px]" src={SideImg} alt="sideimg" />
        <div className="w-[371px] h-[530px] mt-[125.5px] ml-[129px] ">
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
            placeholder="Name"
          />
          <input
            className="w-[370px] h-[32px] mt-[40px] border-b-2 border-[#909090]
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

          <div className="flex justify-center mt-[40px] mb-4">
            <Button className="w-[371px] font-medium text-base leading-6 tracking-[0%] " type="primary">
              Create Account
            </Button>
          </div>

          <Button
            className="w-[371px] outline-none "
            style={{ borderColor: "#909090" }}
          >
            <img src={Google} alt="google" />
            Sign up with Google
          </Button>

          <div className="flex items-center justify-center gap-4 w-[248px] mt-8 ml-[61px]">
            <p className="font-normal text-base leading-6 tracking-[0%] font-poppins text-[#4D4D4D]">Already have account?</p>
            <Link className="underline-offset-[10px] font-medium text-base leading-6 tracking-[0%] text-[#4D4D4D]
            border-b-2 hover:text-[#434242]" to='/login'>Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
