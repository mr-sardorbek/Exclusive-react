import React from 'react'

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
      <p className='font-normal text-sm font-poppins text-[#000] cursor-pointer'>Welcome! <span className='text-[#DB4444]'>Md Rimel</span></p>
      </div>
    </div>
  )
}

export default Account
