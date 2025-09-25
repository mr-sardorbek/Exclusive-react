import React, { useState, useEffect } from "react";
import { Button } from "antd";
import CreditCards from "../assets/icons/credit-cards.svg";

const billing = [
  { id: 1, label: "First Name", type: "text" },
  { id: 2, label: "Company Name", type: "text" },
  { id: 3, label: "Street Address", type: "text" },
  { id: 4, label: "Apartment, floor, etc. (optional)", type: "text" },
  { id: 5, label: "Town/City", type: "text" },
  { id: 6, label: "Phone Number", type: "password" },
  { id: 7, label: "Email Address", type: "email" },
];

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.newprice * item.quantity,
    0
  );

  const total = subtotal - discount;

  const handleApplyCoupon = () => {
    if (couponCode === "SALE10") {
      setDiscount(subtotal * 0.1);
      
    } else {
      setDiscount(0);
    }
  };

  const handlePlaceOrder = () => {
    if (!paymentMethod) {
      message.warning("Iltimos, to‘lov usulini tanlang!");
      return;
    }
    message.success(`Buyurtma qabul qilindi! To‘lov usuli: ${paymentMethod}`);
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-[12px] w-[455px] h-[21px] mt-[80px] mb-[80px] ">
        <p className=" font-normal text-sm font-poppins text-[#909090] cursor-pointer">
          Home
        </p>
        <p className="text-[#909090] mb-1">/</p>
        <p className=" font-normal text-sm font-poppins text-[#909090] cursor-pointer">
          My Account
        </p>
        <p className="text-[#909090] mb-1">/</p>
        <p className=" font-normal text-sm font-poppins text-[#909090] cursor-pointer">
          Product
        </p>
        <p className="text-[#909090] mb-1">/</p>
        <p className=" font-normal text-sm font-poppins text-[#909090] cursor-pointer">
          View Cart
        </p>
        <p className="text-[#909090] mb-1">/</p>
        <p className="text-[#000] font-normal text-sm font-poppins cursor-pointer">
          Cart
        </p>
      </div>

      <p className="font-medium text-4xl leading-[30px] tracking-[4%] inter mb-[48px]">
        Billing Details
      </p>

      <div className="flex justify-between">
        <form className='w-[470px] h-[814px] mb-[140px]'>
        {billing.map((bill) => (
      <div key={bill.id} className='flex flex-col gap-2 mb-[30px]' >
         <label className='font-normal text-base leading-6 tracking-[0%] font-poppins text-[#999999] '>{bill.label}</label>
       <input className=' bg-[#F5F5F5] w-[470px] h-[50px] opacity-100 rounded outline-none p-3' type={bill.type} />
      </div>
       ))}

       <div className='flex items-center gap-4 h-6 '>
        <input className='accent-[#DB4444] w-5 h-5 cursor-pointer' type="checkbox" />
        <p className='font-normal text-base leading-6 tracking-[0%] font-poppins !mb-0'>
          Save this information for faster check-out next time</p>
      </div>
      </form>

        <div className="w-[527px] h-auto mt-8">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between w-[425px] mb-6"
            >
              <div className="flex items-center gap-6">
                <img src={item.img} alt={item.title} className="w-12 h-12" />
                <p className="font-normal text-base font-poppins">
                  {item.title} x {item.quantity}
                </p>
              </div>
              <p className="font-normal text-base font-poppins">
                ${item.newprice * item.quantity}
              </p>
            </div>
          ))}

          <div className="w-[422px] mt-8">
            <div className="flex items-center justify-between mt-6">
              <p  className="font-normal text-base leading-6 tracking-[0%] font-poppins">Subtotal:</p>
              <p  className="font-normal text-base leading-6 tracking-[0%] font-poppins">${subtotal}</p>
            </div>

            <hr className="mt-4 mb-4 border-[#A6A6A6]" />

            <div className="flex items-center justify-between">
              <p  className="font-normal text-base leading-6 tracking-[0%] font-poppins">Shipping:</p>
              <p  className="font-normal text-base leading-6 tracking-[0%] font-poppins">Free</p>
            </div>

            <hr className="mt-4 mb-4 border-[#A6A6A6]" />

            {discount > 0 && (
              <div className="flex items-center justify-between text-green-600 mb-2">
                <p  className="font-normal text-base leading-6 tracking-[0%] font-poppins">Discount:</p>
                <p  className="font-normal text-base leading-6 tracking-[0%] font-poppins">- ${discount.toFixed(2)}</p>
              </div>
            )}

            <div className="flex items-center justify-between mb-4">
              <p  className="font-normal text-base leading-6 tracking-[0%] font-poppins">Total:</p>
              <p  className="font-normal text-base leading-6 tracking-[0%] font-poppins">${total.toFixed(2)}</p>
            </div>
          </div>

          <div className="flex items-start justify-between w-[427px] mt-8">
            <div className="w-[174px] h-[84px]">
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  name="payment"
                  value="Bank"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="radio-custom"
                />
                <p className="font-normal text-base leading-6 tracking-[0%] font-poppins !mb-0">Bank</p>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <input
                  type="radio"
                  name="payment"
                  value="Cash on delivery"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="radio-custom"
                />
                <p  className="font-normal text-base leading-6 tracking-[0%] font-poppins !mb-0">Cash on delivery</p>
              </div>
            </div>
            <img src={CreditCards} alt="creditcards" />
          </div>

          <div className="flex items-center justify-between w-[527px] mt-8 mb-8">
            <input
              className="w-[300px] h-[56px] py-4 pl-6 rounded border border-black font-poppins outline-none"
              type="text"
              placeholder="Coupon Code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <Button type="primary" onClick={handleApplyCoupon}>
              Apply Coupon
            </Button>
          </div>

          <div>
            <Button type="primary" onClick={handlePlaceOrder}>
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
