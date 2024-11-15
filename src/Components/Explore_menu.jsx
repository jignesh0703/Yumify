import React from 'react'
import menu_list from '../Arrays/Menu_list'

const Explore_menu = ({category,setcategory}) => {
  return (
    <>
        <div className='mt-6 w-[90%] ml-[5%] sm:w-[80%] sm:ml-[10%]' id='menu'>
            <div>
                <h1 className='text-[2rem] font-bold tracking-tight'>Explore our menu</h1>
                <div className='flex justify-between'>
                    <p className='font-bold mt-2'>Whether you're in the mood for a quick bite or a hearty meal, we've got you covered. Explore our menu and find your next favorite dish!</p>
                    
                </div>
            </div>
            <div className='flex justify-between items-center gap-[30px] text-center overflow-x-scroll mt-8 scroll'>
                {
                    menu_list.map(
                        (item,index)=>{
                            return <div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index}>
                                <img src={item.menu_image} alt="imgs" className={`w-[9rem] min-w-[9rem] cursor-pointer rounded-[50%] transition duration-200 ${category===item.menu_name ? 'border-[3px] border-red-600 p-[2px]' : ''}`}/>
                                <h1 className='text-xl font-bold mt-2 text-[#747474] cursor-pointer'>{item.menu_name}</h1>
                            </div>
                        }
                    )
                }
            </div>
        </div>
        <hr className='w-[90%] ml-[5%] sm:w-[80%] sm:ml-[10%] flex justify-center mb-8 items-center mt-12 border border-slate-200'/>
    </>
  )
}

export default Explore_menu