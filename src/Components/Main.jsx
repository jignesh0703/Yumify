import React from 'react'
import header from '../assets/frontend_assets/header_img.png'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <>
      <div className='mt-4 w-[90%] ml-[5%] sm:w-[80%] sm:ml-[10%]' id='home'>
        <img src={header} alt="header" className='object-cover object-left-top lg:object-cover h-[15rem] md:h-auto md:w-full rounded-lg md:rounded-none brightness-90'/>
        <div className='absolute top-[8rem] left-[10%] sm:left-[15%] md:top-[9rem] lg:top-[10rem] xl:top-[11rem] 2xl:top-[13rem] 3xl:top-[15rem] md:left-[15%]'>
          <div className='text-[1.5rem] lg:text-[3rem] xl:text-[4rem] 3xl:text-[5rem] text-white font-semibold'>
            <h1 className='h-[2.5rem] lg:h-[3rem] xl:h-[4rem] 3xl:h-[5rem]'>Order your</h1>
            <h1 className='lg:h-[3rem] xl:h-[4rem] 3xl:h-[5rem] lg:mt-2'>Favourite food here</h1>
          </div>
          <p className='w-[17rem] lg:hidden text-white tracking-tight font-bold text-[0.8rem]'>Craving delicious food? Order fast, fresh meals from top restaurants, delivered to your door quickly, anytime, anywhere. Enjoy!</p>
          <p className='hidden lg:flex xl:hidden mt-5 lg:w-[30rem] 3xl:w-[45rem] text-white tracking-tight font-bold text-[0.8rem]'>Craving something delicious? Order fresh meals from top restaurants, delivered quickly to your door. Enjoy a variety of cuisines, with fast, reliable service, and hassle-free ordering anytime, anywhere. Satisfy your cravings!</p>
          <p className='hidden xl:flex xl:mt-6 3xl:mt-10 lg:w-[30rem] xl:w-[38rem] 3xl:w-[45rem] text-white tracking-tight font-bold text-[0.8rem]'>Craving something delicious? With just a few clicks, you can get your favorite meals delivered right to your doorstep in minutes. Explore a wide variety of cuisines from top restaurants in your city and enjoy a seamless, hassle-free ordering experience. Fast, reliable, and fresh – we bring the best food to you, whenever and wherever you want it</p>
          <div className='mt-3 lg:mt-6'>
            <a href="#menu"><button className='border-none bg-white cursor-pointer px-3 lg:px-7 py-1 rounded-3xl font-medium active:bg-slate-200'>View menu</button></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main