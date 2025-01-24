import React from 'react'
import MenuListComposition from '../components/MenuButton'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import AboutUs from '../components/AboutUs'
import HeroSection from '../components/HeroSection'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutUs/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home