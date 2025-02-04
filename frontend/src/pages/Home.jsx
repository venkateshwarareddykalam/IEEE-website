import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import HeroSection from '../components/HeroSection';
import ConferenceTimer from '../components/ConferenceTimer';
import '../styles/Home.css'; // Import CSS
import IEEEConferenceTable from '../components/IEEEConferenceTable';
const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content */}
      <div className="main-content">
        <HeroSection />
        <ConferenceTimer />
        <IEEEConferenceTable/>
        <Testimonials />
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Home;
