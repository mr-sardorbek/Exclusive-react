import { Button } from "antd";
import React, { useEffect, useState } from "react";
import DeleteIcon from "../assets/icons/delete.svg";
import EyeIcon from "../assets/icons/eye-icon.svg";
import FullStar from "../assets/icons/full-star.svg";
import EmptyStar from "../assets/icons/empty-star.svg";
import HalfFilledStar from "../assets/icons/star-half-filled.svg";
import Laptop from "../assets/images/laptop.png";
import Gamepad from "../assets/images/havit-gamepad.png";
import Keyboard from "../assets/images/keyboard.png";
import Monitor from "../assets/images/monitor.png";
import Btns from "../components/button";

const products = [
  {
    id: "wish-1",
    img: Laptop,
    title: "ASUS FHD Gaming Laptop",
    newprice: 960,
    oldprice: "$1160",
    discount: -35,
    rating: 5,
    ratingCount: 65,
  },
  {
    id: "wish-2",
    img: Monitor,
    title: "IPS LCD Gaming Monitor",
    newprice: 1160,
    rating: 5,
    ratingCount: 65,
  },
  {
    id: "wish-3",
    img: Gamepad,
    title: "HAVIT HV-G92 Gamepad",
    newprice: 560,
    new: true,
    rating: 5,
    ratingCount: 65,
  },
  {
    id: "wish-4",
    img: Keyboard,
    title: "AK-900 Wired Keyboard",
    newprice: 200,
    rating: 5,
    ratingCount: 65,
  },
];

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const moveAllToBag = () => {
    const bag = JSON.parse(localStorage.getItem("bag")) || [];

    const updatedBag = [...bag, ...wishlist];
    localStorage.setItem("bag", JSON.stringify(updatedBag));

    setWishlist([]);
    localStorage.setItem("wishlist", JSON.stringify([]));
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
    <div className="container mx-auto">
      <div className="h-[100%] mt-[80px] mb-[80px] ">
        <div className="flex items-center justify-between">
          <p>Wishlist ({wishlist.length})</p>
          <Button onClick={moveAllToBag}>Move All To Bag</Button>
        </div>

        <div className="flex flex-wrap items-center mt-[60px] gap-[30px] ">
          {wishlist.length === 0 ? (
            <p>Your wishlist is empty</p>
          ) : (
            wishlist.map((product) => (
              <div
                key={product.id}
                className="product__item w-[270px] h-[350px]"
              >
                <div className="relative h-[250px] rounded bg-[#F5F5F5] overflow-hidden">
                  <img
                    className="py-[35px] px-[40px]"
                    src={product.img}
                    alt={product.title}
                  />
                  {product.discount && (
                    <p
                      className="absolute top-3 left-3 w-[55px] h-[26px] rounded px-3 py-1 bg-[#DB4444] font-normal text-xs
                leading-[18px] text-[#fafafa] font-poppins"
                    >
                      {product.discount}%
                    </p>
                  )}
                  {product.new && (
                    <p
                      className="absolute top-3 left-3  w-[55px] h-[26px] rounded px-3 py-1 bg-[#00FF66] font-normal text-xs
             leading-[18px] text-[#fafafa] font-poppins"
                    >
                      NEW
                    </p>
                  )}
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-3 right-3 bg-[#fff] rounded-[50%] cursor-pointer"
                  >
                    <img src={DeleteIcon} alt="deleteicon" />
                  </button>

                  <Btns
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

                <p className="font-poppins font-medium text-base text-[#DB4444] mt-2">
                  ${product.newprice}
                </p>
              </div>
            ))
          )}
        </div>

        <div className=" mt-[80px]">
          <div className="flex items-center justify-between">
            <p
              className="flex items-center h-[40px] border-l-[20px] border-[#DB4444] rounded pl-4
           font-normal text-xl leading-[26px] tracking-[0%] text-center font-poppins text-black"
            >
              Just For You
            </p>
            <Button>See All</Button>
          </div>
          <div className="flex items-center gap-[30px] mt-[60px] mb-[140px] ">
            {products.map((product) => {
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
                    {product.discount && (
                      <p
                        className="absolute top-3 left-3 w-[55px] h-[26px] rounded px-3 py-1 bg-[#DB4444] font-normal text-xs
                leading-[18px] text-[#fafafa] font-poppins"
                      >
                        {product.discount}%
                      </p>
                    )}

                    <button className="absolute top-3 right-3 bg-[#fff] rounded-[50%] cursor-pointer">
                      <img src={EyeIcon} alt="eyeicon" />
                    </button>
                    <Btns
                      onClick={() => addToCart(product)}
                      disabled={addedItems.includes(product.id)}
                      label={
                        addedItems.includes(product.id)
                          ? "Added"
                          : "Add To Cart"
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
                    <p className="font-poppins font-medium text-base line-through text-[#808080]">
                      {product.oldprice}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-2 mt-2  w-[140px]">
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
      </div>
    </div>
  );
};

export default Wishlist;
