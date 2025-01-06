"use client";

import React, { useEffect, useState } from "react";

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedContainer: React.FC<AnimatedContainerProps> = ({
  children,
  className = "",
}) => {
  // Static colors array
  const colors = ["#EEEEEE", "#FF5A12", "#FF3A12", "#202526"];
  const [colorIndex, setColorIndex] = useState(0);

  // Change background color at a 3-second interval
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`animated-container ${className}`}
      style={{
        backgroundColor: colors[colorIndex],
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedContainer;
