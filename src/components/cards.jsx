import React from "react";
import Gamepad from "../assets/images/havit-gamepad.png";
import Keyboard from "../assets/images/keyboard.png";
import Monitor from "../assets/images/monitor.png";
import Chair from "../assets/images/chair.png";
import HeartIcon from "../assets/icons/heart-icon.svg";
import EyeIcon from "../assets/icons/eye-icon.svg";
import FullStar from "../assets/icons/full-star.svg";
import EmptyStar from "../assets/icons/empty-star.svg";
import HalfFilledStar from "../assets/icons/star-half-filled.svg";
import Button from "./button";

const products = [
  {
    id: 1,
    img: Gamepad,
    title: "HAVIT HV-G92 Gamepad",
    oldprice: 160,
    newprice: 120,
    discount: -40,
    rating: 5,
    ratingCount: 88,
  },
  {
    id: 2,
    img: Keyboard,
    title: "AK-900 Wired Keyboard",
    oldprice: 1160,
    newprice: 960,
    discount: -35,
    rating: 4,
    ratingCount: 75,
  },
  {
    id: 3,
    img: Monitor,
    title: "IPS LCD Gaming Monitor",
    oldprice: 400,
    newprice: 370,
    discount: -30,
    rating: 5,
    ratingCount: 99,
  },
  {
    id: 4,
    img: Chair,
    title: "S-Series Comfort Chair ",
    oldprice: 400,
    newprice: 375,
    discount: -40,
    rating: 4.5,
    ratingCount: 99,
  },
  {
    id: 4,
    img: Chair,
    title: "S-Series Comfort Chair ",
    oldprice: 400,
    newprice: 375,
    discount: -40,
    rating: 4.5,
    ratingCount: 99,
  },
];

const Cards = () => {
  return (
    <div className="max-w-[1170px] mx-auto overflow-x-auto [&::-webkit-scrollbar]:hidden">
      <div className="flex items-center gap-[30px] w-max ">
      {products.map((product) => (
        <div
          key={product.id}
          className="product__item w-[270px] h-[350px] "
        >
          <div className="relative h-[250px] rounded bg-[#F5F5F5] overflow-hidden">
            <img
              className="py-[35px] px-[40px]"
              src={product.img}
              alt={product.title}
            />
            <p className="absolute top-3 left-3  w-[55px] h-[26px] rounded px-3 py-1 bg-[#DB4444] font-normal text-xs leading-[18px] text-[#fafafa] font-poppins">
              {product.discount}%
            </p>
            <button className="absolute top-3 right-3 bg-[#fff] rounded-[50%] cursor-pointer">
              <img src={HeartIcon} alt="hearticon" />
            </button>
            <button className="absolute top-[54px] right-3 bg-[#fff] rounded-[50%] cursor-pointer">
              <img src={EyeIcon} alt="eyeicon" />
            </button>
            <Button />
          </div>

          <h3 className="font-medium text-base leading-6 font-poppins mt-4 text-[#000]">
            {product.title}
          </h3>

          <div className="flex items-center justify-between w-[94px] h-[24px] mt-2">
            <p className="font-poppins font-medium text-base text-[#DB4444]">
              ${product.newprice}
            </p>
            <p className="font-poppins font-medium text-base line-through text-[#808080]">
              ${product.oldprice}
            </p>
          </div>

          <div className="flex items-center justify-between mt-2 w-[140px]">
            <div className="flex items-center justify-between w-[100px]">
              {Array(Math.floor(product.rating))
                .fill()
                .map((_, i) => (
                  <img key={i} src={FullStar} alt="fullstar" />
                ))}
              {product.rating % 1 !== 0 && (
                <img src={HalfFilledStar} alt="halfstar" />
              )}
              {Array(5 - Math.ceil(product.rating))
                .fill()
                .map((_, i) => (
                  <img key={i} src={EmptyStar} alt="emptystar" />
                ))}
            </div>
            <p className="font-semibold text-sm text-[#808080] font-poppins">
              ({product.ratingCount})
            </p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Cards;

