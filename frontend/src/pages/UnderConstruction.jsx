import React, { useEffect, useState } from "react";

const UnderConstruction = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // Example countdown for 1 hour

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Coming Soon!</h1>
        <p className="text-lg mb-8">We're working hard to bring you something amazing.</p>
        <div className="text-2xl font-mono bg-gray-200 p-4 rounded">
          Time Remaining: {formatTime(timeLeft)}
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
