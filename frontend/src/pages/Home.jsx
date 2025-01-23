import React from 'react'
import MenuListComposition from '../components/MenuButton'
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <div>
      hello
      <Navbar/>
      <MenuListComposition data={{name:"menu","submenu":["option1","option2"]}}/>
    </div>
  )
}

export default Home