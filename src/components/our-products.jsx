import React, { useState, useEffect } from "react";
import DogFood from "../assets/images/dogfood.png";
import Camera from "../assets/images/camera.png";
import Laptop from "../assets/images/laptop.png";
import KidsCar from "../assets/images/kidscar.png";
import Cleats from "../assets/images/cleats.png";
import Gamepad from "../assets/images/gamepad.png";
import Jacket from "../assets/images/jacket.png";
import SetProduct from "../assets/icons/setproduct.svg";
import EyeIcon from "../assets/icons/eye-icon.svg";
import FullStar from "../assets/icons/full-star.svg";
import EmptyStar from "../assets/icons/empty-star.svg";
import HalfFilledStar from "../assets/icons/star-half-filled.svg";
import Button from "./button";

const products = [
  {
    id: "our-1",
    img: DogFood,
    title: "Breed Dry Dog Food",
    newprice: 100,
    rating: 3,
    ratingCount: 35,
  },
  {
    id: "our-2",
    img: Camera,
    title: "CANON EOS DSLR Camera",
    newprice: 360,
    rating: 4,
    ratingCount: 95,
  },
  {
    id: "our-3",
    img: Laptop,
    title: "ASUS FHD Gaming Laptop",
    newprice: 700,
    rating: 5,
    ratingCount: 325,
  },
  {
    id: "our-4",
    img: SetProduct,
    title: "Curology Product Set ",
    newprice: 500,
    rating: 4,
    ratingCount: 145,
  },
  {
    id: "our-5",
    img: KidsCar,
    title: "Kids Electric Car",
    newprice: 960,
    new: true,
    rating: 5,
    ratingCount: 65,
  },

  {
    id: "our-6",
    img: Cleats,
    title: "Jr. Zoom Soccer Cleats",
    newprice: 1160,
    rating: 5,
    ratingCount: 35,
  },

  {
    id: "our-7",
    img: Gamepad,
    title: "GP11 Shooter USB Gamepad",
    newprice: 660,
    new: true,
    rating: 4.5,
    ratingCount: 55,
  },

  {
    id: "our-8",
    img: Jacket,
    title: "Quilted Satin Jacket",
    newprice: 660,
    rating: 4.5,
    ratingCount: 55,
  },
];

const OurProducts = () => {
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
    <div className="mt-[60px] mb-[60px]">
      <div className="flex items-center gap-[30px] flex-wrap ">
        {products.map((product, index) => {
          const isLiked = likedProducts.includes(product.id);
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
                {product.new && (
                  <p
                    className="absolute top-3 left-3  w-[55px] h-[26px] rounded px-3 py-1 bg-[#00FF66] font-normal text-xs
             leading-[18px] text-[#fafafa] font-poppins"
                  >
                    NEW
                  </p>
                )}
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

                <button className="absolute top-[54px] right-3 bg-[#fff] rounded-[50%] cursor-pointer">
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
          );
        })}
      </div>
    </div>
  );
};

export default OurProducts;
