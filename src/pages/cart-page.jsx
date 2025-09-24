import React, { useEffect, useState } from "react";
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
    </div>
  );
};

export default CartPage;
