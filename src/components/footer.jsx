import React from 'react'
import SendIcon from '../assets/icons/send.svg'
import Linkedin from '../assets/icons/linkedin.svg'
import Instagram from '../assets/icons/instagram.svg'
import Facebook from '../assets/icons/facebook.svg'
import Twitter from '../assets/icons/twitter.svg'
import QrCode from '../assets/images/qrcode.png'
import GooglePlay from '../assets/images/google-play.png'
import AppStore from '../assets/images/appstore.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='bg-[#000] h-[440px] '>
        <div className='container mx-auto'>
            <div className='relative flex   w-[1170px]   h-[238px] top-[80px]'>
                <div className='w-[217px] h-[188px]'>
                    <p className='font-bold text-2xl leading-6 tracking-[3%] inter text-[#FAFAFA]'>Exclusive</p>
                    <p className='font-medium text-xl leading-7 tracking-[0%] font-poppins text-[#FAFAFA] mt-6'>Subscribe</p>
                    <p className='font-normal text-base leading-6 tracking-[0%] font-poppins text-[#FAFAFA] mt-6'>
                        Get 10% off your first order</p>
                       
                    <div className='flex items-center justify-between gap-2  w-[217px] h-[48px] border border-white mt-4 rounded'>
                        <input className='flex items-center w-[130px] h-6 ml-4 font-normal text-base leading-6 tracking-[0%]
                        outline-none text-[#9e9898]' type="text" placeholder='Enter your email' />
                   <button className='cursor-pointer'><img className='mr-3' src={SendIcon} alt="SendIcon" /></button>
                    </div>
                </div>

                <div className='flex justify-between ml-[85px] w-[581px] '>
                    <div className='w-[175px] h-[180px] text-[#fafafa]'>
                        <p className='font-medium text-xl leading-7 tracking-[0%] font-poppins'>Support</p>
                        <p className='font-normal text-base leading-6 tracking-[0%] font-poppins mt-6 mb-4'>
                            111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                        <Link to="/" className='font-normal text-base leading-6 tracking-[0%] font-poppins'>exclusive@gmail.com</Link>
                        <p className='font-normal text-base leading-6 tracking-[0%] font-poppins mt-4'>+88015-88888-9999</p>
                    </div>

                    <div className='flex flex-col w-[125px] h-[236px] text-[#fafafa]'>
                       <p className='font-medium text-xl leading-7 tracking-[0%] font-poppins '>Account</p>
                       <Link to="/" className='font-normal text-base leading-6 tracking-[0%] font-poppins mt-6'>My Account</Link>
                       <Link to="/" className='font-normal text-base leading-6 tracking-[0%] font-poppins mt-4'>Login / Register</Link>
                       <Link to="/" className='font-normal text-base leading-6 tracking-[0%] font-poppins mt-4'>Cart</Link>
                       <Link to="/" className='font-normal text-base leading-6 tracking-[0%] font-poppins mt-4'>Wishlist</Link>
                       <Link to="/" className='font-normal text-base leading-6 tracking-[0%] font-poppins mt-4'>Shop</Link>
                    </div>

                    <div className='flex flex-col w-[111px] h-[196px]  text-[#fafafa]'>
                        <p className='font-medium text-xl leading-7 tracking-[0%] font-poppins'>Quick Link</p>
                        <Link to="/" className='font-normal text-base leading-6 tracking-[0%] font-poppins mt-6'>Privacy Policy</Link>
                       <Link to="/" className='font-normal text-base leading-6 tracking-[0%] font-poppins mt-4'>Terms Of Use</Link>
                       <Link to="/" className='font-normal text-base leading-6 tracking-[0%] font-poppins mt-4'>FAQ</Link>
                       <Link to="/" className='font-normal text-base leading-6 tracking-[0%] font-poppins mt-4'>Contact</Link>
                    </div>
                </div>

                <div className='w-[200px] h-[210px] ml-[85px]'>
                    <div className='w-[175px] h-[180px] text-[#fafafa] '>
                        <p className='font-medium text-xl leading-7 tracking-[0%] font-poppins'>Download App</p>
                        <p className='w-[194px] font-medium text-xs font-poppins text-[#A4A4A4] mt-6'>
                            Save $3 with App New User Only</p>
                            <div className='flex items-center w-[198px]  h-[84px] gap-2 mt-[10px]'>
                                <img src={QrCode} alt="qrcode" />
                                <div className='flex flex-col w-[110px] h-[80px] justify-between '>
                                    <img src={GooglePlay} alt="googleplay" />
                                    <img  src={AppStore} alt="appstore" />
                                </div>
                            </div>

                            <div className='flex items-center justify-between w-[168px] h-6 mt-6'>
                                <img src={Facebook} alt="facebook" />
                                <img src={Twitter} alt="twitter" />
                                <img src={Instagram} alt="instagram" />
                                <img src={Linkedin} alt="linkedin" />

                            </div>
                    </div>

                </div>

                <div>

                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
