import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import footerData from '../footerdata.js';

const Footer = () => {
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } }
    };

    const slideIn = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    return (
        <motion.footer
            className="bg-black text-white py-10 px-6 md:px-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
        >
            <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {footerData.map((section, index) => (
                    <motion.div
                        key={index}
                        className="w-full"
                        initial="hidden"
                        animate="visible"
                        variants={slideIn}
                        transition={{ delay: index * 0.2 }}
                    >
                        {section.section === "contactInfo" ? (
                            <div>
                                <h2 className="text-xl font-bold">{section.items.name}</h2>
                                <p className="mt-2 flex items-center"><FaMapMarkerAlt className="mr-2" /> {section.items.institute}, {section.items.location}</p>
                                <p className="mt-2 flex items-center"><FaPhone className="mr-2" /> {section.items.phone}</p>
                                <p className="mt-2 flex items-center"><FaEnvelope className="mr-2" /> {section.items.email}</p>
                            </div>
                        ) : section.section === "socialLinks" ? (
                            <>
                                <h3 className="text-lg font-bold">Social Links</h3>
                                <ul className="mt-2 space-y-2">
                                    {section.items.map((link, idx) => (
                                        <li key={idx} className="flex items-center space-x-2">
                                            {link.label === "Facebook" && <FaFacebook />}
                                            {link.label === "X" && <FaXTwitter />}
                                            {link.label === "LinkedIn" && <FaLinkedin />}
                                            <Link to={link.url} className="hover:underline transition duration-300 ease-in-out">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <>
                                <h3 className="text-lg font-bold">{section.section.replace(/([A-Z])/g, ' $1').trim()}</h3>
                                <ul className="mt-2 space-y-2">
                                    {section.items.map((link, idx) => (
                                        <li key={idx}>
                                            <Link to={link.url} className="hover:underline transition duration-300 ease-in-out">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </motion.div>
                ))}
            </div>
            <motion.div
                className="border-t border-gray-700 mt-10 pt-4 text-center"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: 1 }}
            >
                <p>© 2025 <span className="font-bold">sasigd</span>. All Rights Reserved.</p>
            </motion.div>
        </motion.footer>
    );
};

export default Footer;
