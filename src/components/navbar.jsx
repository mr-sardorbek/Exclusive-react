import React from 'react'
import { Link } from 'react-router-dom'
import searchIcon from '../assets/icons/search-icon.svg'


const Navbar = () => {
  return (
    <div className='container mx-auto'>
        <div className='mt-[40px]'>
            <div className='flex items-center gap-[190px]'>
                <h1 className='font-bold text-2xl leading-6 tracking-[3%]'>Exclusive</h1>
                <ul className='flex w-[367px] h-[24px] gap-[48px] mt-[7px] '>
                    <li className='font-poppins font-normal text-base leading-6 tracking-[0%] text-center relative 
                     after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1.5px] after:bg-black after:-translate-x-1/2 
                     after:transition-all after:duration-300 hover:after:w-full [&.active]:after:w-full active'>
                        <Link className='font-poppins font-[Poppins] no-underline text-black leading-6'>Home</Link>
                    </li>
                    <li className='font-poppins font-normal text-base leading-6 tracking-[0%] text-center relative  after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1.5px] after:bg-black after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full [&.active]:after:w-full'>
                        <Link className='font-poppins font-[Poppins] no-underline text-black leading-6'>Contact</Link>
                    </li>
                    <li className='font-poppins font-normal text-base leading-6 tracking-[0%] text-center relative  after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1.5px] after:bg-black after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full [&.active]:after:w-full'>
                        <Link className='font-poppins font-[Poppins] no-underline text-black leading-6'>About</Link>
                    </li>
                   <li className='font-poppins font-normal text-base leading-6 tracking-[0%] text-center relative  after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1.5px] after:bg-black after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full [&.active]:after:w-full'>
                        <Link className='font-poppins font-[Poppins] no-underline text-black leading-6'>Sign Up</Link>
                    </li>
                </ul>

                <div className='flex justify-between items-center bg-neutral-100 w-[243px] h-[38px] gap-[34px] rounded pl-6 pr-3 py-[7px]'>
                   <input className='bg-transparent text-xs w-[90%] border-[none] outline-none' placeholder='What are you looking for?' />
                   <img style={{cursor:"pointer"}} src={searchIcon} alt="serach-icon" />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
