import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AnimatedContainerProps {
  children: React.ReactNode;
}

const AnimatedContainer: React.FC<AnimatedContainerProps> = ({ children }) => {
  const [bgColor, setBgColor] = useState("#EEEEEE");
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    // Move the array of colors inside useEffect to prevent dependency changes
    const colors = ["#EEEEEE", "#FF5A12", "#FF3A12", "#202526"];

    // Change the background color every 3 seconds
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length); // Update color index
      setBgColor(colors[(colorIndex + 1) % colors.length]); // Set background color to the next one
    }, 3000); // Set interval to 3 seconds for smoother color transition

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [colorIndex]); // Only depend on colorIndex to prevent re-renders

  return (
    <motion.div
      layoutId="smartAnimateContainer"
      layout
      className="flex items-center justify-center flex-col md:w-[300px] w-[180px] md:h-[500px] h-[300px] rounded-[30px] mx-auto"
      style={{
        backgroundColor: bgColor,
        boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.15)",
      }}
      animate={{
        backgroundColor: bgColor, // Animate background color
        scale: [1, 1.05, 1], // Scale up slightly and return to original size for a subtle breathing effect
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        backgroundColor: { duration: 2, ease: "easeInOut" },
        scale: { duration: 1.5, ease: "easeInOut" }, // Smooth scaling transition
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContainer;
