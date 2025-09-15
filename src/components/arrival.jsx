import React from "react";
import { Link } from "react-router-dom";
import PS5 from "../assets/images/ps5.png";
import Woman from "../assets/images/woman.png";
import Products from "../assets/images/products.png";
import Perfume from "../assets/images/perfume.png";

const Arrival = () => {
  return (
    <div className="flex gap-[30px] h-[600px] mb-[140px] mt-[60px]">
      <div className="w-[570px] h-[600px] bg-[#000]">
        <div
          className="relative w-[511px] h-[511px]  top-[89px] left-[29px] bg-center bg-cover"
          style={{ backgroundImage: `url(${PS5})` }}
        >
          <div className="absolute w-[242px] h-[122px] opacity-100 gap-4 text-[#fafafa] left-8 bottom-8 ">
            <p className="font-semibold text-2xl leading-6 tracking-[3%] inter ">PlayStation 5</p>
            <p className="font-normal text-sm leading-[21px] tracking-[0%] font-poppins mt-4 mb-3">Black and White version of the PS5 coming out on sale.</p>
            <Link
              to="/"
              className="font-medium text-base leading-6 tracking-[0%] text-center 
              font-poppins underline underline-offset-[5px]"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="w-[570px] h-[284px] bg-[#0D0D0D]">
         <div
          className="relative w-[432px] h-[284px]  left-[138px] bg-center bg-cover"
          style={{ backgroundImage: `url(${Woman})` }}
        >
          <div className="absolute w-[255px] h-[122px] opacity-100 gap-4 text-[#fafafa] right-[291px] bottom-6 ">
            <p className="font-semibold text-2xl leading-6 tracking-[3%] inter ">Women’s Collections</p>
            <p className="font-normal text-sm leading-[21px] tracking-[0%] font-poppins mt-4 mb-3">
              Featured woman collections that give you another vibe.</p>
            <Link
              to="/"
              className="font-medium text-base leading-6 tracking-[0%] text-center 
              font-poppins underline underline-offset-[5px]"
            >
              Shop Now
            </Link>
          </div>
        </div>

      </div>

      <div className="flex gap-[30px] mt-8">
        <div className="w-[270px] h-[284px] bg-[#212121]">
          <div
          className="relative w-[210px] h-[222px] my-[30px] mx-[30px] bg-center bg-cover"
          style={{ backgroundImage: `url(${Products})` }}
        >
           <div className="absolute w-[191px] h-[85px] l-2 opacity-100 gap-4 text-[#fafafa] bottom-2 ">
            <p className="font-semibold text-2xl leading-6 tracking-[3%] inter ">Speakers</p>
            <p className="font-normal text-sm leading-[21px] tracking-[0%] font-poppins mt-2 mb-2">
             Amazon wireless speakers</p>
            <Link
              to="/"
              className="font-medium text-base leading-6 tracking-[0%] text-center 
              font-poppins underline underline-offset-[5px]"
            >
              Shop Now
            </Link>
          </div>

        </div>

        </div>

        <div className="w-[270px] h-[284px] bg-[#212121]">
          <div
          className="relative w-[210px] h-[222px] my-[30px] mx-[30px] bg-center bg-cover"
          style={{ backgroundImage: `url(${Perfume})` }}
        >
           <div className="absolute w-[191px] h-[85px] l-2 opacity-100 gap-4 text-[#fafafa] bottom-2 ">
            <p className="font-semibold text-2xl leading-6 tracking-[3%] inter ">Perfume</p>
            <p className="font-normal text-sm leading-[21px] tracking-[0%] font-poppins mt-2 mb-2">
             GUCCI INTENSE OUD EDP</p>
            <Link
              to="/"
              className="font-medium text-base leading-6 tracking-[0%] text-center 
              font-poppins underline underline-offset-[5px]"
            >
              Shop Now
            </Link>
          </div>

        </div>

        </div>
      </div>
      </div>
    </div>
  );
};

export default Arrival;
