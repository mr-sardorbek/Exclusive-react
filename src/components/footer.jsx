import React from 'react'
import SendIcon from '../assets/icons/send.svg'
const Footer = () => {
  return (
    <div className='bg-[#000] h-[440px]'>
        <div className='container mx-auto'>
            <div className='relative w-[1170px]  h-[238px] top-[80px]'>
                <div className='w-[217px] h-[188px]'>
                    <p className='font-bold text-2xl leading-6 tracking-[3%] inter text-[#FAFAFA]'>Exclusive</p>
                    <p className='font-medium text-xl leading-7 tracking-[0%] font-poppins text-[#FAFAFA] mt-6'>Subscribe</p>
                    <p className='font-normal text-base leading-6 tracking-[0%] font-poppins text-[#FAFAFA] mt-6'>
                        Get 10% off your first order</p>
                       
                    <div className='flex items-center justify-between gap-2  w-[217px] h-[48px] border border-white mt-4 '>
                        <input className='flex items-center w-[130px] h-6 ml-4 font-normal text-base leading-6 tracking-[0%]
                        outline-none text-[#9e9898]' type="text" placeholder='Enter your email' />
                    <img className='mr-3' src={SendIcon} alt="" />
                    </div>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
