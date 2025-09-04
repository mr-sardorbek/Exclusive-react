import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='bg-[#000] h-[48px]'>
     <div className='container mx-auto'>
        <div className='flex items-center gap-[231px] text-[#fafafa] ml-[310px]'>
            <div className='flex items-center mt-[12px] gap-2'>
            <p className='font-poppins font-normal text-sm leading-[21px] tracking-[0%] text-[#fafafa]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <Link to="/" className='font-poppins font-semibold text-sm leading-6 tracking-[0%] text-center underline decoration-solid decoration-[0%] text-[#fafafa]' >ShopNow</Link>
        </div>

        <select className='bg-[#000] cursor-pointer mt-3' >
            <option value="en">English</option>
            <option value="uz">Uzbek</option>
            <option value="ru">Russian</option>
        </select>
        </div>
     </div>
    </div>
  )
}

export default Banner
