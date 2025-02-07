import React, { useState } from "react";
import { navbar } from "../constants";
import MenuButton from "./MenuButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const buttons = navbar.filter((item) => item.type !== "icon");

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

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
        <div className="hidden md:flex space-x-6 items-center">
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
          >
            <Link to="/submitpaper">Submit Paper</Link>
          </motion.button>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;