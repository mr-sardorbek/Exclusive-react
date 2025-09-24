import React from 'react'

const billing = [
    {
        id: 1,
        label: 'First Name',
        type: 'text'
    },
     {
        id: 2,
        label: 'Company Name',
        type: 'text'
    },
     {
        id: 3,
        label: 'Street Address',
        type: 'text'
    },
     {
        id: 4,
        label: 'Apartment, floor, etc. (optional)',
        type: 'text'
    },
     {
        id: 5,
        label: 'Town/City',
        type: 'text'
    },
     {
        id: 6,
        label: 'Phone Number',
        type: 'password'
    },
     {
        id: 7,
        label: 'Email Address',
        type: 'email'
    }
]

const Checkout = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex items-center gap-[12px] w-[455px] h-[21px] mt-[80px] mb-[80px]  '>
        <p className=" font-normal text-sm font-poppins text-[#909090] cursor-pointer">
        Home 
      </p>
      <p className='text-[#909090] mb-1'>/</p>
      <p className=" font-normal text-sm font-poppins text-[#909090] cursor-pointer">
        My Account
      </p>
      <p className='text-[#909090] mb-1'>/</p>
      <p className=" font-normal text-sm font-poppins text-[#909090] cursor-pointer">
        Product 
      </p>
      <p className='text-[#909090] mb-1'>/</p>
      <p className=" font-normal text-sm font-poppins text-[#909090] cursor-pointer">
        View Cart 
      </p>
      <p className='text-[#909090] mb-1'>/</p>
      <span className="text-[#000] font-normal text-sm font-poppins cursor-pointer">Cart</span>
      </div>

      <p className='font-medium text-4xl leading-[30px] tracking-[4%] inter mb-[48px]'>Billing Details</p>

      <form className='w-[470px] h-[814px] mb-[140px]'>
        {billing.map((bill) => (
      <div key={bill.id} className='flex flex-col gap-2 mb-[30px]' >
         <label className='font-normal text-base leading-6 tracking-[0%] font-poppins text-[#999999] '>{bill.label}</label>
       <input className=' bg-[#F5F5F5] w-[470px] h-[50px] opacity-100 rounded outline-none p-3' type={bill.type} />
      </div>
       ))}

       <div className='flex items-center gap-4 h-6 '>
        <input className='accent-[#DB4444] w-5 h-5 cursor-pointer' type="checkbox" />
        <p className='font-normal text-base leading-6 tracking-[0%] font-poppins'>Save this information for faster check-out next time</p>
      </div>
      </form>

    </div>
  )
}

export default Checkout
