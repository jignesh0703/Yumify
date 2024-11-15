import React from 'react'
import play_store from '../assets/frontend_assets/play_store.png'
import app_store from '../assets/frontend_assets/app_store.png'

const Mobile_App = () => {
  return (
    <>
      <div id='app' className='flex justify-center'>
        <div className='w-[90%] sm:w-[80%] flex justify-center pt-10'>
          <div>
            <div className='text-[1.5rem] sm:text-[2rem] font-bold text-center'>
              <h1>For Better Experience Download <br className='hidden sm:flex'/>Yumify App</h1>
            </div>
            <div className='flex mt-4 gap-4 w-full justify-center'>
              <img src={play_store} alt="play_store" className='w-[150px] sm:w-[180px] cursor-pointer transition duration-500 hover:scale-[1.05]'/>
              <img src={app_store} alt="App_store" className='w-[150px] sm:w-[180px] cursor-pointer transition duration-500 hover:scale-[1.05]'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mobile_App