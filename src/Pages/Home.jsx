import React, { useState } from 'react'
import Main from '../components/Main'
import Explore_menu from '../Components/Explore_menu'
import Food_Display from '../Components/Food_Display';
import Mobile_App from '../Components/Mobile_App';

const Home = () => {

  const [category, setcategory] = useState("All");
  return (
    <>
      <Main />
      <Explore_menu category={category} setcategory={setcategory}/>
      <Food_Display category={category}/>
      <Mobile_App />
    </>
  )
}

export default Home