import React, { useContext } from 'react'
import { StoreContext } from '../Context/Context'

const Cart = () => {

  const { food_list, removeFromCart, cartitem , getTotalCart} = useContext(StoreContext)

  return (
    <>
      <div className='mt-[5rem] w-[90%] ml-[5%] sm:w-[80%] sm:ml-[10%]'>
        <div>
          <div className='grid neww_grid sm:new_grid items-center mr-8 text-base'>
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr className='h-[1px] border-none bg-[#e2e2e2]' />
          {food_list.map((item, index) => {
            if (cartitem[item.id] > 0) {
              return (
                <>
                  <div className='grid neww_grid sm:new_grid items-center mr-8 mt-[10px] text-black font-bold text-[0.rem]' key={index}>
                    <img src={item.image} alt="image" className='w-[40px] sm:w-[50px]' />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartitem[item.id]}</p>
                    <p>${item.price * cartitem[item.id]}</p>
                    <p className='cursor-pointer' onClick={() => removeFromCart(item.id)}>x</p>
                  </div>
                  <hr className='h-[1px] border-none bg-[#e2e2e2] mt-[10px]' />
                </>
              )
            }
          })}
        </div>
        <div className='mt-[5rem]'>
          <div>
            <h1 className='text-[1.5rem] font-bold'>Cart Totals</h1>
            <div className='flex justify-between w-[18rem] sm:w-[25rem] border-b-[1px] border-slate-400 py-1 mt-4'>
              <p>Subtotal</p>
              <p>${getTotalCart()}</p>
            </div>
            <div className='flex justify-between w-[18rem] sm:w-[25rem] border-b-[1px] border-slate-400 py-1 mt-2'>
              <p>Delivery Fee</p>
              <p>${getTotalCart()===0?0:2}</p>
            </div>
            <div className='flex justify-between w-[18rem] sm:w-[25rem] border-b-[1px] border-slate-400 py-1 font-bold mt-2'>
              <p>Total</p>
              <p>${getTotalCart()===0?0:getTotalCart()+2}</p>
            </div>
            <button className='mt-4 w-[14rem] bg-orange-700 border-none mb-4 h-8 outline-none rounded-[5px] font-bold text-white cursor-pointer text-[0.8rem]'>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart