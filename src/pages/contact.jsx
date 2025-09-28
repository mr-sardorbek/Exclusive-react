import React from 'react'
import Phone from '../assets/icons/phone.svg'
import Mail from '../assets/icons/mail.svg'

const Contact = () => {
  return (
    <div className='container mx-auto'>
      <div className="flex items-center gap-[12px] w-[455px] h-[21px] mt-[80px]">
        <p className=" font-normal text-sm font-poppins text-[#909090] cursor-pointer">
          Home
        </p>
        <p className="text-[#909090] mb-1">/</p>
        <p className="text-[#000] font-normal text-sm font-poppins cursor-pointer">
          Cantact
        </p>
      </div>

      <div className='px-[35px] pt-[40px] pb-[51px] w-[340px] h-[457px] opacity-100 rounded mb-[140px] mt-[80px]'>
        <div className='flex items-center gap-4'>
            <img src={Phone} alt="phone" />
            <p className=' font-medium text-base leading-6 tracking-[0%] font-poppins'>Call To Us</p>
        </div>
        <p className='font-normal text-sm leading-[21px] tracking-[0%] font-poppins mt-6'>We are available 24/7, 7 days a week.</p>
        <p className='font-normal text-sm leading-[21px] tracking-[0%] font-poppins mt-4'>Phone: +8801611112222</p>
        <hr className='mt-8 mb-8 border-[#AFAFAF]' />

        <div className='flex items-center gap-4'>
            <img src={Mail} alt="mail" />
            <p className=' font-medium text-base leading-6 tracking-[0%] font-poppins'>Write To US</p>
        </div>

        <p className='font-normal text-sm leading-[21px] tracking-[0%] font-poppins mt-6'>Fill out our form and we will contact you within 24 hours.</p>
        <p className='font-normal text-sm leading-[21px] tracking-[0%] font-poppins mt-4'>Emails: customer@exclusive.com</p>
        <p className='font-normal text-sm leading-[21px] tracking-[0%] font-poppins mt-4'>Emails: support@exclusive.com</p>

      </div>
    </div>
  )
}

export default Contact
