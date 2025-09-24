import React, { useState, useEffect } from "react";
import Gamepad from "../assets/images/havit-gamepad.png";
import Keyboard from "../assets/images/keyboard.png";
import Monitor from "../assets/images/monitor.png";
import Chair from "../assets/images/chair.png";
import EyeIcon from "../assets/icons/eye-icon.svg";
import FullStar from "../assets/icons/full-star.svg";
import EmptyStar from "../assets/icons/empty-star.svg";
import HalfFilledStar from "../assets/icons/star-half-filled.svg";
import Button from "./button";

const products = [
  {
    id: "cards-1",
    img: Gamepad,
    title: "HAVIT HV-G92 Gamepad",
    oldprice: 160,
    newprice: 120,
    discount: -40,
    rating: 5,
    ratingCount: 88,
  },
  {
    id: "cards-2",
    img: Keyboard,
    title: "AK-900 Wired Keyboard",
    oldprice: 1160,
    newprice: 960,
    discount: -35,
    rating: 4,
    ratingCount: 75,
  },
  {
    id: "cards-3",
    img: Monitor,
    title: "IPS LCD Gaming Monitor",
    oldprice: 400,
    newprice: 370,
    discount: -30,
    rating: 5,
    ratingCount: 99,
  },
  {
    id: "cards-4",
    img: Chair,
    title: "S-Series Comfort Chair ",
    oldprice: 400,
    newprice: 375,
    discount: -25,
    rating: 4.5,
    ratingCount: 99,
  },
  {
    id: "cards-5",
    img: Chair,
    title: "S-Series Comfort Chair ",
    oldprice: 400,
    newprice: 375,
    discount: -25,
    rating: 4.5,
    ratingCount: 99,
  },
];

const Cards = () => {
  const [wishlist, setWishlist] = useState([]);

  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(saved);
    setLikedProducts(saved.map((item) => item.id));
  }, []);

  const toggleWishlist = (product) => {
    let updatedWishlist;
    if (wishlist.find((item) => item.id === product.id)) {
      updatedWishlist = wishlist.filter((item) => item.id !== product.id);
      setLikedProducts((prev) => prev.filter((id) => id !== product.id));
    } else {
      updatedWishlist = [...wishlist, product];
      setLikedProducts((prev) => [...prev, product.id]);
    }

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // add to cart

  const [addedItems, setAddedItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setAddedItems(savedCart.map((item) => item.id));
  }, []);

  const addToCart = (product) => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = savedCart.find((item) => item.id === product.id);

    let updatedCart;
    if (existing) {
      updatedCart = savedCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...savedCart, { ...product, quantity: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    if (!addedItems.includes(product.id)) {
      setAddedItems((prev) => [...prev, product.id]);
    }

    window.dispatchEvent(new Event("cart-updated"));
  };

  return (
    <div className="max-w-[1170px] mx-auto overflow-x-auto [&::-webkit-scrollbar]:hidden">
      <div className="flex items-center gap-[30px] w-max ">
        {products.map((product) => {
          const isLiked = wishlist.find((item) => item.id === product.id);

          return (
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
                <p
                  className="absolute top-3 left-3 w-[55px] h-[26px] rounded px-3 py-1 bg-[#DB4444] font-normal text-xs
                leading-[18px] text-[#fafafa] font-poppins"
                >
                  {product.discount}%
                </p>

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`wishlist__btn absolute top-3 right-3 bg-[#fff] rounded-full cursor-pointer p-2 ${
                    isLiked ? "animate-ping-once" : ""
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z"
                      stroke={isLiked ? "red" : "black"}
                      fill={isLiked ? "red" : "none"}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button className="absolute top-[54px] right-3 bg-[#fff] rounded-full cursor-pointer">
                  <img src={EyeIcon} alt="eyeicon" />
                </button>
                <Button
                  onClick={() => addToCart(product)}
                  disabled={addedItems.includes(product.id)}
                  label={
                    addedItems.includes(product.id) ? "Added" : "Add To Cart"
                  }
                />
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
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
