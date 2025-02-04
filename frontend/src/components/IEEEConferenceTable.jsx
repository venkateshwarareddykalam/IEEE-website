import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const conferenceDates = [
  { date: "2025-01-15", event: "Paper Submission Deadline" },
  { date: "2025-02-10", event: "Notification of Acceptance" },
  { date: "2025-03-05", event: "Camera Ready Submission" },
  { date: "2025-04-20", event: "Conference Start Date" },
];

const IEEEConferenceTable = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.5 }}
      className="w-full p-5 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl shadow-2xl"
    >
      <h1 className="text-5xl font-extrabold text-center mb-5 text-white drop-shadow-lg uppercase tracking-wide">
        <Typewriter words={["IEEE Important Conference Dates"]} loop={false} cursor />
      </h1>
      <div className="flex justify-center">
        <TableContainer component={Paper} className="shadow-lg overflow-hidden rounded-xl bg-white w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5 }}
          >
            <Table className="w-full">
              <TableHead>
                <TableRow className="bg-gradient-to-r from-teal-700 to-green-700">
                  <TableCell className="text-white font-extrabold text-xl tracking-wider text-center py-3">Date</TableCell>
                  <TableCell className="text-white font-extrabold text-xl tracking-wider text-center py-3">Event</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {conferenceDates.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.3, duration: 1.5 }}
                    className="hover:bg-teal-200 transition-all duration-300"
                  >
                    <TableCell className="py-4 px-6 text-gray-900 font-bold text-lg border-b border-gray-300 text-center">
                      {row.date}
                    </TableCell>
                    <TableCell className="py-4 px-6 text-gray-900 font-bold text-lg border-b border-gray-300 text-center">
                      {row.event}
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </motion.div>
        </TableContainer>
      </div>
    </motion.div>
  );
};

export default IEEEConferenceTable;