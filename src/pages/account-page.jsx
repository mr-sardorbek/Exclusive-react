import React from 'react'
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex items-center justify-between'>
        <div className="flex items-center gap-[12px] h-[21px] mt-[80px] mb-[80px] ">
        <p className=" font-normal text-sm font-poppins text-[#909090] cursor-pointer">
          Home
        </p>
        <p className="text-[#909090] mb-1">/</p>
        <p className="text-[#000] font-normal text-sm font-poppins cursor-pointer">
          My Account
        </p>
      </div>
      <p className='font-normal text-sm font-poppins text-[#000] cursor-pointer'>Welcome!
         <span className='text-[#DB4444]'>Md Rimel</span></p>
      </div>

      <div className='w-[200px] h-[287px] mb-[343px] '>
        <p className='font-medium text-base leading-6 tracking-[0%] font-poppins'>Manage My Account</p>
        <div className='w-[165px] h-[88px] ml-[35px] mt-4'>
            <Link className='font-normal text-base leading-6 tracking-[0%] font-poppins text-[#DB4444]'>My Profile</Link><br />
            <Link className='font-normal text-base leading-6 tracking-[0%] font-poppins text-[#808080]'>Address Book</Link><br />
            <Link className='font-normal text-base leading-6 tracking-[0%] font-poppins text-[#808080]'>My Payment Options</Link>
        </div>
        <p className='font-medium text-base leading-6 tracking-[0%] font-poppins mt-6'>My Orders</p>
        <div className='w-[165px] h-[56px] ml-[35px] mt-4'>
            <Link className='font-normal text-base leading-6 tracking-[0%] font-poppins text-[#808080]'>My Returns</Link><br />
            <Link className='font-normal text-base leading-6 tracking-[0%] font-poppins text-[#808080]'>My Cancellations</Link>
        </div>
        <p className='font-medium text-base leading-6 tracking-[0%] font-poppins mt-4'>My WishList</p>
      </div>
    </div>
  )
}

export default Account
