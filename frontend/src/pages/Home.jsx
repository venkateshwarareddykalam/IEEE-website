import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AgendaSpeakers from '../components/AgendaSpeakers';
import HeroSection from '../components/HeroSection';
import ConferenceTimer from '../components/ConferenceTimer';
import '../styles/Home.css'; // Import CSS
import IEEEImportantDates from "../components/IEEEImportantDates"
import Sponsors from '../components/Sponsors';
const Home = () => {
  return (
    
      <>
      {/* Main content */}
      <Navbar/>
      <div className="main-content">
        <HeroSection />
        <ConferenceTimer />
        <IEEEImportantDates/>
        <AgendaSpeakers />
        <Sponsors/>
        <Footer/>
      </div>
      </>
      
  );
};

export default Home;
