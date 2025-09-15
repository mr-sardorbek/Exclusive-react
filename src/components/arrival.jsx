import React from "react";
import { Link } from "react-router-dom";
import PS5 from "../assets/images/ps5.png";

const Arrival = () => {
  return (
    <div className="h-[600px] mb-[140px] mt-[60px]">
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
      <div></div>
    </div>
  );
};

export default Arrival;
