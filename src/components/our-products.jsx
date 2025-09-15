import React from "react";
import DogFood from "../assets/images/dogfood.png";
import Camera from "../assets/images/camera.png";
import Laptop from "../assets/images/laptop.png";
import KidsCar from "../assets/images/kidscar.png";
import Cleats from "../assets/images/cleats.png";
import Gamepad from "../assets/images/gamepad.png";
import Jacket from "../assets/images/jacket.png";
import SetProduct from "../assets/icons/setproduct.svg";
import HeartIcon from "../assets/icons/heart-icon.svg";
import EyeIcon from "../assets/icons/eye-icon.svg";
import FullStar from "../assets/icons/full-star.svg";
import EmptyStar from "../assets/icons/empty-star.svg";
import HalfFilledStar from "../assets/icons/star-half-filled.svg";
import Button from "./button";

const products = [
  {
    id: 1,
    img: DogFood,
    title: "Breed Dry Dog Food",
    newprice: 100,
    rating: 3,
    ratingCount: 35,
  },
  {
    id: 2,
    img: Camera,
    title: "CANON EOS DSLR Camera",
    newprice: 360,
    rating: 4,
    ratingCount: 95,
  },
  {
    id: 3,
    img: Laptop,
    title: "ASUS FHD Gaming Laptop",
    newprice: 700,
    rating: 5,
    ratingCount: 325,
  },
  {
    id: 4,
    img: SetProduct,
    title: "Curology Product Set ",
    newprice: 500,
    rating: 4,
    ratingCount: 145,
  },
  {
    id: 5,
    img: KidsCar,
    title: "Kids Electric Car",
    newprice: 960,
    new: true,
    rating: 5,
    ratingCount: 65,
  },

  {
    id: 6,
    img: Cleats,
    title: "Jr. Zoom Soccer Cleats",
    newprice: 1160,
    rating: 5,
    ratingCount: 35,
  },

  {
    id: 7,
    img: Gamepad,
    title: "GP11 Shooter USB Gamepad",
    newprice: 660,
    new: true,
    rating: 4.5,
    ratingCount: 55,
  },

  {
    id: 8,
    img: Jacket,
    title: "Quilted Satin Jacket",
    newprice: 660,
    rating: 4.5,
    ratingCount: 55,
  },
];

const OurProducts = () => {
  return (
    <div className="mt-[60px] mb-[60px]">
      <div className="flex items-center gap-[30px] flex-wrap ">
        {products.map((product, index) => (
          <div key={product.id} className="product__item w-[270px] h-[350px] ">
            <div className="relative h-[250px] rounded bg-[#F5F5F5] overflow-hidden">
              <img
                className="py-[35px] px-[40px]"
                src={product.img}
                alt={product.title}
              />
              {product.new && (
                <p
                  className="absolute top-3 left-3  w-[55px] h-[26px] rounded px-3 py-1 bg-[#00FF66] font-normal text-xs
             leading-[18px] text-[#fafafa] font-poppins"
                >
                  NEW
                </p>
              )}
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

            <div className="flex items-center  gap-2 w-[94px] h-[20px] mt-2">
              <p className="font-poppins font-medium text-base text-[#DB4444]">
                ${product.newprice}
              </p>
              <div className="flex items-center justify-between gap-2  w-[140px]">
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

            {index >= products.length - 4 && (
              <div className="flex gap-3 mt-3">
                <label>
                  <input
                    type="radio"
                    name={`color-${product.id}`}
                    className="appearance-none w-5 h-5 rounded-full bg-red-500 checked:border-black-500 checked:border-2"
                  />
                </label>

                <label>
                  <input
                    type="radio"
                    name={`color-${product.id}`}
                    className="appearance-none w-5 h-5 rounded-full bg-yellow-500 checked:border-black-500 checked:border-2"
                  />
                </label>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
