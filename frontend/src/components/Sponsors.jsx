import React from "react";
import { motion, useInView } from "framer-motion";
import "../styles/Sponsors.css";
import googleLogo from "/google.jpg";
import microsoftLogo from "/Microsoft.svg";
import ibmLogo from "/ibm.webp";
import amazonLogo from "/Amazon.webp";

const sponsors = [
  { name: "Google", logo: googleLogo, link: "https://google.com" },
  { name: "Microsoft", logo: microsoftLogo, link: "https://microsoft.com" },
  { name: "IBM", logo: ibmLogo, link: "https://ibm.com" },
  { name: "Amazon", logo: amazonLogo, link: "https://amazon.com" },
];

const Sponsors = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="sponsors">
      <motion.h3
        className="sponsor-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "2.5rem" }}
      >
        Sponsored by
      </motion.h3>
      <motion.div 
        ref={ref}
        className="sponsor-wrapper"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="sponsor-list">
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <motion.a 
              key={index} 
              href={sponsor.link} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="sponsor-logo" 
                style={{ width: "180px", maxWidth: "100%" }}
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Sponsors;
