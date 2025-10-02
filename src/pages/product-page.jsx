import React, { useState } from "react";
import LargeGamepad from "../assets/images/large-gamepad.png";
import Gamepad1 from "../assets/images/gamepad-1.png";
import Gamepad2 from "../assets/images/gamepad-2.png";
import Gamepad3 from "../assets/images/gamepad-3.png";
import Gamepad4 from "../assets/images/gamepad-4.png";
import FullStar from "../assets/icons/full-star.svg";
import EmptyStar from "../assets/icons/empty-star.svg";
import HeartIcon from "../assets/icons/heart-icon.svg";
import FreeDelivery from "../assets/icons/delivery-free.svg";
import ReturnDelivery from "../assets/icons/delivery-return.svg";
import { Button } from "antd";

const ProductPage = () => {
  const [selectedImg, setSelectedImg] = useState(LargeGamepad);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const thumbnails = [Gamepad1, Gamepad2, Gamepad3, Gamepad4];
  const sizes = ["XS", "S", "M", "L", "XL"];

  const handleBuyNow = () => {
    const productData = {
      name: "Havic HV G-92 Gamepad",
      price: 192,
      img: selectedImg,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
    };

    localStorage.setItem("cartItem", JSON.stringify(productData));
    alert("Product added to cart!");
  };

  return (
    <div className="container mx-auto">
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

      <div className="flex items-center gap-[70px] mb-[140px]">
        <div className="flex items-center gap-[30px] w-[700px] ">
          <div className="flex flex-col w-[170px] h-[600px] gap-4">
            {thumbnails.map((thumb, index) => (
              <button
                key={index}
                className={`cursor-pointer border-2 rounded ${
                  selectedImg === thumb
                    ? "border-blue-500"
                    : "border-transparent"
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

          <div className="w-[500px] h-[600px] flex items-center justify-center bg-[#f5f5f5] rounded">
            <img
              src={selectedImg}
              alt="main-gamepad"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="w-[400px] h-[600px]">
          <p className="font-semibold text-2xl leading-6 tracking-[3%] inter">
            Havic HV G-92 Gamepad
          </p>

          <div className="flex items-center justify-between w-[290px] mt-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-between w-[100px]">
                <img src={FullStar} alt="fullstar" />
                <img src={FullStar} alt="fullstar" />
                <img src={FullStar} alt="fullstar" />
                <img src={FullStar} alt="fullstar" />
                <img src={EmptyStar} alt="emptystar" />
              </div>
              <p className="font-normal text-sm font-poppins text-[#808080]">
                (150 Reviews)
              </p>
            </div>
            <p className="font-normal text-sm font-poppins text-[#00FF66] border-l pl-4">
              In Stock
            </p>
          </div>

          <p className="font-normal text-2xl inter mt-4">$192.00</p>
          <p className="font-normal text-sm mt-6 font-poppins">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>

          <hr className="mt-6 mb-6" />

          <div className="flex items-center gap-6">
            <p className="font-normal text-xl inter">Colours:</p>
            <div className="flex items-center gap-2">
              <label>
                <input
                  type="radio"
                  name="color"
                  value="blue"
                  checked={selectedColor === "blue"}
                  onChange={() => setSelectedColor("blue")}
                  className="hidden"
                />
                <span
                  className={`w-6 h-6 rounded-full bg-blue-500 border cursor-pointer inline-block ${
                    selectedColor === "blue" ? "ring-2 ring-black" : ""
                  }`}
                ></span>
              </label>

              <label>
                <input
                  type="radio"
                  name="color"
                  value="red"
                  checked={selectedColor === "red"}
                  onChange={() => setSelectedColor("red")}
                  className="hidden"
                />
                <span
                  className={`w-6 h-6 rounded-full bg-red-500 border cursor-pointer inline-block ${
                    selectedColor === "red" ? "ring-2 ring-black" : ""
                  }`}
                ></span>
              </label>
            </div>
          </div>
          <div className="flex items-center mt-[30px] gap-6">
            <p className="font-normal text-xl leading-5 tracking-[3%] inter">
              Size:
            </p>

            <div className="flex items-center justify-between w-[224px]">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-[32px] h-[32px] rounded border transition-all duration-300 ease-in-out
          ${
            selectedSize === size
              ? "bg-[#DB4444] text-white"
              : "hover:bg-[#DB4444] hover:text-white"
          }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center mt-6 w-[161px] h-[44px]">
            <div className="flex items-center">
              {/* Minus button */}
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="count-btns cursor-pointer flex items-center justify-center w-[40px] h-[44px] border rounded-tl rounded-bl 
      hover:bg-[#DB4444] transition-all duration-300 ease-in-out"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 12H4"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {/* Quantity */}
              <p className="flex items-center justify-center w-[80px] h-[44px] border font-medium text-xl leading-7">
                {quantity}
              </p>

              {/* Plus button */}
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="count-btns cursor-pointer flex items-center justify-center w-[40px] h-[44px] border rounded-tr rounded-br 
      hover:bg-[#DB4444] transition-all duration-300 ease-in-out"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 20V12M12 12V4M12 12H20M12 12H4"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Buy Now button */}
            <div className="w-[165px] ml-4">
              <Button
                style={{ height: "44px" }}
                type="primary"
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>
            </div>

            {/* Heart icon */}
            <img
              className="w-[40px] h-[40px] border border-solid border-[#00000080] cursor-pointer rounded ml-[19px]"
              src={HeartIcon}
              alt="wishlist"
            />
          </div>

          <div className="w-[399px] h-[180px] rounded border mt-[30px]">
            <div className="flex items-center gap-4 mt-6 ml-4">
              <img src={FreeDelivery} alt="Free-delivery" />
              <div>
                <p className="font-medium text-base font-poppins">
                  Free Delivery
                </p>
                <p className="mt-2 font-medium text-xs underline font-poppins">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>

            <hr className="mt-4 mb-4" />

            <div className="flex items-center gap-4 mb-6 ml-4">
              <img src={ReturnDelivery} alt="Free-delivery" />
              <div>
                <p className="font-medium text-base font-poppins">
                  Return Delivery
                </p>
                <p className="mt-2 font-medium text-xs font-poppins">
                  Free 30 Days Delivery Returns.{" "}
                  <span className="underline">Details</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
