import React, { useState } from "react";
import { navbar } from "../constants";
import MenuButton from "./MenuButton";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu
  const navigate = useNavigate(); 
  const buttons = navbar.filter((item) => item.type !== "icon");

  return (
    <nav className="bg-white shadow-md sticky top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-4 sm:px-6 h-16">
        {/* Centered Logos */}
        <div className="flex justify-center items-center space-x-4">
          <motion.img
            src="https://www.cbit.ac.in/wp-content/uploads/2023/04/CBIT-LOGO-2023.png"
            alt="SASIGD Logo"
            className="h-10 sm:h-12 w-auto"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="https://s3-us-west-1.amazonaws.com/foscoshopify/graphics/uploads/2010/12/IEEE-logo.gif"
            alt="IEEE Logo"
            className="h-10 sm:h-12 w-auto"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="sm:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu state
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Full Menu for Larger Screens */}
        <div className="hidden sm:flex space-x-6 items-center">
          {buttons.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, backgroundColor: "#f3f4f6" }}
              transition={{ duration: 0.2 }}
              className="rounded-md p-2"
            >
              <MenuButton data={item} />
            </motion.div>
          ))}
          {/* Submit Paper Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.1 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-transform duration-300 ease-in-out hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500"
            onClick={() => (window.location.href = "/login")} // Navigate to login page
          >
            Submit Paper
          </motion.button>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <motion.img
            src="https://www.cbit.ac.in/wp-content/uploads/2023/04/CBIT-LOGO-2023.png"
            alt="CBIT Logo"
            className="h-10 sm:h-12 w-auto"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white shadow-md">
          <div className="flex flex-col items-start space-y-4 px-4 py-2">
            {buttons.map((item, index) => (
              <MenuButton key={index} data={item} />
            ))}
            {/* Submit Paper Button */}
            <button
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-transform duration-300 ease-in-out hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 w-full text-center"
              onClick={() => (navigate("/login"))} // Navigate to login page
            >
              Submit Paper
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
