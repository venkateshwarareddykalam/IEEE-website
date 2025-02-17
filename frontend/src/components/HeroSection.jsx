import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "https://www.cbit.ac.in/wp-content/uploads/2019/03/Office-tab-scaled.jpeg",
  "https://wallpaperaccess.com/full/2142411.jpg", // Test image
  "https://live.staticflickr.com/476/19242165300_2d97f27edf_b.jpg",
  "https://wallpaperaccess.com/full/2142432.jpg",
  "https://i.ytimg.com/vi/UPRKkSU5_40/maxresdefault.jpg",
  "https://thumbs.dreamstime.com/b/durgam-cheruvu-bridge-hitech-city-hyderabad-fourth-most-populous-sixth-urban-agglomeration-india-october-269614735.jpg",
  "https://c8.alamy.com/comp/E2A25Y/india-andhra-pradesh-state-warangal-the-fort-stone-gateway-kirti-torana-E2A25Y.jpg",
  "https://wallpaperaccess.com/full/2142631.jpg",
  "https://wallpaperaccess.com/full/2142451.jpg",
  "https://www.cbit.ac.in/wp-content/uploads/2019/03/Office-tab-scaled.jpeg",
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
         IEEE International Conference on (SASIGD 2025)
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
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