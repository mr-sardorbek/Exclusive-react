import React from 'react'
import Button from './button'
import Coat from '../assets/images/coat.png'
import GucciBag from '../assets/images/gucci-bag.png'
import Cooler from '../assets/images/cooler.png'
import Bookself from '../assets/images/bookself.png'
import HeartIcon from "../assets/icons/heart-icon.svg";
import EyeIcon from "../assets/icons/eye-icon.svg";
import FullStar from "../assets/icons/full-star.svg";
import EmptyStar from "../assets/icons/empty-star.svg";
import HalfFilledStar from "../assets/icons/star-half-filled.svg";


const products = [
  {
    id: 1,
    img: Coat,
    title: "The north coat",
    oldprice: 360,
    newprice: 260,
    discount: -40,
    rating: 5,
    ratingCount: 65,
  },
  {
    id: 2,
    img: GucciBag,
    title: "Gucci duffle bag",
    oldprice: 1160,
    newprice: 960,
    discount: -35,
    rating: 4.5,
    ratingCount: 65,
  },
  {
    id: 3,
    img: Cooler,
    title: "RGB liquid CPU Cooler",
    oldprice: 170,
    newprice: 160,
    discount: -30,
    rating: 4.5,
    ratingCount: 65,
  },
  {
    id: 4,
    img: Bookself,
    title: "Small BookSelf ",
    oldprice: 400,
    newprice: 360,
    discount: -25,
    rating: 5,
    ratingCount: 65,
  }
];

const SellingProduct = () => {
  return (
     <div className="mt-[60px] mb-[140px]">
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
  )
}

export default SellingProduct
