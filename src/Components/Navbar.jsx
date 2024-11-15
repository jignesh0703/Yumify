import React, { useContext, useState } from 'react'
import { BsCart3 } from 'react-icons/bs';
import { CiSearch } from "react-icons/ci";
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { StoreContext } from '../Context/Context';


const Navbar = ({setshowlogin}) => {

    const {getTotalCart} = useContext(StoreContext)

    const [menu, setmenu] = useState("Home")
    const [icons, seticons] = useState(false)

    const sawicons = () =>{
        seticons(true)
    }

    const hideicons = () =>{
        seticons(false)
    }

  return (
    <>
        <div className="absolute flex justify-center items-center black-overlay w-full h-[109vh] text-white z-[99999]" style={{
            opacity : icons ? 1 : 0,
            visibility : icons ? 'visible' : 'hidden'
        }} onClick={hideicons}>
            <div className='absolute mt-[-30rem] ml-[17rem] text-[2.5rem]'>
                <IoIosCloseCircleOutline />
            </div>
            <ul className="flex flex-col space-y-4 items-center mb-[10rem]">
                    <Link to='/'><a href="#home"><li className="cursor-pointer text-[1.5rem] font-medium w-max" onClick={() => setmenu("Home")}>
                        Home {menu === "Home" ? <hr className="w-full h-[3px] rounded-[15px] bg-[#e95930]" /> : null}
                    </li></a></Link>
                    <a href="#menu"><li className="cursor-pointer text-[1.5rem] font-medium w-max" onClick={() => setmenu("menu")}>
                        Menu {menu === "menu" ? <hr className="w-full h-[3px] rounded-[15px] bg-[#e95930]" /> : null}
                    </li></a>
                    <a href="#app"><li className="cursor-pointer text-[1.5rem] font-medium w-max" onClick={() => setmenu("app")}>
                        Mobile App {menu === "app" ? <hr className="w-full h-[3px] rounded-[15px] bg-[#e95930]" /> : null}
                    </li></a>
                    <a href="#contact"><li className="cursor-pointer text-[1.5rem] font-medium w-max" onClick={() => setmenu("Contact")}>
                        Contact Us {menu === "Contact" ? <hr className="w-full h-[3px] rounded-[15px] bg-[#e95930]" /> : null}
                    </li></a>
                    <div>
                    <Link to="/Cart"><li className="cursor-pointer text-[1.5rem] font-medium w-max" onClick={() => setmenu("Cart")}>
                        Your Cart {menu === "Cart" ? <hr className="w-full h-[3px] rounded-[15px] bg-[#e95930]" /> : null}
                    </li></Link>
                    <div className={getTotalCart()===0?"":"absolute mt-[-33px] ml-[100px] w-[10px] h-[10px] rounded-full bg-red-700"}></div>
                    </div>
            </ul>
        </div>
        <div className='flex justify-around items-center py-6'>
            <div className='text-[1.8rem] cursor-pointer lg:hidden' onClick={sawicons}>
                <MdMenu />
                <div className={getTotalCart()===0?"":"absolute mt-[-33px] ml-[22px] w-[10px] h-[10px] rounded-full bg-red-700"}></div>
            </div>
            <div className='text-[1.5rem] font-black'>
                <h1 className='text-[#e95930] tracking-wide'>Yumify</h1>
            </div>
            <ul className='hidden lg:flex gap-10'>
                <Link to="/"><a href="#home"><li className='cursor-pointer text-[1.1rem] font-medium' onClick={() => setmenu("Home")}>Home{menu==="Home"?<hr className='w-[90%] h-[3px] rounded-[15px] bg-[#e95930]'/>:<></>}</li></a></Link>
                <a href="#menu"><li className='cursor-pointer text-[1.1rem] font-medium' onClick={() => setmenu("menu")}>Menu{menu==="menu"?<hr className='w-[90%] h-[3px] rounded-[15px] bg-[#e95930]'/>:<></>}</li></a>
                <a href="#app"><li className='cursor-pointer text-[1.1rem] font-medium' onClick={() => setmenu("app")}>mobile app{menu==="app"?<hr className='w-[90%] h-[3px] rounded-[15px] bg-[#e95930]'/>:<></>}</li></a>
                <a href="#contact"><li className='cursor-pointer text-[1.1rem] font-medium' onClick={() => setmenu("Contact")}>Contact us{menu==="Contact"?<hr className='w-[90%] h-[3px] rounded-[15px] bg-[#e95930]'/>:<></>}</li></a>
            </ul>
            <div className='flex gap-2 lg:gap-6 items-center'>
                <CiSearch className='text-[1.7rem] hidden lg:flex'/>
                <Link to="/Cart">
                <div className='hidden lg:flex'>
                    <BsCart3 className='text-[1.5rem]'/>
                    <div className={getTotalCart()===0?"":"absolute mt-[-8px] ml-[18px] w-[10px] h-[10px] rounded-full bg-red-700"}>
                    </div>
                </div></Link>
                <button onClick={()=>setshowlogin(true)} className='border border-[#A6AEBF] px-3 lg:px-7 py-1 rounded-3xl font-bold active:bg-slate-200'>Sign in</button>
            </div>
        </div>
    </>
  )
}

export default Navbar