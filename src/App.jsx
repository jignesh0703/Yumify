import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Footer from './Components/Footer'
import Login_Signup from './Components/Login_Signup'

function App() {

  const [showlogin, setshowlogin] = useState(false)

  return (
    <>
      {showlogin?<Login_Signup setshowlogin={setshowlogin}/>:<></>}
      <Router>
      <Navbar setshowlogin={setshowlogin}/>
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/Cart' element={<Cart />}/>
      </Routes>
      <Footer />
      </Router>
    </>
  )
}

export default App