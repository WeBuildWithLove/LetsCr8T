import React from "react";
import Image from "next/image";

interface TeamImagesProps {
  src: string;
  hoverSrc: string;
  normalWidth: number;
  normalHeight: number;
  hoverScale: number; // Scale factor for hover effect
  isDimmed?: boolean; // Dimmed effect based on group selection
}

const TeamImages: React.FC<TeamImagesProps> = ({
  src,
  hoverSrc,
  normalWidth,
  normalHeight,
  hoverScale,
  isDimmed,
}) => {
  return (
    <div
      className={`group relative transition-all duration-500 ease-in-out ${
        isDimmed ? "opacity-10 scale-[0.95]" : "opacity-100 scale-100"
      }`}
      style={{ width: normalWidth, height: normalHeight }} // Fixed size container
    >
      {/* Normal image */}
      <Image
        src={src}
        alt="Team member"
        className={`absolute group-hover:hidden transition-all duration-300 ease-in-out`}
        width={normalWidth}
        height={normalHeight}
        priority
      />

      {/* Hover image with scaling */}
      <Image
        src={hoverSrc}
        alt="Team member hover"
        className={`absolute hidden group-hover:block transition-all duration-300 ease-in-out`}
        style={{ transform: `scale(${hoverScale})`, transformOrigin: "center" }} // Apply scaling on hover
        width={normalWidth}
        height={normalHeight}
        priority
      />
    </div>
  );
};

export default TeamImages;
