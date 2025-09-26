import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../assets/icons/search-icon.svg";
import UserIconWhite from "../assets/icons/user-icon-white.svg";
import MallBag from "../assets/icons/mallbag.svg";
import Cancel from "../assets/icons/cancel-icon.svg";
import Reviews from "../assets/icons/reviews-icon.svg";
import LogOut from "../assets/icons/logout-icon.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistCount(storedWishlist.length);

    const handleWishlistUpdate = () => {
      const updatedWishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];
      setWishlistCount(updatedWishlist.length);
    };

    window.addEventListener("wishlist-updated", handleWishlistUpdate);

    return () => {
      window.removeEventListener("wishlist-updated", handleWishlistUpdate);
    };
  }, []);

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(storedCart.length);

    const handleCartUpdate = () => {
      const updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(updatedCart.length);
    };

    window.addEventListener("cart-updated", handleCartUpdate);

    return () => {
      window.removeEventListener("cart-updated", handleCartUpdate);
    };
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center mt-[40px]  ">
          <div className="flex items-center gap-[160px]">
            <h1 className="font-bold text-2xl leading-6 tracking-[3%]">
              Exclusive
            </h1>

            <ul className="flex w-[367px] h-[24px] gap-[48px] mt-[7px] ">
              <li
                className="font-poppins font-normal text-base leading-6 tracking-[0%] text-center relative 
                     after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1.5px] after:bg-black after:-translate-x-1/2 
                     after:transition-all after:duration-300 hover:after:w-full [&.active]:after:w-full active"
              >
                <Link
                  to="/"
                  className="font-poppins font-[Poppins] no-underline text-black leading-6"
                >
                  Home
                </Link>
              </li>
              <li className="font-poppins font-normal text-base leading-6 tracking-[0%] text-center relative  after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1.5px] after:bg-black after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full [&.active]:after:w-full">
                <Link className="font-poppins font-[Poppins] no-underline text-black leading-6">
                  Contact
                </Link>
              </li>
              <li className="font-poppins font-normal text-base leading-6 tracking-[0%] text-center relative  after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1.5px] after:bg-black after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full [&.active]:after:w-full">
                <Link to='/about' className="font-poppins font-[Poppins] no-underline text-black leading-6">
                  About
                </Link>
              </li>
              <li className="font-poppins font-normal text-base leading-6 tracking-[0%] text-center relative  after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1.5px] after:bg-black after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full [&.active]:after:w-full">
                <Link
                  to="/signup"
                  className="font-poppins font-[Poppins] no-underline text-black leading-6"
                >
                  Sign Up
                </Link>
              </li>
            </ul>

            <div />
          </div>

          <div className="flex items-center gap-6">
            <div className="flex justify-between items-center bg-neutral-100 w-[243px] h-[38px] gap-[34px] rounded pl-6 pr-3 py-[7px]">
              <input
                className="bg-transparent text-xs w-[90%] border-[none] outline-none"
                placeholder="What are you looking for?"
              />
              <img
                style={{ cursor: "pointer" }}
                src={searchIcon}
                alt="serach-icon"
              />
            </div>

            <div className="flex items-center justify-between w-[118px] ">
              <Link to="/wishlist" className="relative">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <Link to="./cartpage" className="relative">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 5H7L10 22H26"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>

              <div className="relative" ref={modalRef}>
                <button
                  onClick={() => setOpen(!open)}
                  className={`rounded-full transition ${
                    open ? "bg-[#DB4444]" : "bg-transparent"
                  }`}
                >
                  <svg
                    style={{ cursor: "pointer" }}
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`${open ? "stroke-white" : "stroke-black"}`}
                    />
                    <path
                      d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`${open ? "stroke-white" : "stroke-black"}`}
                    />
                  </svg>
                </button>

                {open && (
                  <div
                    className="user-modal absolute w-[224px] h-[208px] right-0.5    backdrop-blur-[10px] shadow-lg rounded pt-[18px]
                  pr-3 pl-[20px] pb-[10px] z-50"
                  >
                    <Link to='/account' className="user-item flex items-center w-[192px] h-8 hover:bg-[rgba(183,162,162,0.1)]  rounded-md cursor-pointer ">
                      <span className="flex items-center justify-between gap-4 font-poppins text-[#fafafa] font-normal text-sm leading-[21px] tracking-[0%] text-center">
                        <img src={UserIconWhite} alt="userwhiteicon" />
                        Manage My Account
                      </span>
                    </Link>
                    <div className="flex items-center w-[192px] h-6 mt-[13px] hover:bg-[rgba(183,162,162,0.1)] rounded-md cursor-pointer ">
                      <span className="flex items-center justify-between gap-4 font-poppins text-[#fafafa] font-normal text-sm leading-[21px] tracking-[0%] text-center">
                        <img src={MallBag} alt="mallbag" />
                        My Order
                      </span>
                    </div>
                    <div className="flex items-center w-[192px] h-6 mt-[13px] hover:bg-[rgba(183,162,162,0.1)] rounded-md cursor-pointer ">
                      <span className="flex items-center justify-between gap-4 font-poppins text-[#fafafa] font-normal text-sm leading-[21px] tracking-[0%] text-center">
                        <img src={Cancel} alt="cancel" />
                        My Cancellations
                      </span>
                    </div>
                    <div className="flex items-center w-[192px] h-6 mt-[13px] hover:bg-[rgba(183,162,162,0.1)] rounded-md cursor-pointer ">
                      <span className="flex items-center justify-between gap-4 font-poppins text-[#fafafa] font-normal text-sm leading-[21px] tracking-[0%] text-center">
                        <img src={Reviews} alt="reviews" />
                        My Reviews
                      </span>
                    </div>
                    <div className="flex items-center w-[192px] h-6 mt-[13px] hover:bg-[rgba(183,162,162,0.1)] rounded-md cursor-pointer ">
                      <span className="flex items-center justify-between gap-4 font-poppins text-[#fafafa] font-normal text-sm leading-[21px] tracking-[0%] text-center">
                        <img src={LogOut} alt="logout" />
                        Logout
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-[16px] my-4 border-t-2 border-gray-300" />
    </>
  );
};

export default Navbar;
