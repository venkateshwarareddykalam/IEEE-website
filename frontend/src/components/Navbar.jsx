import React from "react";
import { navbar } from "../constants";
import MenuButton from "./MenuButton";
import { motion } from "framer-motion";

const Navbar = () => {
  const buttons = navbar.filter((item) => item.type !== "icon");

  return (
    <nav className="h-16 bg-white shadow-md sticky top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center px-6 h-full">
        {/* Left Side - Logos */}
        <div className="flex items-center space-x-6">
          <motion.img
            src="https://s3-us-west-1.amazonaws.com/foscoshopify/graphics/uploads/2010/12/IEEE-logo.gif"
            alt="IEEE Logo"
            className="h-12 w-auto"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="https://www.cbit.ac.in/wp-content/uploads/2023/04/CBIT-LOGO-2023.png"
            alt="CBIT Logo"
            className="h-12 w-auto"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Right Side - Menu Buttons with Hover Effect */}
        <div className="flex space-x-6">
          {buttons.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, backgroundColor: "#f3f4f6" }}
              transition={{ duration: 0.3 }}
              className="rounded-md p-2"
            >
              <MenuButton data={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;