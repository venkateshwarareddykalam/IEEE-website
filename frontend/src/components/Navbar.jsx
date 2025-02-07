import React from "react";
import { navbar } from "../constants";
import MenuButton from "./MenuButton";
import { motion } from "framer-motion";

const Navbar = () => {
  const buttons = navbar.filter((item) => item.type !== "icon");

  return (
    <nav className="bg-white shadow-md sticky top-0 left-0 w-full z-50">
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-2 sm:py-0 h-auto sm:h-16">
        {/* Left Side - Logos */}
        <div className="flex items-center space-x-4 sm:space-x-6 mb-2 sm:mb-0">
          <motion.img
            src="https://s3-us-west-1.amazonaws.com/foscoshopify/graphics/uploads/2010/12/IEEE-logo.gif"
            alt="IEEE Logo"
            className="h-10 sm:h-12 w-auto"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="https://www.cbit.ac.in/wp-content/uploads/2023/04/CBIT-LOGO-2023.png"
            alt="CBIT Logo"
            className="h-10 sm:h-12 w-auto"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Right Side - Menu Buttons with Hover Effect */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
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
      </div>
    </nav>
  );
};

export default Navbar;
