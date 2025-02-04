import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Card, CardContent } from "@mui/material";

const conferenceDates = [
  { name: "Early Bird Registration Deadline", date: "5th February 2025" },
  { name: "Abstract Submission Deadline", date: "20th February 2025" },
  { name: "Full Paper Submission Deadline", date: "28th February 2025" },
  { name: "Registration Deadline", date: "4th March 2025" },
];

const IEEEConferenceTable = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full mx-auto mt-10 p-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-2xl"
    >
      <h1 className="text-4xl font-extrabold text-center mb-5 text-white drop-shadow-lg">
        <Typewriter words={["IEEE Important Conference Dates"]} loop={false} cursor />
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {conferenceDates.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 rounded-xl shadow-lg bg-white text-center relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center border-4 border-blue-500 shadow-md z-10">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/747/747310.png"
                  alt="Calendar"
                  className="w-8 h-8"
                />
              </div>
              <CardContent>
                <h2 className="text-lg font-bold text-gray-800 mb-2">{item.name}</h2>
                <p className="text-md font-semibold text-blue-500">{item.date}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default IEEEConferenceTable;
