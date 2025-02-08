import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Advisory from "./components/Advisory";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/Home.css";
import ComingSoon from "./components/ComingSoon";
import Login from "./pages/Login";
import UnderConstruction from "./pages/UnderConstruction";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/advisory-board" element={<Advisory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/under-construction" element={<UnderConstruction />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
