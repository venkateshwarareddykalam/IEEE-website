import React from "react";
import { motion, useInView } from "framer-motion";

const dates = [
  { label: "Conference", date: "13th November 2025" },
  { label: "Abstract Submission Deadline", date: "20th February 2025" },
  { label: "Full Paper Submission Deadline", date: "28th February 2025" },
  { label: "Registration Deadline", date: "4th March 2025" }
];

const ImportantDates = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex justify-center items-center bg-gray-100 p-5 min-h-fit">
      <motion.div 
        ref={ref}
        className="text-center max-w-4xl w-full"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5 }}
      >
        <motion.p
        ref={ref}
        initial={{opacity:0,x:-100}}
        animate={isInView ? { opacity: 1, x:0 } : {}}
        transition={{ duration: 1.5 }}

        >
        <h2 className="text-3xl font-bold text-[#0C0636] mb-16">
          Important <span className="text-[#3A4D8F]">Dates</span>
        </h2>
        </motion.p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {dates.map((item, index) => (
            <motion.div 
              key={index} 
              className="relative bg-white p-5 rounded-lg shadow-md text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="w-full h-2 bg-[#3A4D8F] absolute top-5 left-0 rounded-t-lg"></div>
              <div className="w-12 h-12 bg-white border-4 border-[#3A4D8F] rounded-full flex justify-center items-center absolute -top-0 left-1/2 transform -translate-x-1/2 shadow-md">
                <img src="https://cdn-icons-png.flaticon.com/512/747/747310.png" alt="Calendar" className="w-6" />
              </div>
              <div className="mt-8 font-bold text-lg text-gray-800">{item.label}</div>
              <div className="text-[#3A4D8F] font-bold mt-2">{item.date}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ImportantDates;