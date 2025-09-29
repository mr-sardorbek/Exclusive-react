import React, { useState } from "react";
import LargeGamepad from "../assets/images/large-gamepad.png";
import Gamepad1 from "../assets/images/gamepad-1.png";
import Gamepad2 from "../assets/images/gamepad-2.png";
import Gamepad3 from "../assets/images/gamepad-3.png";
import Gamepad4 from "../assets/images/gamepad-4.png";

const ProductPage = () => {
  // Asosiy rasm default holatda LargeGamepad
  const [selectedImg, setSelectedImg] = useState(LargeGamepad);

  const thumbnails = [Gamepad1, Gamepad2, Gamepad3, Gamepad4];

  return (
    <div className="container mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-[12px] w-[455px] h-[21px] mt-[80px] mb-[80px]">
        <p className="font-normal text-sm font-poppins text-[#909090] cursor-pointer">
          Account
        </p>
        <p className="text-[#909090] mb-1">/</p>
        <p className="font-normal text-sm font-poppins text-[#909090] cursor-pointer">
          Gaming
        </p>
        <p className="text-[#909090] mb-1">/</p>
        <p className="text-[#000] font-normal text-sm font-poppins cursor-pointer">
          Havic HV G-92 Gamepad
        </p>
      </div>

      {/* Product images */}
      <div className="flex items-center gap-[30px] w-[700px] mb-[140px]">
        {/* Thumbnails */}
        <div className="flex flex-col w-[170px] h-[600px] gap-4">
          {thumbnails.map((thumb, index) => (
            <button
              key={index}
              className={`cursor-pointer border-2 rounded ${
                selectedImg === thumb ? "border-blue-500" : "border-transparent"
              }`}
              onClick={() => setSelectedImg(thumb)}
            >
              <img
                src={thumb}
                alt={`gamepad-${index + 1}`}
                className="w-full h-auto object-contain"
              />
            </button>
          ))}
        </div>

        {/* Main image */}
        <div className="w-[500px] h-[600px] flex items-center justify-center bg-[#f5f5f5] rounded">
          <img
            src={selectedImg}
            alt="main-gamepad"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;



