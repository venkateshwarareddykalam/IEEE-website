import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "src/assets/cbit.jpg", // Test image
  "src/assets/charminar.png",
  "src/assets/cybertowers.png",
  "src/assets/cablebridge.png",
  "src/assets/warangal fort.png",
  "src/assets/hitech.png",
  "src/assets/image1.png",
  "src/assets/image2.png",
  "src/assets/image3.png",
  "src/assets/image.png",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log("Slideshow running...");
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1] transition-opacity duration-1000 ease-in-out opacity-100">
        <img
          src={images[index]}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to SASIGD 2025 IEEE International Conference
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Discover the best content and connect with amazing people.
        </motion.p>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setIndex(i)}
            style={{ cursor: "pointer" }}
          ></div>
        ))}
      </div>
    </section>
  );
}