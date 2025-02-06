import React from "react";

const dates = [
  { label: "Early Bird Registration Deadline", date: "5th February 2025" },
  { label: "Abstract Submission Deadline", date: "20th February 2025" },
  { label: "Full Paper Submission Deadline", date: "28th February 2025" },
  { label: "Registration Deadline", date: "4th March 2025" }
];

const ImportantDates = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
      <div className="text-center max-w-4xl w-full">
        <h2 className="text-2xl font-bold text-[#0C0636] mb-16">
          Important <span className="text-[#3A4D8F]">Dates</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {dates.map((item, index) => (
            <div key={index} className="relative bg-white p-5 rounded-lg shadow-md text-center transition-transform transform hover:-translate-y-1 hover:shadow-lg">
              <div className="w-full h-2 bg-[#3A4D8F] absolute top-0 left-0 rounded-t-lg"></div>
              <div className="w-12 h-12 bg-white border-4 border-[#3A4D8F] rounded-full flex justify-center items-center absolute -top-6 left-1/2 transform -translate-x-1/2 shadow-md">
                <img src="https://cdn-icons-png.flaticon.com/512/747/747310.png" alt="Calendar" className="w-6" />
              </div>
              <div className="mt-8 font-bold text-lg text-gray-800">{item.label}</div>
              <div className="text-[#3A4D8F] font-bold mt-2">{item.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImportantDates;