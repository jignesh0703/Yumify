import React, { useState } from 'react'
import cross_icon from '../assets/frontend_assets/cross_icon.png'

const Login_Signup = ({ setshowlogin }) => {

    const [state, setstate] = useState("Sign Up")

    return (
        <>
            <div className='black-overlay z-50 w-full h-full fixed flex justify-center items-center' onClick={(event)=>setshowlogin(false)}>
                <div className='w-[20rem] sm:w-[30rem] h-auto bg-white flex justify-center items-center pt-6 pb-10 rounded-[15px]' onClick={(e)=>e.stopPropagation()}>
                    <div className='w-[18rem] sm:w-[26rem] h-auto'>
                        <div className='flex justify-between items-center border-b-2 border-slate-200 rounded-none pb-3'>
                            <h1 className='text-[1.5rem] font-bold'>{state}</h1>
                            <img src={cross_icon} alt="cross_icon" onClick={() => setshowlogin(false)} className='w-[1.5rem] h-[1.5rem] cursor-pointer' />
                        </div>
                        <form className='grid mt-6'>
                            {state === "Sign Up" ? <input type="text" placeholder='Enter Your Name' required className='ml-[1rem] w-[16rem] sm:w-[24rem] border-slate-400 border mb-6 h-10 outline-none rounded-[5px] pl-4 font-bold' /> : <></>}
                            <input type="email" placeholder='Enter Your Email' required className='ml-[1rem] w-[16rem] sm:w-[24rem] border-slate-400 border mb-6 h-10 outline-none rounded-[5px] pl-4 font-bold' />
                            <input type="password" placeholder='Enter Your Password' required className='ml-[1rem] w-[16rem] sm:w-[24rem] border-slate-400 border mb-6 h-10 outline-none rounded-[5px] pl-4 font-bold' />
                            <button type='submit' className='ml-[1rem] w-[16rem] sm:w-[24rem] bg-[#e95930] border-none mb-4 h-10 outline-none rounded-[5px] font-bold text-white cursor-pointer'>{state === "Sign Up" ? "Create Account" : "Login"}</button>
                            <div className='flex w-[16rem] sm:w-[24rem] ml-[1rem] items-start'>
                                <input type="checkbox" required className='mt-[6px] cursor-pointer' />
                                <p className='ml-2 tracking-wide'>By Continuing. i agree to the terms of use & privacy policy.</p>
                            </div>
                            <div className='w-[24rem] ml-[1rem] mt-6'>
                                {state === "Sign Up"
                                    ? <h1>Already have a an account?<span onClick={() => setstate("Login")} className='text-[#e95930] ml-1 cursor-pointer font-bold'>Login here</span></h1>
                                    : <h1>Create a new account?<span onClick={() => setstate("Sign Up")} className='text-[#e95930] ml-1 cursor-pointer font-bold'>Click here</span></h1>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login_Signup