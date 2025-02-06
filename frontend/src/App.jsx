import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Advisory from "./components/Advisory";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/Home.css";
import ComingSoon from "./components/ComingSoon";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar/>
    <div className="main-content">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advisory-board" element={<Advisory />} />
        <Route path="*" element={<ComingSoon/>} />
      </Routes>
    <Footer/>
    </div>
      
    </>
  );
}

export default App;
