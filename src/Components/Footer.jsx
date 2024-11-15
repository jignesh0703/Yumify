import React from 'react'
import facebook from '../assets/frontend_assets/facebook_icon.png'
import twitter from '../assets/frontend_assets/twitter_icon.png'
import linkedin from '../assets/frontend_assets/linkedin_icon.png'

const Footer = () => {
    return (
        <>
            <div className='bg-[#323232] flex justify-center mt-[100px]' id='contact'>
                <div className='w-[90%] sm:w-[80%] flex justify-between pt-10 pb-4 lg:pb-0'>
                    <div>
                        <h1 className='text-[1.5rem] lg:text-[2.5rem] font-bold text-[#e95930] mb-2'>Yumify</h1>
                        <p className='hidden lg:flex text-[0.8rem] xl:text-base text-white w-[15rem] lg:w-[20rem] 2xl:w-[30rem]'>At Yumify, we’re passionate about delivering fresh, high-quality foods straight to your door. From locally sourced ingredients to international delicacies, we bring the world of flavor to your kitchen.</p>
                        <p className='text-[0.8rem] text-white w-[11rem] lg:hidden'>At Yumify, we’re passionate about delivering fresh, high-quality foods straight to your door.</p>
                        <div className='flex gap-3 mt-2'>
                            <img src={facebook} alt="facebook_icon" className='w-6 lg:w-8 cursor-pointer' />
                            <img src={twitter} alt="twitter_icon" className='  w-6 lg:w-8 cursor-pointer' />
                            <img src={linkedin} alt="linkedin_icon" className='w-6 lg:w-8 cursor-pointer' />
                        </div>
                    </div>
                    <div className='hidden lg:grid'>
                        <h1 className='text-[2rem] font-bold text-white'>COMPANY</h1>
                        <div className='mt-2 text-[1rem] text-white'>
                            <h1 className='cursor-pointer'>Home</h1>
                            <h1 className='cursor-pointer'>About us</h1>
                            <h1 className='cursor-pointer'>Delivery</h1>
                            <h1 className='cursor-pointer'>Privacy POlicy</h1>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-[1.1rem] lg:text-[2rem] font-bold text-white mt-2'>GET IN TOUCH</h1>
                        <div className='mt-2 text-[1rem] text-white'>
                            <h1>+91-11111-11111</h1>
                            <h1>contact@yumify.com</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#323232] flex justify-center pb-4'>
                <div className='w-[80%]'>
                    <hr className='hidden lg:flex justify-center mb-8 items-center mt-12 border border-gray-500' />
                    <div className='w-full flex justify-center text-white text-[0.9rem] text-center'>
                        <p className='mt-6 lg:mt-0'>Copyright 2024 © Yumify.com-All Right Reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer