import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AnimatedContainerProps {
  children: React.ReactNode;
  className: string;
}

const AnimatedContainer: React.FC<AnimatedContainerProps> = ({
  children,
  className,
}) => {
  const [bgColor, setBgColor] = useState("#EEEEEE");
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const colors = ["#EEEEEE", "#FF5A12", "#FF3A12", "#202526"];

    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
      setBgColor(colors[(colorIndex + 1) % colors.length]);
    }, 3000);

    return () => clearInterval(interval);
  }, [colorIndex]);

  return (
    <motion.div
      layoutId="smartAnimateContainer"
      layout
      className={` ${className} flex items-center justify-center flex-col md:w-[300px] w-[180px] md:h-[550px] h-[330px] rounded-[30px] mx-auto `}
      style={{
        backgroundColor: bgColor,
        boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.15)",
      }}
      animate={{
        backgroundColor: bgColor,
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        backgroundColor: { duration: 2, ease: "easeInOut" },
        scale: { duration: 1.5, ease: "easeInOut" },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContainer;
