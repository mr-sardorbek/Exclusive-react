import React, { useState, useEffect } from "react";
import LargeGamepad from "../assets/images/large-gamepad.png";
import Gamepad1 from "../assets/images/gamepad-1.png";
import Gamepad2 from "../assets/images/gamepad-2.png";
import Gamepad3 from "../assets/images/gamepad-3.png";
import Gamepad4 from "../assets/images/gamepad-4.png";
import Gamepads from "../assets/images/havit-gamepad.png";
import Monitor from "../assets/images/monitor.png";
import Cooler from "../assets/images/cooler.png";
import Keyboard from "../assets/images/keyboard.png";
import FullStar from "../assets/icons/full-star.svg";
import EmptyStar from "../assets/icons/empty-star.svg";
import EyeIcon from "../assets/icons/eye-icon.svg";
import HalfFilledStar from "../assets/icons/star-half-filled.svg";
import HeartIcon from "../assets/icons/heart-icon.svg";
import FreeDelivery from "../assets/icons/delivery-free.svg";
import ReturnDelivery from "../assets/icons/delivery-return.svg";
import { Button } from "antd";
import Sections from "../components/sections";
import Btn from "../components/button";

const products = [
  {
    id: "pro-1",
    img: Gamepads,
    title: "HAVIT HV-G92 Gamepad",
    oldprice: 160,
    newprice: 120,
    discount: -40,
    rating: 5,
    ratingCount: 88,
  },
  {
    id: "pro-2",
    img: Keyboard,
    title: "AK-900 Wired Keyboard",
    oldprice: 1160,
    newprice: 960,
    discount: -35,
    rating: 4,
    ratingCount: 75,
  },
  {
    id: "pro-3",
    img: Monitor,
    title: "IPS LCD Gaming Monitor",
    oldprice: 400,
    newprice: 370,
    discount: -30,
    rating: 5,
    ratingCount: 99,
  },
  {
    id: "pro-4",
    img: Cooler,
    title: "S-Series Comfort Chair ",
    oldprice: 400,
    newprice: 375,
    discount: -25,
    rating: 4.5,
    ratingCount: 99,
  },
];

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

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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

        <Sections title="Related Item" showTimer={false} showButtons={false} />

        <div className="mt-[-40px] mb-[140px]">
          <div className="flex items-center gap-[30px]">
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

                    <button
                      onClick={() => {
                        setSelectedProduct(product);
                        setIsModalOpen(true);
                      }}
                      className="absolute p-0.5 top-[54px] right-3 bg-[#fff] rounded-full cursor-pointer"
                    >
                      <img src={EyeIcon} alt="eyeicon" />
                    </button>
                    <Btn
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
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[400px] relative shadow-lg">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-4 text-2xl font-bold"
            >
              &times;
            </button>

            <img
              src={selectedProduct.img}
              alt={selectedProduct.title}
              className="w-[250px] h-[250px] object-contain mx-auto"
            />
            <p className="text-xl font-semibold text-center mt-2">
              {selectedProduct.title}
            </p>

            <div className="flex items-center justify-center gap-2 mt-2">
              {Array(Math.floor(selectedProduct.rating))
                .fill()
                .map((_, i) => (
                  <img key={i} src={FullStar} alt="fullstar" />
                ))}
              {selectedProduct.rating % 1 !== 0 && (
                <img src={HalfFilledStar} alt="halfstar" />
              )}
              {Array(5 - Math.ceil(selectedProduct.rating))
                .fill()
                .map((_, i) => (
                  <img key={i} src={EmptyStar} alt="emptystar" />
                ))}
              <span className="text-[#808080]">
                ({selectedProduct.ratingCount})
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 mt-4">
              <span className="text-[#DB4444] text-lg font-semibold">
                ${selectedProduct.newprice}
              </span>
              <span className="font-poppins font-medium text-base line-through text-[#808080]">
                ${selectedProduct.oldprice}
              </span>
            </div>

            <button
              onClick={() => addToCart(selectedProduct)}
              className="mt-6 bg-[#000] cursor-pointer h-[41px] text-white py-2 px-6 rounded w-full hover:bg-[#121111]"
            >
              Add To Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
