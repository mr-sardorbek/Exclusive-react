import React from 'react'
import ArrowRight from '../assets/icons/arrow-right.svg'

const Sidebar = () => {
  return (
    <div className='flex mt-[-17px]'>
        <div className='w-[233px] h-[384px] border-r-[0.5px] border-[#c0bfbf] pt-[40px] pr-[16px]'>
            <p className='flex items-center justify-between  font-normal text-base leading-6 tracking-[0%] text-center font-poppins
            relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full
            cursor-pointer'>
                Woman’s Fashion <img src={ArrowRight} alt="arrow-right" /></p>
                <p className='flex items-center justify-between mt-[16px]  font-normal text-base leading-6 tracking-[0%] text-center font-poppins
                relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer'>
                Men’s Fashion <img src={ArrowRight} alt="arrow-right" /></p>
                
                <p className='flex items-center justify-between mt-[16px]  font-normal text-base leading-6 tracking-[0%] text-center font-poppins
                relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer'>
                Electronics</p>

                <p className='flex items-center justify-between mt-[16px]  font-normal text-base leading-6 tracking-[0%] text-center font-poppins
                relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer'>
                Home & Lifestyle</p>

                <p className='flex items-center justify-between mt-[16px]  font-normal text-base leading-6 tracking-[0%] text-center font-poppins
                relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer'>
                Medicine</p>

                <p className='flex items-center justify-between mt-[16px]  font-normal text-base leading-6 tracking-[0%] text-center font-poppins
                relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer'>
                Sports & Outdoor</p>

                <p className='flex items-center justify-between mt-[16px]  font-normal text-base leading-6 tracking-[0%] text-center font-poppins
                relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer'>
                Baby’s & Toys</p>

                <p className='flex items-center justify-between mt-[16px]  font-normal text-base leading-6 tracking-[0%] text-center font-poppins
                relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer'>
                Groceries & Pets</p>

                <p className='flex items-center justify-between mt-[16px]  font-normal text-base leading-6 tracking-[0%] text-center font-poppins
                relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer'>
                Health & Beauty</p>

        </div>


        <div>

        </div>
      
    </div>
  )
}

export default Sidebar
