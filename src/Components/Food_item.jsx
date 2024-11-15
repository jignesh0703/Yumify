import React, { useContext, useState } from 'react'
import rating from '../assets/frontend_assets/rating_starts.png'
import plus from '../assets/frontend_assets/add_white.png'
import green_plus from '../assets/frontend_assets/add_icon_green.png'
import red_minus from '../assets/frontend_assets/remove_red.png'
import { StoreContext } from '../Context/Context'

const Food_item = ({id,image,name,description,price}) => {

    const {cartitem,addToCart,removeFromCart} =useContext(StoreContext);
    return (
        <>
            <div className='w-[20rem] shadow_new pb-6 rounded-[15px] overflow-hidden cursor-pointer transition duration-100 hover:scale-[0.98]'>
                <div className='w-[20rem]'>
                    <img src={image} alt="image" className='brightness-90'/>
                    {!cartitem[id]
                        ?<div className='w-[35px] cursor-pointer rounded-full absolute ml-[16.5rem] mt-[-3rem]'>
                            <img src={plus} alt="plus_icon" onClick={()=>addToCart(id)}/>
                        </div>
                        :<div className='flex absolute ml-[12.5rem] bg-white gap-[10px] p-[6px] rounded-[50px] mt-[-3.5rem] items-center'>
                            <img src={red_minus} onClick={()=>removeFromCart(id)} alt="minus_icon" className='w-[30px] cursor-pointer rounded-full'/>
                            <p className='font-bold'>{cartitem[id]}</p>
                            <img src={green_plus} onClick={()=>addToCart(id)} alt="plus_icon" className='w-[30px] cursor-pointer rounded-full'/>
                        </div>
                    }
                </div>
                <div className='flex justify-between mt-4 w-[18rem] ml-4 items-center'>
                    <h1 className='font-bold'>{name}</h1>
                    <img src={rating} alt="rating" className='w-[80px] h-[20px]' />
                </div>
                <div className='w-[18rem] ml-4 mt-3'>
                    <h1 className='text-[13px] text-[#747474]'>{description}</h1>
                    <h1 className='mt-2 text-[#e95930] font-bold text-xl'>${price}</h1>
                </div>
            </div>
        </>
    )
}

export default Food_item