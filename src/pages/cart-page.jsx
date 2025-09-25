import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CancelIcon from "../assets/icons/cancelicon.svg";
import { Button } from "antd";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const handleQtyChange = (id, value) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: value } : item
    );
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const handleRemove = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // Coupon kod (SALE10)

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.newprice * item.quantity,
    0
  );

  const handleApplyCoupon = () => {
    if (coupon.trim().toUpperCase() === "SALE10") {
      setDiscount(0.1);
    } else {
      setDiscount(0);
    }
  };

  return (
    <div className="container mx-auto">
      <p className="mt-[80px] mb-[80px] font-normal text-sm font-poppins text-[#909090]">
        Home / <span className="text-[#000]">Cart</span>
      </p>

      <div className="mb-[80px]">
        <div className="flex items-center justify-between h-[72px] px-[40px] py-6 shadow-[0px_1px_13px_0px_#0000000D]">
          <p className="font-normal text-base leading-6 tracking-[0%] font-poppins">
            Product
          </p>
          <p className="font-normal text-base leading-6 tracking-[0%] font-poppins">
            Price
          </p>
          <p className="font-normal text-base leading-6 tracking-[0%] font-poppins">
            Quantity
          </p>
          <p className="font-normal text-base leading-6 tracking-[0%] font-poppins">
            Subtotal
          </p>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-center mt-10 text-gray-500">Cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="relative flex items-center h-[102px] mt-[40px] px-[40px] py-6 shadow-[0px_1px_13px_0px_#0000000D]"
            >
              <div className="flex items-center gap-[20px]">
                <img src={item.img} alt={item.title} className="w-16 h-16" />
                <img
                  onClick={() => handleRemove(item.id)}
                  className="absolute top-[20px] left-[30px] cursor-pointer"
                  src={CancelIcon}
                  alt="cancelicon"
                />
                <p className="truncate max-w-[200px]">{item.title}</p>
              </div>
              <p className="ml-[177px] font-normal text-base leading-6 tracking-[0%] font-poppins">
                ${item.newprice}
              </p>
              <input
                className="ml-[282px] w-[72px] h-[44px] opacity-100 rounded py-[6] px-3 border-[1.5px] border-solid border-[#00000066]"
                type="number"
                value={item.quantity}
                min={1}
                max={100}
                onChange={(e) =>
                  handleQtyChange(item.id, Number(e.target.value))
                }
              />
              <p className="ml-[281px] font-normal text-base leading-6 tracking-[0%] font-poppins">
                ${item.newprice * item.quantity}
              </p>
            </div>
          ))
        )}

        <div className="flex items-center justify-between mt-6">
          <Button>Return To Shop</Button>
          <Button>Update Cart</Button>
        </div>
      </div>

      <div className="flex justify-between items-start mt-[80px] mb-[140px] h-[324px]">
        <div className="flex items-center gap-4">
          <input
            className="w-[300px] h-[56px] opacity-100 py-4 pl-6 rounded border border-solid border-black
        font-normal text-base leading-6 tracking-[0%] font-poppins outline-none"
            type="text"
            placeholder="Coupon Code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <Button type="primary" onClick={handleApplyCoupon}>
            Apply Coupon
          </Button>
        </div>

        <div className="w-[470px] h-[324px] opacity-100 rounded border-[2px] border-[#000] py-8 px-6">
          <p className="font-medium text-xl leading-7 tracking-[0%] text-[#000]">
            Cart Total
          </p>

          <div className="flex items-center justify-between mt-6">
            <p className="font-normal text-base leading-6 tracking-[0%] font-poppins">
              Subtotal:
            </p>
            <p className="font-normal text-base leading-6 tracking-[0%] font-poppins">
              ${subtotal}
            </p>
          </div>

          <hr className="mt-4 mb-4 border-[#A6A6A6]" />

          <div className="flex items-center justify-between">
            <p className="font-normal text-base leading-6 tracking-[0%] font-poppins">
              Shipping:
            </p>
            <p className="font-normal text-base leading-6 tracking-[0%] font-poppins">
              Free
            </p>
          </div>

          <hr className="mt-4 mb-4 border-[#A6A6A6]" />

          <div className="flex items-center justify-between mb-4">
            <p className="font-normal text-base leading-6 tracking-[0%] font-poppins">
              Total:
            </p>
            <p className="font-normal text-base leading-6 tracking-[0%] font-poppins">
              ${subtotal - subtotal * discount}
            </p>
          </div>

          <Link to='/checkout' className="flex justify-center">
            <Button type="primary">Proceed to checkout</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
