import React from "react";
import AboutSideImg from '../assets/images/about-img.png'

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-[12px] w-[455px] h-[21px] mt-[80px] mb-[42px] ">
        <p className=" font-normal text-sm font-poppins text-[#909090] cursor-pointer">
          Home
        </p>
        <p className="text-[#909090] mb-1">/</p>
        <p className="text-[#000] font-normal text-sm font-poppins cursor-pointer">
          About
        </p>
      </div>

      <div className="flex gap-[75px] h-[609px] mb-[140px]">
        <div className="w-[525px] h-[336px] mt-[137px]">
          <p className="font-semibold text-[54px] leading-[64px] tracking-[6%] text-justify inter">Our Story</p>
          <p className=" font-normal text-base leading-[26px] tracking-[0%] font-poppins mt-[40px]">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className=" font-normal text-base leading-[26px] tracking-[0%] font-poppins mt-6">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <img className="mr-[-135px]" src={AboutSideImg} alt="aboutsideimg" />
      </div>
    </div>
  );
};

export default About;
