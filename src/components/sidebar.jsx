import React, { useState, useEffect, useRef } from "react";
import ArrowRight from "../assets/icons/arrow-right.svg";
import WhiteRight from "../assets/icons/white-arrow.svg";
import HeroImg from "../assets/images/hero-img.png";
import IphoneImg from "../assets/images/apple-img.png";
import { Link } from "react-router-dom";
import "/src/index.css";

// Rozmatov Sardor 

const Sidebar = () => {

  const slides = [1,2,3,4,5]
  const [current, setCurrent] = useState(0)
  const slideRef = useRef(null)
  const totalSlides = slides.length


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1)% totalSlides)
    }, 5000)
    return() => clearInterval(interval)
  }, totalSlides)


  return (
    <div className="flex mt-[-17px] relative mb-[140px]" >
      
      <div className="w-[233px] h-[384px] border-r-[0.5px] border-r-[#c5c2c2] pt-[40px] pr-[16px]">
        <p className="flex items-center justify-between font-normal text-base leading-6 font-poppins relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
          Woman’s Fashion <img src={ArrowRight} alt="arrow-right" />
        </p>
        <p className="flex items-center justify-between mt-[16px] font-normal text-base leading-6 font-poppins relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
          Men’s Fashion <img src={ArrowRight} alt="arrow-right" />
        </p>
        <p className="flex items-center justify-between mt-[16px] font-normal text-base leading-6 font-poppins relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
          Electronics
        </p>
        <p className="flex items-center justify-between mt-[16px] font-normal text-base leading-6 font-poppins relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
          Home & Lifestyle
        </p>
        <p className="flex items-center justify-between mt-[16px] font-normal text-base leading-6 font-poppins relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
          Medicine
        </p>
        <p className="flex items-center justify-between mt-[16px] font-normal text-base leading-6 font-poppins relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
          Sports & Outdoor
        </p>
        <p className="flex items-center justify-between mt-[16px] font-normal text-base leading-6 font-poppins relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
          Baby’s & Toys
        </p>
        <p className="flex items-center justify-between mt-[16px] font-normal text-base leading-6 font-poppins relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
          Groceries & Pets
        </p>
        <p className="flex items-center justify-between mt-[16px] font-normal text-base leading-6 font-poppins relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
          Health & Beauty
        </p>
      </div>

      <div className="relative w-[892px] h-[344px] mt-[40px] ml-[45px] overflow-hidden">
        <div ref={slideRef}
         className="flex transition-transform duration-700 ease-in-out"
         style={{transform:`translateX(-${current * 100}%)`}}>
          {slides.map((_, index) => (
          <div key={index}
           className="flex-shrink-0 flex justify-betweenw w-[892px] h-[344px] bg-[#000] text-[#fafafa]">
            <div className="w-[294px] h-[229px] mt-[58px] ml-[64px] ">
              <div className="flex items-center gap-6 ">
              <img src={IphoneImg} alt="iphoneimg" />
              <p className="font-normal text-base leading-6 tracking-[0%] text-center font-poppins">
                iPhone 14 Series</p>

            </div>
            <h3 className="font-semibold text-5xl leading-[60px] tracking-[4%] mt-[20px] mb-[22px]">Up to 10% off Voucher</h3>
            <Link 
            to="/" className="flex items-center gap-2 font-medium text-base leading-6 tracking-[0%] text-center font-poppins underline underline-offset-[10px]">Shop Now
           <img className="animate-slide" src={WhiteRight} alt="white-arrow" />
            </Link>
            </div>
            <img src={HeroImg} alt="heroimg" />
          </div>
))}
        </div>


        <div className="flex items-center gap-3 absolute bottom-3 left-1/2 -translate-x-1/2">
          {slides.map((_,index) => (
            <div key={index} onClick={() => setCurrent(index)} className={`cursor-pointer rounded-full ${
              current === index
              ? "w-[14px] h-[14px] bg-[#DB4444] border-2 border-white"
              : "w-[12px] h-[12px] bg-gray-500"
            }`}>

            </div>

          ))}
        </div>




        
      </div>

      
      
    </div>
  );
};

export default Sidebar;

